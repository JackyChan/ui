import React, { useState, useContext } from 'react';

import { DetailContext } from '../../pages/Version';
import Box from '../../muiComponents/Box';

import DetailContainerTabs from './DetailContainerTabs';
import DetailContainerContent from './DetailContainerContent';
import { TabPosition } from './tabs';

const DetailContainer: React.FC = () => {
  const tabs = Object.values(TabPosition);
  const [tabPosition, setTabPosition] = useState(0);
  const detailContext = useContext(DetailContext);
  const { readMe } = detailContext;

  const handleChange = (event, newValue) => {
    setTabPosition(newValue);
  };

  return (
    <Box component="div" display="flex" flexDirection="column" padding={2}>
      <DetailContainerTabs onChange={handleChange} tabPosition={tabPosition} />
      <DetailContainerContent readDescription={readMe} tabPosition={tabs[tabPosition]} />
    </Box>
  );
};

export default DetailContainer;
