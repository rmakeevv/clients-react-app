import { IClients } from 'features/clients/clientsSlice';
import { useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClientPage = () => {
  const { clientId } = useParams();
  const clients = useAppSelector((state) => state.clients.value);
  const [clientData, setClientData] = useState<IClients | undefined>(undefined);

  useEffect(() => {
    setClientData(clients.find((client) => client.id.toString() === clientId));
  }, []);

  return <div>{clientData?.fullname}</div>;
};

export default ClientPage;
