import styled from '@emotion/styled';
import {
  HeadingLevelButtonGroup,
  ToggleBoldButton,
  CalloutTypeButtonGroup,
  ToggleItalicButton,
  ToggleStrikeButton,
  ToggleUnderlineButton,
  InsertHorizontalRuleButton,
  ToggleBlockquoteButton,
  ToggleCodeButton,
  ListButtonGroup,
  Toolbar,
  useActive,
  useChainedCommands,
  useRemirrorContext,
} from '@remirror/react';
import { ToggleCalloutButton, CommandButton } from '@remirror/react-components';
import {
  CheckboxBlankCircleLineIcon,
  CodeBoxLineIcon,
} from '@remirror/react-components/all-icons';
import { CodeMirrorExtension } from '@remirror/extension-codemirror6';

import { colors } from '../../../../styles/colors';
import { useCallback } from 'react';
const BLANK_CALLOUT = { type: 'blank' };

const CreateCodeMirrorButton = ({ language }: { language: string }) => {
  const { commands } = useRemirrorContext<CodeMirrorExtension>({
    autoUpdate: true,
  });
  const { createCodeMirror } = commands;

  const handleSelect = useCallback(() => {
    if (createCodeMirror.enabled({ language })) {
      createCodeMirror({ language: language });
    }
  }, [createCodeMirror, language]);

  const enabled = createCodeMirror.enabled({ language });

  return (
    <CommandButton
      icon={<CodeBoxLineIcon />}
      commandName=""
      active={!enabled}
      onSelect={handleSelect}
      enabled={enabled}
    />
  );
};

function EditorToolbar() {
  return (
    <Block>
      <CustomToolbar>
        <HeadingLevelButtonGroup />
        <CalloutTypeButtonGroup>
          <ToggleCalloutButton
            attrs={BLANK_CALLOUT}
            icon={<CheckboxBlankCircleLineIcon />}
          />
        </CalloutTypeButtonGroup>
        <ToggleBoldButton />
        <ToggleItalicButton />
        <ToggleStrikeButton />
        <ToggleUnderlineButton />
        <InsertHorizontalRuleButton />
        <ToggleBlockquoteButton />
        <ToggleCodeButton />
        <CreateCodeMirrorButton language="javascript" />
        <ListButtonGroup />
      </CustomToolbar>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
`;

const CustomToolbar = styled(Toolbar)`
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
  div {
    background: ${colors.purple4};
  }
  button {
    color: ${colors.text0};
    background: ${colors.purple4};
    border: 1px solid ${colors.border3};
    font-size: 1.2em;
    padding: 4px;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background-color: ${colors.purple1};
      color: ${colors.text1};
    }
  }
  ul {
    background: ${colors.purple4};
  }
`;

export default EditorToolbar;
