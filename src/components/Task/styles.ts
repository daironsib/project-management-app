import styled from 'styled-components';

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
  background-color: #fafdff;
  height: 100px;
  width: 100%;
  margin: 0 auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover ${RemoveBtn} {
    display: block;
  }
`

export { TaskBlock, RemoveBtn };