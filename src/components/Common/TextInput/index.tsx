import React from 'react';
import styles from './index.module.css';

interface ITextInput {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
}

const TextInput = ({ onChange, value, placeholder, width }: ITextInput) => {
  return (
    <input
      type={'text'}
      onChange={onChange}
      value={value}
      className={styles.text__input}
      placeholder={placeholder}
      width={width}
    />
  );
};

export default TextInput;
