import { ContentWrapper, RootContainer, SideBar } from 'components';

import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <RootContainer>
      <SideBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </RootContainer>
  );
}

export default App;
