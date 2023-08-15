import React, { ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TypographyComponent from '../Typography';
import BoxComponent from '../Box';

interface tabPanelData {
  value: string;
  children: ReactNode;
}
interface TabData {
  value: string;
  label: string;
}

type Props = {
  tabArr: TabData[];
  tabPanelArr: tabPanelData[];
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
  value: string;
  borderBottom?: boolean;
};

export default function TabsComponent({
  tabArr,
  tabPanelArr,
  value,
  handleChange,
  borderBottom,
}: Props) {
  return (
    <BoxComponent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          sx={{ borderBottom: borderBottom ? '1px solid #ECEEF0' : '' }}
        >
          {tabArr.map((data: TabData, index: number) => (
            <Tab
              key={index}
              value={data.value}
              label={
                <TypographyComponent variant="Body_Content_M" component="p">
                  {data.label}
                </TypographyComponent>
              }
            />
          ))}
        </Tabs>
        {tabPanelArr.map((data, index) => (
          <TabPanel value={data.value} key={index} sx={{ paddingX: '0px' }}>
            {data.children}
          </TabPanel>
        ))}
      </TabContext>
    </BoxComponent>
  );
}
