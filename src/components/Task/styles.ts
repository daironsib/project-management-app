import styled from 'styled-components';
import { styleVars } from '../../constants/constants';

const RemoveBtn = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 15px;
`

const TaskBlock = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${styleVars.verylightblue};
  min-height: 60px;
  width: 100%;
  margin: 0 auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover ${RemoveBtn} {
    display: block;
  }
`

export { TaskBlock, RemoveBtn };
=======
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5) inset;
  border: none;
`;

export { TaskBlock };
>>>>>>> cf983de (feat: add responsive design to modals)
