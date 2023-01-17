import 'remirror/styles/all.css';
import {
  EditorComponent,
  Remirror,
  useRemirror,
  ThemeProvider,
} from '@remirror/react';
import { Extension, RemirrorEventListenerProps, RemirrorJSON } from 'remirror';
import {
  PlaceholderExtension,
  BoldExtension,
  HeadingExtension,
  HistoryExtension,
  ItalicExtension,
  UnderlineExtension,
  ImageExtension,
  DropCursorExtension,
  StrikeExtension,
  HorizontalRuleExtension,
  BlockquoteExtension,
  CodeExtension,
  HardBreakExtension,
  IframeExtension,
  LinkExtension,
  TableExtension,
  NodeFormattingExtension,
  CalloutExtension,
} from 'remirror/extensions';
import {
  BulletListExtension,
  OrderedListExtension,
  TaskListExtension,
} from '@remirror/extension-list';
import { CodeMirrorExtension } from '@remirror/extension-codemirror6';
import { bracketMatching } from '@codemirror/language';
import { languages } from '@codemirror/language-data';
import {
  history,
  // historyKeymap,
  // defaultKeymap,
  // indentMore,
  // indentLess,
} from '@codemirror/commands';
// import {
  //   drawSelection,
  //   highlightActiveLineGutter,
  //   highlightSpecialChars,
  //   keymap,
  //   rectangularSelection,
// } from '@codemirror/view';
// import { EditorState as CodeMirrorEditorState } from '@codemirror/state';

import { CustomThemeStyledCss } from './Editor.style';
import { EditorToolbar } from './toolbar';
import { gruvBox } from './codeBlockTheme/gruvBoxDark.style';
import { useCallback, useEffect, useState } from 'react';
import { DocumentId } from '../../../lib/types';
import DocumentSaveButton from '../DocumentSaveButton';
import Toolbar from './toolbar/Toolbar';

const initialContent: RemirrorJSON = {
  type: 'doc',
};

interface Props {
  content?: RemirrorJSON;
  isEditable?: boolean;
  documentId?: DocumentId;
}

function Editor({ content, isEditable = true, documentId }: Props) {
  const [editable, setEditable] = useState(isEditable);

  const extensions = () => [
    new BoldExtension(),
    new PlaceholderExtension({
      placeholder: editable ? `내용을 입력하세요.` : undefined,
    }),
    new BoldExtension(), // 굵게
    new ItalicExtension(), // 기울임
    new StrikeExtension(), // 취소선
    new UnderlineExtension(), // 밑줄
    new BulletListExtension({ enableSpine: true }), // 리스트
    new OrderedListExtension(), // 숫자 리스트
    new TaskListExtension(), // 체크박스
    new HeadingExtension(), // 머리말 1 ~ 6
    new HardBreakExtension(),
    new CalloutExtension({ defaultType: 'blank' }), // 콜아웃
    new HistoryExtension(), //실행 취소 및 다시 실행 명령을 제공하고 기록 관련 작업을 처리
    new ImageExtension({ enableResizing: true }), // 이미지 삽입
    new DropCursorExtension({ color: '#7963d2', width: 4 }), // 드롭한 대상이 놓일 위치를 표시
    new HorizontalRuleExtension(), // 수평선 추가
    new BlockquoteExtension(), // 인용문
    new CodeExtension(), // Inline Code Blocks
    // new TrailingNodeExtension(), // 마지막에 항상 한줄 띔
    new IframeExtension({ enableResizing: true }),
    new LinkExtension({ autoLink: true }),
    new TableExtension(),
    new NodeFormattingExtension(),
    new CodeMirrorExtension({
      languages,
      extensions: [gruvBox, history(), bracketMatching()],
    }),
  ];

  const { manager, state, setState, getContext } = useRemirror({
    extensions: extensions,
    content: content ? content : initialContent,
    selection: 'end',
  });

  useEffect(() => {
    /**
     * `cmContentTypeCast`
     * 타입 추론에 의한 Element interface에는
     * ContentEditable 속성 관련 interface가 상속 되어 있지 않아
     * ContentEditable이 상속된 HTMLElement로 강제 타입 캐스팅
     */
    const viewDomList = getContext()?.view.dom.children;
    if (viewDomList !== undefined) {
      for (const cmEditor of viewDomList) {
        if (cmEditor.classList.contains('cm-editor')) {
          for (const cmScroller of cmEditor.children) {
            if (cmScroller.classList.contains('cm-scroller')) {
              for (const cmContent of cmScroller.children) {
                if (cmContent.classList.contains('cm-content')) {
                  const cmContentTypeCast = cmContent as HTMLElement;
                  cmContentTypeCast.contentEditable = `${editable}`;
                }
              }
            }
          }
        }
      }
    }
  }, [editable]);

  const onChangeState = useCallback(
    (parameter: RemirrorEventListenerProps<Extension>) => {
      setState(parameter.state);
      const json: RemirrorJSON = parameter.state.doc.toJSON();
      // console.log(json);
    },
    [setState],
  );

  return (
    <CustomThemeStyledCss editable={editable}>
      <ThemeProvider>
        <Remirror
          manager={manager}
          initialContent={state}
          autoFocus={'end'}
          onChange={onChangeState}
          editable={editable}
        >
          {editable && <DocumentSaveButton id={documentId} />}
          <EditorComponent />
          {/* {editable && <EditorToolbar />} */}
          {editable && <Toolbar />}
        </Remirror>
      </ThemeProvider>
    </CustomThemeStyledCss>
  );
}

export default Editor;
