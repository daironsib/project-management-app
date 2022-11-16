import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingProps {
  isLoading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Backdrop open={isLoading}>
      <CircularProgress thickness={7} size={100} />
    </Backdrop>
  );
};
