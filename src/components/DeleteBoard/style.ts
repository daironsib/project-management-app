import styled from 'styled-components';

interface IProps {
  isOpened: boolean;
}

const BoardOverlay = styled.div<IProps>`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  visibility: ${(props) => (props.isOpened ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpened ? 1 : 0)};
`;

const BoardWindow = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  min-width: 400px;
  min-height: 300px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 16px 40px rgb(0 0 0 / 50%);
`;

const DeleteImg = styled.img`
  width: 120px;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px;
  font-family: Roboto;
  border-radius: 7px;
  outline: none;
  border: none;
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonContinue = styled(Button)`
  background-color: #ffe4c9;
`;

const ButtonCancel = styled(Button)`
  background-color: #8a9ba7;
`;

const DelBoard = styled.h2`
  color: grey;
  font-family: Roboto;
`;

export {
  BoardOverlay,
  BoardWindow,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  DeleteImg,
  DelBoard,
};
