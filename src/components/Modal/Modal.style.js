import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  max-width: calc(100vw - 20px);
  /* padding: 20px; */
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 50px);
  }

  @media screen and (min-width: 1200px) {
    max-width: calc(100vw - 200px);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
