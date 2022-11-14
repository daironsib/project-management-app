import { Button } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

export const ButtonSubmit: React.FC<ButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};
