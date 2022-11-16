import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logOut } from '../../store/userSlice/userSlice';
import {
  HeaderBlock,
  SwitcherLabel,
  SwitcherInput,
  NavBlock,
  SwitcherBlock,
} from './style';

const Header = () => {
  const [langs, setLangs] = useState('EN');
  const [isSticky, setIsSticky] = useState(false);
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const changeHandler = () => {
    setLangs(langs === 'EN' ? 'RU' : 'EN');
  };

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

  const handlerSignOut = () => {
    dispatch(logOut());
  };

  return (
    <HeaderBlock sticky={isSticky}>
      <NavLink to='/'>Logo</NavLink>
      <NavBlock>
        {!isAuth ? (
          <>
            <NavLink to={ROUTES.signIn}>Sign in</NavLink>
            <NavLink to={ROUTES.registration}>Sign-up</NavLink>
          </>
        ) : (
          <>
            <NavLink to={ROUTES.editProfile}>edit profile</NavLink>
            <NavLink to={ROUTES.createBoard}>create board</NavLink>
            <div onClick={handlerSignOut}>sign out</div>
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
        <SwitcherLabel htmlFor='language-switcher'></SwitcherLabel>
        <span>EN</span>
      </SwitcherBlock>
    </HeaderBlock>
  );
};

export default Header;
