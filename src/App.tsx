import {
  ContentWrapper,
  CustomDataTable,
  RootContainer,
  SideBar,
} from 'components';

import React from 'react';

function App() {
  return (
    <RootContainer>
      <SideBar />
      <ContentWrapper>
        <CustomDataTable />
      </ContentWrapper>
    </RootContainer>
  );
}

export default App;
