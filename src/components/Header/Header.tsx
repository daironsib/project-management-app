import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
import i18next from '../../translations/translations';
import { langs } from '../../constants/constants';

const Header = () => {
  const [lang, setLang] = useState(langs.ru);
  const [isSticky, setIsSticky] = useState(false);
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeHandler = () => {
    setLang(lang === langs.en ? langs.ru : langs.en);
    i18next.changeLanguage(lang === langs.en ? langs.ru : langs.en);
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
    navigate(ROUTES.welcomePage);
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
