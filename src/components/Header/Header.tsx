import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderBlock = styled.div<{sticky: boolean}>`
width: 100%;
height: 70px;
background-color: ${({sticky}) => (sticky?'green':'yellow')};
transition: all 0.3s ease-out;
display: flex;
padding-left: 20px;
position: sticky;
top: 0;
`
const SwitcherLabel = styled.label`
display: block;
position: relative;
background-color: white;
width: 20px;
height: 15px;
transition: all 0.2s ease-in;
&:after {
  content: "";
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
`
const SwitcherInput = styled.input`
display: none;
&:checked + ${SwitcherLabel} {
background-color: pink;
}
&:checked + ${SwitcherLabel}::after {
left: 13px;
}
`
const NavBlock = styled.div`
  margin: 20px;
  margin-left: auto;
  display: flex;
  gap: 15px;
`
const SwitcherBlock = styled.div`
display: flex;
margin: 20px;
gap: 5px;
`
const Header = () => {
  const [ langs, setLangs ] = useState('EN');
  const [ auth, setAuth ] = useState(true);
  const changeHandler = () => {
    setLangs(langs === 'EN'?'RU':'EN');
  }
  const [ isSticky, setIsSticky ] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } 
    if (window.pageYOffset === 0) {
      setIsSticky(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => { window.removeEventListener("scroll", handleScroll)
  }
  });
  return (
    <HeaderBlock sticky={isSticky}>
      <NavLink to='/'>Logo</NavLink>
      <NavBlock>{auth?(<><NavLink to='/sign-in'>Sign in</NavLink>
      <NavLink to='/sign-up'>Sign-up</NavLink></>):(<>
      <NavLink to='/edit-profile'>edit profile</NavLink>
      <NavLink to='/create-board'>create board</NavLink>
      <NavLink to='/sign-out'>sign out</NavLink>
      </>)}</NavBlock>
      <SwitcherBlock>
        <span>RU</span>
        <SwitcherInput type="checkbox" id="language-switcher" onChange={changeHandler}/>
        <SwitcherLabel htmlFor="language-switcher"></SwitcherLabel>
        <span>EN</span>
      </SwitcherBlock>
    </HeaderBlock>
  )
}

export default Header;