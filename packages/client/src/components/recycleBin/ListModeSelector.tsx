import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { colors } from '../../styles/colors';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FillPage, UiChecksGrid } from '../vectors';

export type ListMode = 'todo' | 'document';

function ListModeItem({
  currentMode,
  mode,
  onSelectMode,
  icon,
  name,
  onUpdateSize,
  index,
}: Props & {
  currentMode: ListMode;
  icon: React.ReactNode;
  name: string;
  index: number;
  onUpdateSize(index: number, size: number): void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    onUpdateSize(index, ref.current.clientWidth);
  }, [onUpdateSize, index]);

  return (
    <Mode
      isActive={mode === currentMode}
      onClick={() => onSelectMode(mode)}
      ref={ref}
    >
      {icon}
      {name}
    </Mode>
  );
}

interface Props {
  mode: ListMode;
  onSelectMode(mode: ListMode): void;
}

function ListModeSelector({ mode, onSelectMode }: Props) {
  const [elementSizes, setElementSizes] = useState([0, 0]);
  const setElementSizeOfIndex = useCallback((index: number, size: number) => {
    setElementSizes((prev) => {
      const next = [...prev];
      next[index] = size;
      return next;
    });
  }, []);

  const modeProps = useMemo(
    () =>
      [
        {
          mode: 'todo',
          icon: <UiChecksGrid />,
          name: '할일',
        },
        {
          mode: 'document',
          icon: <FillPage />,
          name: '문서',
        },
      ] as const,
    [],
  );

  const currentIndex = useMemo(
    () => modeProps.findIndex((p) => p.mode === mode),
    [modeProps, mode],
  );
  const indicatorWidth = elementSizes[currentIndex];
  const indicatorLeft = useMemo(() => {
    const gaps = currentIndex * 16;
    const sizes = elementSizes
      .slice(0, currentIndex)
      .reduce((a, b) => a + b, 0);
    return gaps + sizes;
  }, [currentIndex, elementSizes]);

  return (
    <Block>
      {modeProps.map((props, index) => (
        <ListModeItem
          currentMode={mode}
          onSelectMode={onSelectMode}
          key={props.name}
          index={index}
          onUpdateSize={setElementSizeOfIndex}
          {...props}
        />
      ))}
      {indicatorWidth === 0 ? null : (
        <Indicator
          layout
          style={{
            left: indicatorLeft,
            width: indicatorWidth,
          }}
        />
      )}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 0.5rem;
  gap: 16px;
  position: relative;
`;

interface ModeStyledProps {
  isActive?: boolean;
}

const Mode = styled.div<ModeStyledProps>`
  cursor: pointer;
  display: flex;
  align-items: center;

  color: ${colors.purple0};
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  line-height: 1.5;
  font-size: 16px;
  ${(props) =>
    props.isActive &&
    css`
      color: ${colors.brightPurple};
      font-weight: 600;
    `}
`;

const Indicator = styled(motion.div)`
  height: 3px;
  background: ${colors.brightPurple};
  position: absolute;
  left: 0;
  bottom: -8px;
  border-radius: 1px;
`;

export default ListModeSelector;
