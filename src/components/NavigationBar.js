import React from 'react';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

import '../styles/NavigationBar.css';

function NavigationBar(props) {
  const resumeLink = 'https://drive.google.com/file/d/1e9gx-0PUgJRFsBFdHN4f-wOuMgWjdhQk/view';


  const appBarStyling =
    props.isMediumScreen ?
      {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
      } :
      {
        display: 'flex',
        marginLeft: 'auto'
      };

  return (
    <AppBar id='NavigationBar' position='fixed'>
      <Toolbar disableGutters className='navigationBar'>
        <div className='rightButtons' style={appBarStyling}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography className='grow' variant='h6' mx={4}>Home</Typography>
          </Link>
          <a href={resumeLink}>
            <Typography className='grow' variant='h6' mx={4}>Resume</Typography>
          </a>
        </div>
      </Toolbar>
    </AppBar >
  );
}

export default NavigationBar;