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
    },
  },
});

export const { deleteOne } = clientsSlice.actions;

export const selectClient = (state: RootState) => state.clients.value;

export default clientsSlice.reducer;
