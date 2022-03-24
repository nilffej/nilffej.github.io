import React from 'react';
import { Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import { IoClose } from 'react-icons/io5';

import '../styles/DemoDialog.css';

function DemoDialog(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}
      onBackdropClick={props.onClose}
      PaperProps={{ style: { backgroundColor: '#1d1d1d' } }}
      fullWidth={true} maxWidth='md' >
      <DialogContent>
        <>
          <Typography variant='h6' className='projectTitle'>{props.projectName}</Typography>
          <IconButton onClick={props.onClose} className='closeButton'>
            <IoClose color='gray' />
          </IconButton>
        </>
        <iframe width="100%" height="90%" title='Project Demo'
          style={{ aspectRatio: '16/9' }}
          src={props.demoLink} frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </DialogContent>
    </Dialog>
  );
}

export default DemoDialog;