import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const ChangePassward = () => {
  return (
    <div class="container" style={{ width: '45%', marginLeft: '70px' }}>
      <TextField className='mt-3' style={{ width: '90%' }}
        id="outlined-basic" label="Current Password" variant="outlined"
        type="password"
        autoComplete="current-password"
      />
      <TextField className='mt-3' style={{ width: '90%' }}
        id="outlined-basic" label="New Password" variant="outlined"
        type="password"
        autoComplete="current-password"
      />
      <TextField className='mt-3' style={{ width: '90%' }}
        id="outlined-basic" label="Retype Password" variant="outlined"
        type="password"
        autoComplete="current-password"
      />
      {/* <Button className='mt-3' variant="contained" color="success">
        Save
      </Button> */}
      <Button className='mt-3' variant="outlined" startIcon={<SaveIcon />}>
        Save
      </Button>
    </div>

  )
}

export default ChangePassward