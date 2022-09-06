import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

import { DiPhonegap } from 'react-icons/di';
import { GiBubblingBowl } from 'react-icons/gi';
import { SiSpotify, SiFlask, SiJavascript, SiBootstrap, SiGooglemaps, SiSqlite, SiSelenium, SiPython } from 'react-icons/si';

import DemoDialog from './DemoDialog.js';
import projectsList from '../../utils/projects.js';
import '../../styles/ProjectPage.css';

function ProjectPage() {
  const [dialogStatus, setDialogOpen] = useState({
    open: false,
  });

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const styles = (() => {
    if (isMediumScreen) {
      return {};
    } else {
      return {
        height: '280px',
      };
    }
  })();

  const icons = {
    'Flask': <SiFlask />,
    'Spotify Web API': <SiSpotify />,
    'Javascript': <SiJavascript />,
    'Bootstrap': <SiBootstrap />,
    'Google Maps API': <SiGooglemaps />,
    'SQLite': <SiSqlite />,
    'Selenium': <SiSelenium />,
    'Python': <SiPython />,
    'BeautifulSoup4': <GiBubblingBowl />,
    'Adobe PhoneGap': <DiPhonegap />,
  };

  const handleOpenDialog = (name, link) => {
    setDialogOpen({
      open: true,
      projectName: name,
      demoLink: link
    });
  }

  const handleCloseDialog = () => {
    setDialogOpen({
      open: false,
    });
  }

  return (
    <>
      <Typography variant='h2' textAlign='center'>Projects</Typography>
      <Container style={{ marginTop: '40px' }} px={{ xs: 2, sm: 4, lg: 8 }} maxWidth='false'>
        <Grid container item direction='row' zIndex={1} justifyContent='center'>
          {
            projectsList.map((project) =>
              <Grid item container direction='column'
                className='projectCard grow' key={project.name}
                style={styles} lg={3.2} md={5} m={2} position='relative'>
                <div>
                  <Typography variant='h6' style={{ float: 'left' }}>{project.name}</Typography>
                  {
                    project.demoLink ?
                      <>
                        <p className='viewDemo' onClick={
                          () => handleOpenDialog(project.name, project.demoLink)
                        }>View demo</p>
                        <DemoDialog open={dialogStatus.open} onClose={handleCloseDialog}
                          demoLink={dialogStatus.demoLink} projectName={dialogStatus.projectName} />
                      </> : null
                  }
                  {
                    project.projectLink ?
                      <a className='visit' href={project.projectLink}>Visit</a> : null
                  }
                </div>
                <div style={{ padding: '5px' }}></div>
                <Typography variant='body1'>{project.description}</Typography>
                <div style={{ padding: '10px' }}></div>
                <a className='github' href={project.projectGithub}>Visit on Github</a>
                <div style={{ padding: '50px' }}></div>
                <Grid container mt={6} position='absolute' bottom='0' mb={3}>
                  {

                    project.technologies.map((item) => {
                      return (
                        <div className='tooltip' key={project.name + " " + item}>
                          {
                            React.cloneElement(
                              icons[item],
                              {
                                color: '#808080',
                                size: '30px',
                                style: { marginRight: '10px' },
                              }
                            )
                          }
                          <p className='tooltiptext'>{item}</p>
                        </div>
                      );
                    })
                  }
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </Container>
    </>
  );
}

export default ProjectPage;