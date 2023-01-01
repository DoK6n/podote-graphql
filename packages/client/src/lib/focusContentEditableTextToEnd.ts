export const focusingEndPositionContentEditableText = (element: HTMLElement) => {
  element.focus();

  const selection = window.getSelection();
  const newRange = document.createRange();
  newRange.selectNodeContents(element);
  newRange.collapse(false);
  selection?.removeAllRanges();
  selection?.addRange(newRange);
};
