import React from 'react';
import styles from './index.module.css';

interface ITextInput {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({ onChange, value, placeholder }: ITextInput) => {
  return (
    <input
      type={'text'}
      onChange={onChange}
      value={value}
      className={styles.text__input}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
