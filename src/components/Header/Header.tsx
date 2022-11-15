import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../constants/routes/routes';
import {
  HeaderBlock,
  SwitcherLabel,
  SwitcherInput,
  NavBlock,
  SwitcherBlock,
} from './style';

const Header = () => {
  const [langs, setLangs] = useState('EN');
  const [auth, setAuth] = useState(true);
  const changeHandler = () => {
    setLangs(langs === 'EN' ? 'RU' : 'EN');
  };
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    }
    if (!window.pageYOffset) {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <HeaderBlock sticky={isSticky}>
      <NavLink to='/'>Logo</NavLink>
      <NavBlock>
        {auth ? (
          <>
            <NavLink to={ROUTES.signIn}>Sign in</NavLink>
            <NavLink to={ROUTES.registration}>Sign-up</NavLink>
          </>
        ) : (
          <>
            <NavLink to={ROUTES.editProfile}>edit profile</NavLink>
            <NavLink to={ROUTES.createBoard}>create board</NavLink>
            <NavLink to={ROUTES.signOut}>sign out</NavLink>
          </>
        )}
      </NavBlock>
      <SwitcherBlock>
        <span>RU</span>
        <SwitcherInput
          type='checkbox'
          id='language-switcher'
          onChange={changeHandler}
        />
        <SwitcherLabel htmlFor='anguage-switcher'></SwitcherLabel>
        <span>EN</span>
      </SwitcherBlock>
    </HeaderBlock>
  );
};

export default Header;
