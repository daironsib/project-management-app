import styled from 'styled-components';

const BoardsBlock = styled.div`
width: 80%;
margin: 0 auto;
`


const BoardList = styled.ul`
  flex-wrap: wrap;
  display: flex;
  list-style: none;
  gap: 15px;

`
const CardName = styled.h5`

`
const BoardCard = styled.li`
  width: 350px;
  height: 120px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 6px 6px;
  gap: 15px;

`
const BoardDescription = styled.p`
height: 70%;
`
const EditImg = styled.img`
  width: 20px;

`
const BinImg = styled.img`
  width: 20px;
`
const KanbanImg = styled.img`
height: 80%;
`
const Images = styled.div`
display: flex;
gap: 10px;
`
const NameBlock = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const CardBlock = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;
`
export { BoardsBlock, BoardList, BoardCard, EditImg, BinImg, KanbanImg, CardName, BoardDescription, Images, NameBlock, CardBlock };