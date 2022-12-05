import { useCallback, useState } from 'react';
import { ColumnTitle } from '../Column/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAddEditModal } from '../../types/interfaces';
import { ApplyBtn, CancelBtn, Form, InputName } from './style';
import CancelIcon from '../../assets/images/cancel.svg';
import ApplyIcon from '../../assets/images/apply.svg';

type Props = {
  title: string;
  dispatch: Function;
};

export const EditableTitle = ({ title, dispatch }: Props) => {
  const [isActive, setActive] = useState(false);
  const defaultValues: IAddEditModal = { title };
  const { register, handleSubmit, reset, setValue } = useForm({ defaultValues });
  setValue('title', title);

  const clickHandler = useCallback(() => {
    setActive(true);
  }, []);

  const applyHandler = (data: IAddEditModal) => {
    formHandler(data);
    setActive(false);
    reset();
  };

  const cancelHandler = useCallback(() => {
    setActive(false);
    reset();
  }, [reset]);

  const formHandler: SubmitHandler<IAddEditModal> = (data: IAddEditModal) => {
    dispatch(data);
    setActive(false);
    reset();
  };

  return (
    <ColumnTitle>
      {
        isActive ? 
          <Form onSubmit={handleSubmit(formHandler)}>
            <InputName
              {...register('title', { required: true })}
              type='text'
            />
            <ApplyBtn onClick={handleSubmit(data => applyHandler(data))} src={ApplyIcon}/>
            <CancelBtn onClick={cancelHandler} src={CancelIcon}/>
          </Form> : 
        <div onClick={() => clickHandler()}>{title}</div>
      }
    </ColumnTitle>
  );
};
