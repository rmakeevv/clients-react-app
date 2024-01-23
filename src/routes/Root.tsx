import { RootContainer, SideBar } from 'components';

import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <RootContainer>
      <SideBar />
      <Outlet />
    </RootContainer>
  );
}

export default App;
