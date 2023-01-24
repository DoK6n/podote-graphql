import type { ChangeEvent, HTMLProps, KeyboardEvent } from 'react';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  createMarkPositioner,
  LinkExtension,
  ShortcutHandlerProps,
} from 'remirror/extensions';
import {
  FloatingToolbar,
  FloatingWrapper,
  useActive,
  useAttrs,
  useChainedCommands,
  useCurrentSelection,
  useExtensionEvent,
  useUpdateReason,
} from '@remirror/react';
import { LinkIcon, UnLinkIcon, LinkEditIcon } from '../../../vectors';
import MenuButton from './MenuButton';
import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';
import { css } from '@emotion/react';

function useLinkShortcut() {
  const [linkShortcut, setLinkShortcut] = useState<
    ShortcutHandlerProps | undefined
  >();
  const [isEditing, setIsEditing] = useState(false);

  useExtensionEvent(
    LinkExtension,
    'onShortcut',
    useCallback(
      (props) => {
        if (!isEditing) {
          setIsEditing(true);
        }

        return setLinkShortcut(props);
      },
      [isEditing],
    ),
  );

  return { linkShortcut, isEditing, setIsEditing };
}

function useFloatingLinkState() {
  const chain = useChainedCommands();
  const { isEditing, linkShortcut, setIsEditing } = useLinkShortcut();
  const { to, empty } = useCurrentSelection();

  const url = (useAttrs().link()?.href as string) ?? '';
  const [href, setHref] = useState<string>(url);

  // A positioner which only shows for links.
  const linkPositioner = useMemo(
    () => createMarkPositioner({ type: 'link' }),
    [],
  );

  const onRemove = useCallback(() => {
    return chain.removeLink().focus().run();
  }, [chain]);

  const updateReason = useUpdateReason();

  useLayoutEffect(() => {
    if (!isEditing) {
      return;
    }

    if (updateReason.doc || updateReason.selection) {
      setIsEditing(false);
    }
  }, [isEditing, setIsEditing, updateReason.doc, updateReason.selection]);

  useEffect(() => {
    setHref(url);
  }, [url]);

  const submitHref = useCallback(() => {
    setIsEditing(false);
    const range = linkShortcut ?? undefined;

    if (href === '') {
      chain.removeLink();
    } else {
      chain.updateLink({ href, auto: false }, range);
    }

    chain.focus(range?.to ?? to).run();
  }, [setIsEditing, linkShortcut, chain, href, to]);

  const cancelHref = useCallback(() => {
    setIsEditing(false);
  }, [setIsEditing]);

  const clickEdit = useCallback(() => {
    if (empty) {
      chain.selectLink();
    }

    setIsEditing(true);
  }, [chain, empty, setIsEditing]);

  return useMemo(
    () => ({
      href,
      setHref,
      linkShortcut,
      linkPositioner,
      isEditing,
      clickEdit,
      onRemove,
      submitHref,
      cancelHref,
    }),
    [
      href,
      linkShortcut,
      linkPositioner,
      isEditing,
      clickEdit,
      onRemove,
      submitHref,
      cancelHref,
    ],
  );
}

const DelayAutoFocusInput = ({
  autoFocus,
  ...rest
}: HTMLProps<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!autoFocus) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [autoFocus]);

  return <input css={inputStyle} ref={inputRef} {...rest} />;
};

const FloatingLinkToolbar = () => {
  const {
    isEditing,
    linkPositioner,
    clickEdit,
    onRemove,
    submitHref,
    href,
    setHref,
    cancelHref,
  } = useFloatingLinkState();
  const active = useActive();
  const activeLink = active.link();
  const { empty } = useCurrentSelection();

  const handleClickEdit = useCallback(() => {
    clickEdit();
  }, [clickEdit]);

  const linkEditButtons = activeLink ? (
    <>
      <MenuButton
        onClick={handleClickEdit}
        titleOption={{ title: 'Edit Link', commandName: '' }}
      >
        <LinkEditIcon size={18} />
      </MenuButton>
      <MenuButton
        onClick={onRemove}
        titleOption={{ title: 'Remove Link', commandName: '' }}
      >
        <UnLinkIcon size={18} />
      </MenuButton>
    </>
  ) : (
    <MenuButton
      onClick={handleClickEdit}
      titleOption={{ title: 'Add Link', commandName: '' }}
    >
      <LinkIcon size={18} />
    </MenuButton>
  );

  return (
    <>
      {!isEditing && (
        <FloatingToolbarBlock>{linkEditButtons}</FloatingToolbarBlock>
      )}
      {!isEditing && empty && (
        <FloatingToolbarBlock positioner={linkPositioner as any}>
          {linkEditButtons}
        </FloatingToolbarBlock>
      )}

      <FloatingWrapper
        positioner="always"
        placement="bottom"
        enabled={isEditing}
        renderOutsideEditor
      >
        <DelayAutoFocusInput
          style={{ zIndex: 20 }}
          autoFocus
          placeholder="Enter link..."
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setHref(event.target.value)
          }
          value={href}
          onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
            const { code } = event;

            if (code === 'Enter') {
              submitHref();
            }

            if (code === 'Escape') {
              cancelHref();
            }
          }}
        />
      </FloatingWrapper>
    </>
  );
};

const inputStyle = css`
  border-radius: 10px;
  background: ${colors.purple2};
  border: 1px solid ${colors.border2};
  border-radius: 6px;
  color: ${colors.text1};
  padding: 0.4rem;
  outline: none;
`;

const FloatingToolbarBlock = styled(FloatingToolbar)`
  & > div {
    background-color: ${colors.purple4};
    border-radius: 4px;
    border: 2px solid ${colors.border3};
  }
`;

export default FloatingLinkToolbar;
