import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import axios from 'axios';

import '../App.css'

export default function DeleteInvo({openDelete, deleteClose}) {

  const [sl_no, setinvoice_currency] = React.useState('');
  
  const deleteData = async() => {

    let data = "sl_no=" + sl_no;
    let response = await axios.get('http://localhost:8080/highradius/delete?'+data);
    console.log(response.data)
  }

  return (
    <div>
      <Dialog
        open={openDelete}
        onClose={deleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Records ?"}
        </DialogTitle>
      <div>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            >
            Are you sure you want to delete these record[s] ?
            </Box>
        </DialogContent>
      </div>
      <div className='btnGrp'>
        <Button className='addButton' variant="outlined" onClick={ deleteClose }>Cancel</Button>
        <Button className='addButton' variant="outlined" onClick={() => { deleteData(); deleteClose(); }} type='submit'>Delete</Button>
      </div>
      </Dialog>
    </div>
  );
}