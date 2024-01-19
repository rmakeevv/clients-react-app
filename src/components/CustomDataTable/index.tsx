import React from 'react';
import data from 'service/clients.json';

console.log(data);

const CustomDataTable = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.fullname}</div>
      ))}
    </div>
  );
};

export default CustomDataTable;
