import styled from '@emotion/styled';
import HeadingButton from './HeadingButton';
import MenuButton from './MenuButton';
import AddIframeButton from './AddIframeButton';
import {
  useActive,
  useChainedCommands,
  useRemirrorContext,
} from '@remirror/react';
import {
  CalloutBlank,
  CalloutError,
  CalloutInfo,
  CalloutWarn,
  CalloutSuccess,
  ListOl,
  ListUl,
  TaskListLtr,
  TextBold,
  TextUnderline,
  FormatItalic,
  FormatStrikethrough,
  BlockquoteLeft,
  Code,
  CodeBlock,
  TableAdd,
  TableMoveAbove,
  TableMoveBelow,
  TableMoveLeft,
  TableMoveRight,
  TableDeleteColumn,
  TableDeleteRow,
} from '../../../vectors';
import { CodeMirrorExtension } from 'remirror/extensions';
import { colors } from '../../../../styles/colors';

const CreateCodeMirrorButton = ({ language }: { language: string }) => {
  const { commands } = useRemirrorContext<CodeMirrorExtension>({
    autoUpdate: true,
  });
  const { createCodeMirror } = commands;
  const enabled = createCodeMirror.enabled({ language });

  return (
    <MenuButton
      onClick={() => createCodeMirror({ language: language })}
      isActive={!enabled}
      titleOption={{ title: `CodeBlock (${language})` }}
    >
      <CodeBlock />
    </MenuButton>
  );
};

function Toolbar() {
  const chain = useChainedCommands();
  const active = useActive();
  return (
    <Block>
      <ScrollBox>
        <HeadingButton level={1} />
        <HeadingButton level={2} />
        <HeadingButton level={3} />
        <MenuButton
          onClick={() => {
            chain.toggleBold().focus().run();
          }}
          isActive={active.bold()}
          titleOption={{ title: 'Bold', commandName: 'toggleBold' }}
        >
          <TextBold />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleItalic().focus().run();
          }}
          isActive={active.italic()}
          titleOption={{ title: 'Italic', commandName: 'toggleItalic' }}
        >
          <FormatItalic />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleUnderline().focus().run();
          }}
          isActive={active.underline()}
          titleOption={{ title: 'Underline', commandName: 'toggleUnderline' }}
        >
          <TextUnderline />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleStrike().focus().run();
          }}
          isActive={active.strike()}
          titleOption={{ title: 'Strike', commandName: 'toggleStrike' }}
        >
          <FormatStrikethrough />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleBlockquote().focus().run();
          }}
          isActive={active.blockquote()}
          titleOption={{ title: 'Blockquote', commandName: 'toggleBlockquote' }}
        >
          <BlockquoteLeft />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleBulletList().focus().run();
          }}
          isActive={active.bulletList()}
          titleOption={{ title: 'BulletList', commandName: 'toggleBulletList' }}
        >
          <ListUl />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleOrderedList().focus().run();
          }}
          isActive={active.orderedList()}
          titleOption={{
            title: 'OrderedList',
            commandName: 'toggleOrderedList',
          }}
        >
          <ListOl />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleTaskList().focus().run();
          }}
          isActive={active.taskList()}
          titleOption={{ title: 'TaskList', commandName: 'toggleTaskList' }}
        >
          <TaskListLtr />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleCallout({ type: 'blank' }).focus().run();
          }}
          isActive={active.callout({ type: 'blank' })}
          titleOption={{ title: 'Callout', commandName: 'toggleCallout' }}
        >
          <CalloutBlank />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleCallout({ type: 'info' }).focus().run();
          }}
          isActive={active.callout({ type: 'info' })}
          titleOption={{ title: 'Callout-info', commandName: '' }}
        >
          <CalloutInfo />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleCallout({ type: 'warning' }).focus().run();
          }}
          isActive={active.callout({ type: 'warning' })}
          titleOption={{ title: 'Callout-warn', commandName: '' }}
        >
          <CalloutWarn />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleCallout({ type: 'error' }).focus().run();
          }}
          isActive={active.callout({ type: 'error' })}
          titleOption={{ title: 'Callout-error', commandName: '' }}
        >
          <CalloutError />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleCallout({ type: 'success' }).focus().run();
          }}
          isActive={active.callout({ type: 'success' })}
          titleOption={{ title: 'Callout-success', commandName: '' }}
        >
          <CalloutSuccess />
        </MenuButton>
        <MenuButton
          onClick={() => {
            chain.toggleCode().focus().run();
          }}
          isActive={active.code()}
          titleOption={{ title: 'Code', commandName: 'toggleCode' }}
        >
          <Code />
        </MenuButton>
        <CreateCodeMirrorButton language="javascript" />
        <AddIframeButton />
        <AccordionBlock isToggle={active.table()}>
          <MenuButton
            onClick={() => {
              chain.addTableColumnAfter().focus().run();
            }}
            titleOption={{ title: 'addTableColumnAfter' }}
          >
            <TableMoveRight />
          </MenuButton>
          <MenuButton
            onClick={() => {
              chain.addTableColumnBefore().focus().run();
            }}
            titleOption={{
              title: 'addTableColumnBefore',
              commandName: 'toggleTable',
            }}
          >
            <TableMoveLeft />
          </MenuButton>
          <MenuButton
            onClick={() => {
              chain.addTableRowBefore().focus().run();
            }}
            titleOption={{
              title: 'addTableRowBefore',
              commandName: 'toggleTable',
            }}
          >
            <TableMoveAbove />
          </MenuButton>
          <MenuButton
            onClick={() => {
              chain.addTableRowAfter().focus().run();
            }}
            titleOption={{
              title: 'addTableRowAfter',
              commandName: 'toggleTable',
            }}
          >
            <TableMoveBelow />
          </MenuButton>
          <MenuButton
            onClick={() => {
              chain.deleteTableColumn().focus().run();
            }}
            titleOption={{
              title: 'deleteTableColumn',
              commandName: 'deleteTableColumn',
            }}
          >
            <TableDeleteColumn />
          </MenuButton>
          <MenuButton
            onClick={() => {
              chain.deleteTableRow().focus().run();
            }}
            titleOption={{
              title: 'deleteTableRow',
              commandName: 'deleteTableRow',
            }}
          >
            <TableDeleteRow />
          </MenuButton>
        </AccordionBlock>
        <MenuButton
          onClick={() => {
            !active.table()
              ? chain.createTable().focus().run()
              : chain.deleteTable().focus().run();
          }}
          isActive={active.table()}
          titleOption={{ title: 'Table', commandName: 'toggleTable' }}
        >
          <TableAdd />
        </MenuButton>
      </ScrollBox>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  position: fixed;
  bottom: 5px;
  left: 0;
  padding: 0.5rem;
  overflow-x: auto;
`;

const ScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;

  -webkit-tap-highlight-color: transparent;
  &::-webkit-scrollbar {
    display: none;
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
  gap: 3px;
`;

const AccordionBlock = styled.div<{ isToggle: boolean }>`
  border-radius: 6px;
  border: 1px solid ${colors.purple0};
  display: flex;
  justify-content: space-between;
  color: ${colors.text1};
  /* max-width: ${({ isToggle }) => (isToggle ? '11rem' : '0')}; */
  min-width: ${({ isToggle }) => (isToggle ? '11rem' : '0')};
  overflow: auto;
  white-space: nowrap;
  opacity: ${({ isToggle }) => (isToggle ? '1' : '0')};
  transition: ${({ isToggle }) =>
    isToggle
      ? 'all 0.5s ease, opacity 0s'
      : 'all 0.5s ease, opacity 0.3s ease, max-width 0.2s ease'};

  &::-webkit-scrollbar { 
    display: none;
  }

  &::placeholder {
    color: ${colors.text0};
  }
`;

export default Toolbar;
