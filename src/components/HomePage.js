import React from 'react';
import { Element } from 'react-scroll';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

import Introduction from './Introduction';
import MoreInformation from './MoreInformation';
import ProjectPage from './ProjectPage';
import NavigationBar from './NavigationBar';

function HomePage() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <>
      <NavigationBar isMediumScreen={isMediumScreen} />
      <div id='Introduction'>
        <Introduction isMediumScreen={isMediumScreen} />
      </div>
      <Element name='MoreInformation' id='MoreInformation'>
        <MoreInformation isMediumScreen={isMediumScreen} isLargeScreen={isLargeScreen} />
      </Element>
      <div style={{ paddingTop: '100px' }}></div>
      <div id="Projects">
        <ProjectPage />
      </div>
      <div style={{ paddingTop: '100px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>Built using React</p>
        <div style={{ marginLeft: '30px' }}></div>
        <a href='https://github.com/nilffej/jefflin'>
          <p>View on Github</p>
        </a>
      </div>
    </>
  );
}

export default HomePage;