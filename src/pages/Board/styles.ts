import styled from 'styled-components';

const BoardBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 10px;
`

const AddColumnBlock = styled.div`
  padding-top: 50px;
  margin-left: 30px;
`

const AddColumnBtn = styled.div`
  display: inline-block;
  cursor: pointer;
`

export { BoardBlock, AddColumnBlock, AddColumnBtn };
