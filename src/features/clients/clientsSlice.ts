import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import data from 'service/clients.json';

interface ClientsIndex {
  [key: string]: any;
}

export interface IClients extends ClientsIndex {
  id: number;
  fullname: string;
  created_at: string;
  phone: string;
  region: string;
  status: string;
}

interface IClientsState {
  value: IClients[];
}

const initialState: IClientsState = {
  value: data,
};

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    deleteOne: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(
        (client) => client.id !== action.payload
      );
      localStorage.removeItem(action.payload.toString());
    },
    addClient: (state, action: PayloadAction<IClients>) => {
      const newId = state.value.length;
      const newClient = { ...action.payload, id: newId };
      state.value.push(newClient);
      localStorage.setItem(newId + '', JSON.stringify(newClient));
    },
    getFromLocal: (state) => {
      const keys = Object.keys(localStorage);
      for (const key of keys) {
        if (!isNaN(Number(key))) {
          const itemFromLocal: IClients = JSON.parse(
            localStorage.getItem(key) || ''
          );
          const existedClient = state.value.filter(
            (client) => client.id === itemFromLocal.id
          );
          if (!existedClient.length) {
            state.value.push(itemFromLocal);
          }
        }
      }
    },
  },
});

export const { deleteOne, addClient, getFromLocal } = clientsSlice.actions;

export const selectClient = (state: RootState) => state.clients.value;

export default clientsSlice.reducer;
