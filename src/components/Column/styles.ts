import styled from 'styled-components';

const ColumnBlock = styled.div`
  position: relative;
  height: max-content;
  min-height: 100px;
  width: 250px;
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
`

const AddBoardImg = styled.img`
  width: 30px;
`
const RemoveBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
`

export { ColumnBlock, AddTaskBtn, AddBoardImg, ColumnTitle, RemoveBtn };