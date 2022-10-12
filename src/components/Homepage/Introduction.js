import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Container } from '@mui/material'
import { Grid } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { Typography } from '@mui/material';

import my_photo from '../../assets/my_photo.jpg';
import '../../styles/HomePage.css';

function Introduction(props) {
  const linkedInLink = 'https://www.linkedin.com/in/jeff-lin-06b60442/';
  const githubLink = 'https://github.com/nilffej';

  const styles = props.isMediumScreen ?
    {
      alignBodyText: 'center',
      imageStyling: { height: '250px', width: '250px', },
      introTextVariant: 'h4',
      zoom: '0.8',
    } :
    {
      imageStyling: { width: '100%' },
      introTextVariant: 'h2',
    };

  return (
    <>
      <Grid container direction='row' justifyContent='center' sx={{ maxWidth: '800px', zoom: styles.zoom }} spacing={2} my={{ sm: 5 }} >
        <Grid item md={4} >
          <img className='myPhoto' style={styles.imageStyling} src={my_photo} alt='' />
        </Grid>

        <Grid item md={8} align={styles.alignBodyText}>
          <Container>
            <Typography variant={styles.introTextVariant}>
              <Typewriter
                options={{
                  delay: 80
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Hi, I\'m Jeff Lin').start()
                }} />
            </Typography>
            <Typography variant='h6'>
              I'm a third year Computer Science student at University of Michigan.
            </Typography>

            <Grid container mt={6} justifyContent={styles.alignBodyText}>
              <a href={linkedInLink}>
                <AiFillLinkedin color='white' size={50} />
              </a>
              <a href={githubLink}>
                <AiFillGithub color='white' size={50} />
              </a>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Link className='scrollArrow' align='center' to="MoreInformation" 
      spy={true} smooth={true} duration={500} offset={-50}
      style={{ zoom: styles.zoom }}>
        <Typography variant='h6' color='gray' my={-1}>View more</Typography>
        <IoIosArrowDown size='70px' color='gray'></IoIosArrowDown>
      </Link>
    </>
  );
}

export default Introduction;