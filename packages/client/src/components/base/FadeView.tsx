import { css } from "@emotion/react";
import styled from "@emotion/styled";

const fadeViewStyle = css`
  background: linear-gradient(
    180deg,
    rgba(59, 48, 90),
    rgba(59, 48, 90, 0.991353) 6.67%,
    rgba(59, 48, 90, 0.96449) 13.33%,
    rgba(59, 48, 90, 0.91834) 20%,
    rgba(59, 48, 90, 0.852589) 26.67%,
    rgba(59, 48, 90, 0.768225) 33.33%,
    rgba(59, 48, 90, 0.668116) 40%,
    rgba(59, 48, 90, 0.557309) 46.67%,
    rgba(59, 48, 90, 0.442691) 53.33%,
    rgba(59, 48, 90, 0.331884) 60%,
    rgba(59, 48, 90, 0.231775) 66.67%,
    rgba(59, 48, 90, 0.147411) 73.33%,
    rgba(59, 48, 90, 0.0816599) 80%,
    rgba(59, 48, 90, 0.03551) 86.67%,
    rgba(59, 48, 90, 0.0086472) 93.33%,
    rgba(59, 48, 90, 0)
  );
`;

export const FadeView = styled.div`
  pointer-events: none;
  width: calc(100% - 4.2rem);
  flex: 1;
  margin-right: 1rem;
  height: 25px;
  z-index: 1;
  position: absolute;
  ${fadeViewStyle}
`;
