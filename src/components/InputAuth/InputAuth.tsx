import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { ISignUpForm } from '../../types/interfaces';
import { InputForm } from './styles';

interface InputAuthProps {
  control: Control<ISignUpForm, object>;
  name: 'name' | 'login' | 'password';
  // rules: {
  //   required: string;
  //   validate: (value: string) => true | string;
  // };
  label: string;
  type: string;
  error: boolean;
  helperText: string | undefined;
}

export const InputAuth: React.FC<InputAuthProps> = React.memo(
  ({ control, name, label, type, error, helperText }) => {
    return (
      <Controller
        control={control}
        name={name}
        // rules={rules}
        render={({ field: { value, onChange } }) => (
          <InputForm
            label={label}
            onChange={onChange}
            value={value || ''}
            type={type}
            error={error}
            helperText={helperText}
          />
        )}
      />
    );
  }
);
