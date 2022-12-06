/**
 * 모바일 브라우저 vh 이슈 대응
 * - safari, 삼성 브라우저 등
 * */
export const calculateVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
