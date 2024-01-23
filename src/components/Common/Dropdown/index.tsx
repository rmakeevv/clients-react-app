import React, { useState } from 'react';
import DropdownList from './List';
import { RestDropdownProps } from './types';
import styles from './index.module.css';
import { ReactComponent as CrossIcon } from 'assets/images/fi-rr-cross.svg';

const RestDropdown = ({
  options,
  onChange,
  value,
  placeholder,
  style,
  error,
  listStyle,
}: RestDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const unsetValue = () => {
    onChange({ id: 0, value: '' });
  };

  if (!isOpen)
    return (
      <div>
        <div
          className={styles.dropdown__container}
          onClick={(event) => {
            event.stopPropagation();
            setIsOpen((prevState) => !prevState);
          }}
          style={{
            ...style,
            borderColor: error ? 'red' : 'rgba(24,24,29,0.25)',
          }}
        >
          {value.value || placeholder}
          {!!value.id && (
            <button
              className={styles.clear__button}
              onClick={(event) => {
                event.stopPropagation();
                unsetValue();
              }}
            >
              <CrossIcon />
            </button>
          )}
        </div>
      </div>
    );

  return (
    <div>
      <div
        className={styles.dropdown__container}
        style={{
          ...style,
          borderColor: isOpen ? '#2684ff' : 'rgba(24,24,29,0.25)',
        }}
      >
        {value.value || placeholder}
        {!!value.id && (
          <button
            className={styles.clear__button}
            onClick={(event) => {
              event.stopPropagation();
              unsetValue();
            }}
          >
            <CrossIcon />
          </button>
        )}
      </div>
      {isOpen && (
        <DropdownList
          setIsOpen={setIsOpen}
          options={options}
          style={listStyle}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default RestDropdown;
