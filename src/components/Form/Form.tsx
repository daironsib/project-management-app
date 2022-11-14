import { Button } from './ButtonSubmit/styles';
import { LinkForm } from './LinkForm/LinkForm';
import { FormWrapper, TitleForm } from './styled';

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
        <LinkForm
          linkDescription={linkDescription}
          path={path}
          linkTitle={linkTitle}
        />
        <Button>{buttonTitle}</Button>
      </FormWrapper>
    </>
  );
};
