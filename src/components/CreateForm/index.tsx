import { TextInput } from 'components/Common';
import { addClient } from 'features/clients/clientsSlice';
import { useAppDispatch } from 'hooks';
import React, { useState } from 'react';
import styles from './index.module.css';

const ClientForm = () => {
  const dispatch = useAppDispatch();
  const [fullname, setFullname] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [region, setRegion] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const onEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const newClient = {
        fullname,
        created_at: createdAt,
        phone,
        region,
        status,
        id: 0,
      };
      console.log('enter');
      dispatch(addClient(newClient));
    }
  };

  return (
    <div className={styles.create__form} onKeyDown={onEnter}>
      <h2>Добавление клиента</h2>
      <div className={styles.input__panel}>
        <TextInput
          value={fullname}
          placeholder={'ФИО'}
          onChange={(event) => setFullname(event.target.value)}
        />
        <input
          className={styles.date__input}
          type={'date'}
          value={createdAt}
          onChange={(event) => setCreatedAt(event.target.value)}
        />
        <TextInput
          value={phone}
          placeholder={'Телефон'}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextInput
          value={region}
          placeholder={'Регион'}
          onChange={(event) => setRegion(event.target.value)}
        />
        <TextInput
          value={status}
          placeholder={'Статус'}
          onChange={(event) => setStatus(event.target.value)}
        />
      </div>
    </div>
  );
};

export default ClientForm;
