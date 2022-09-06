import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

import experienceList from '../../utils/experience';
import '../../styles/HomePage.css';
import skills from '../../utils/skills';

function MoreInformation(props) {

  const spanStyles = props.isLargeScreen ?
    {
      timeStyling: { color: '#c4c4c4', clear: 'both' },
    } :
    {
      timeStyling: { color: '#c4c4c4', float: 'right' },
    }

  const styles = props.isMediumScreen ?
    {
      cardMargin: { marginBottom: '50px' },
      textVariant: 'body1',
    } :
    {
      cardMargin: { margin: '50px' },
      textVariant: 'h6'
    };

  return (
    <Grid container direction='row' justifyContent='center' >
      <Grid item container className='card' direction='column'
        lg={3.5} md={8} sm={12} style={styles.cardMargin}>
        <Typography variant='h4'>Experience</Typography>
        {
          experienceList.map((experience) =>
            <div className='cardItem' key={experience.company}>
              <div>
                <a href={experience.link}>
                  <Typography className='experienceTitle visitExp' variant='h5' style={{ float: 'left' }}>{experience.company}</Typography>
                </a>
                <Typography variant='h6' style={spanStyles.timeStyling}>{experience.time}</Typography>
              </div>
              <div style={{ clear: 'both' }}>
                <Typography variant={styles.textVariant}>{experience.role}</Typography>
              </div>
            </div>
          )
        }
      </Grid>
      <Grid item container className='card' direction='column'
        lg={3.5} md={8} sm={12} style={styles.cardMargin}>
        <Typography variant='h4'>Skills</Typography>
        <Grid className='cardItem' item container direction="row">
          <Grid item width='50%'>
            {
              skills.languages.map((language) =>
                <Typography variant={styles.textVariant} key={language} mb={1} >{language}</Typography>
              )
            }
          </Grid>
          <Grid item width='50%'>
            {
              skills.technologies.map((technology) =>
                <Typography variant={styles.textVariant} key={technology} mb={1} >{technology}</Typography>
              )
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MoreInformation;