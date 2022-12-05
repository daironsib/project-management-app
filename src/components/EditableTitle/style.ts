import styled from 'styled-components';

const Form = styled.form`
  position: relative;
`;

const InputName = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid grey;
  padding: 0 50px 0 10px;
  border-radius: 7px;
  outline-color: #b7eaf7;
`;

const ApplyBtn = styled.img`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const CancelBtn = styled.img`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export { Form, InputName, ApplyBtn, CancelBtn };