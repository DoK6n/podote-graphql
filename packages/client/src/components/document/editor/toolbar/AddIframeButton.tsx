import { useCommands } from '@remirror/react';
import { default as MenuButton } from './MenuButton';
import React, { useRef, useState, useCallback } from 'react';
import { GlobeSearch } from '../../../vectors';
import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';

function AddIframeButton() {
  const { addIframe } = useCommands();
  const [href, setHref] = useState<string>('');
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setHref(e.target.value);
    },
    [],
  );

  const handleKeyboard: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
      setIsToggle(!isToggle);
      submitButtonRef.current?.click();
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      addIframe({ src: href, height: 250, width: 500 });
      setHref('');
    },
    [addIframe, href],
  );

  const toggleInput: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // form url 경고메시지 기능을 살리면서 포커싱
    setIsToggle((prevIsToggle) => {
      !prevIsToggle ? inputRef.current?.focus() : inputRef.current?.blur();
      return !prevIsToggle;
    });
  };

  return (
    <MenuForm onSubmit={handleSubmit}>
      <MenuInput
        type="url"
        placeholder="Enter URL..."
        ref={inputRef}
        isToggle={isToggle}
        value={href}
        onChange={handleChange}
        onKeyDown={handleKeyboard}
        required
      />
      <MenuButton onClick={toggleInput} titleOption={{ title: 'site embed' }}>
        <GlobeSearch />
      </MenuButton>
      <button type="submit" ref={submitButtonRef} style={{ display: 'none' }} />
    </MenuForm>
  );
}

const MenuInput = styled.input<{ isToggle: boolean }>`
  outline-style: none;
  border-radius: 5px;
  background-color: ${colors.purple0};
  border: 1px solid ${colors.border0};
  color: ${colors.text1};
  padding: 0.2em 0.5em 0.2em 0.5em;
  padding: ${({ isToggle }) => (isToggle ? '0.2em 0.5em 0.2em 0.5em' : '0')};
  border-width: ${({ isToggle }) => (isToggle ? '1px' : '0')};
  width: ${({ isToggle }) => (isToggle ? '10em' : '0')};
  opacity: ${({ isToggle }) => (isToggle ? '1' : '0')};
  transition: ${({ isToggle }) =>
    isToggle
      ? 'all 0.5s ease, opacity 0s, padding 0.1s, border-width 0.1s'
      : 'all 0.4s ease, opacity 0.5s ease, padding 0.2s linear 0.2s, border-width 0.2s linear 0.2s'};

  &::placeholder {
    color: ${colors.text0};
  }
`;

const MenuForm = styled.form`
  display: flex;
  align-items: center;
`;

export default AddIframeButton;
