import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkFormWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
  && {
    font-size: 1.4rem;
  }
`;

export const NavLinkForm = styled(NavLink)`
  font-weight: bold;
  color: #1976d2;
  text-decoration: none;
`;
