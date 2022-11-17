import styled from 'styled-components';

const HeaderBlock = styled.div<{ sticky: boolean }>`
  width: 100%;
  height: 70px;
  background-color: ${({ sticky }) => (sticky ? 'lightgrey' : 'grey')};
  transition: all 0.3s ease-out;
  display: flex;
  flex: 0 0 auto;
  padding-left: 20px;
  position: sticky;
  top: 0;
`;
const SwitcherLabel = styled.label`
  display: block;
  position: relative;
  background-color: white;
  width: 20px;
  height: 15px;
  transition: all 0.2s ease-in;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: blue;
    transition: all 0.3s ease-out;
  }
`;
const SwitcherInput = styled.input`
  display: none;
  &:checked + ${SwitcherLabel} {
    background-color: pink;
  }
  &:checked + ${SwitcherLabel}::after {
    left: 13px;
  }
`;
const NavBlock = styled.div`
  margin: 20px;
  margin-left: auto;
  display: flex;
  gap: 15px;
`;
const SwitcherBlock = styled.div`
  display: flex;
  margin: 20px;
  gap: 5px;
`;

export { HeaderBlock,  SwitcherLabel, SwitcherInput, NavBlock, SwitcherBlock };