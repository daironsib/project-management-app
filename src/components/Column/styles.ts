import styled from 'styled-components';

const ColumnBlock = styled.div`
  height: max-content;
  min-height: 100px;
  width: 160px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border: 2px solid #7d7d7d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
`

const ColumnTitle = styled.div`
  margin-bottom: 15px;
`

const AddTaskBtn = styled.div`
  cursor: pointer;
  display: block;
`

const AddBoardImg = styled.img`
  width: 30px;
`;

export { ColumnBlock, AddTaskBtn, AddBoardImg, ColumnTitle };