import { TextInput } from 'components/Common';
import Dropdown from 'components/Common/Dropdown';
import { DropdownItem } from 'components/Common/Dropdown/types';
import { addClient } from 'features/clients/clientsSlice';
import { useAppDispatch } from 'hooks';
import React, { useState } from 'react';
import styles from './index.module.css';

const statusOptions: DropdownItem[] = [
  { id: 1, value: 'Активен' },
  { id: 2, value: 'Неактивен' },
  { id: 3, value: 'Приостановлен' },
];

const ClientForm = () => {
  const dispatch = useAppDispatch();
  const [fullname, setFullname] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [region, setRegion] = useState('');
  const [phone, setPhone] = useState('');
  const [statusFilter, setStatusFilter] = useState<DropdownItem>({
    id: 0,
    value: '',
  });

  const onEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const created_at: string = createdAt || new Date().toString();
      const newClient = {
        fullname,
        created_at,
        phone,
        region,
        status: statusFilter.value,
        id: 0,
      };
      console.log('enter');
      dispatch(addClient(newClient));
    }
  };

  return (
    <div className={styles.create__form} onKeyDown={onEnter}>
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
          width={'160px'}
          placeholder={'Телефон'}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextInput
          value={region}
          placeholder={'Регион'}
          onChange={(event) => setRegion(event.target.value)}
        />
        <Dropdown
          onChange={setStatusFilter}
          value={statusFilter}
          placeholder={'Выберите статус'}
          options={statusOptions}
          listStyle={{ bottom: '48px' }}
        />
      </div>
    </div>
  );
};

export default ClientForm;
