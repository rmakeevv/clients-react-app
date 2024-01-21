import React from 'react';
import styles from './index.module.css';

interface ITextInput {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({ onChange, value }: ITextInput) => {
  return (
    <input
      type={'text'}
      onChange={onChange}
      value={value}
      className={styles.text__input}
    />
  );
};

export default TextInput;
