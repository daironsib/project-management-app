import { LinkFormWrapper, NavLinkForm } from './styled';

interface LinkProps {
  linkDescription: string;
  path: string;
  linkTitle: string;
}

export const LinkForm: React.FC<LinkProps> = ({
  linkDescription,
  path,
  linkTitle,
}) => {
  return (
    <LinkFormWrapper>
      <span>{linkDescription}</span>
      <NavLinkForm to={path}>{linkTitle}</NavLinkForm>
    </LinkFormWrapper>
  );
};
