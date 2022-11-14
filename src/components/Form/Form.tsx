import {
  ButtonSubmit,
  FormWrapper,
  LinkFormWrapper,
  NavLinkForm,
  TitleForm,
} from './styled';

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLDivElement> | undefined;
  buttonTitle: string;
  linkDescription: string;
  path: string;
  linkTitle: string;
}

export const Form: React.FC<FormProps> = ({
  title,
  children,
  onSubmit,
  buttonTitle,
  linkDescription,
  path,
  linkTitle,
}) => {
  return (
    <>
      <TitleForm>{title}</TitleForm>
      <FormWrapper onSubmit={onSubmit}>
        {children}
        <LinkFormWrapper>
          <span>{linkDescription}</span>
          <NavLinkForm to={path}>{linkTitle}</NavLinkForm>
        </LinkFormWrapper>
        <ButtonSubmit>{buttonTitle}</ButtonSubmit>
      </FormWrapper>
    </>
  );
};
