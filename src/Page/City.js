import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const City = () => {
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
          <th scope="col">City Name</th>
            <th scope="col">Country Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            {/* <th scope="col">Handle</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">1</th> */}
            <td>Delhi</td>
            <td>India</td>
            <td><IconButton aria-label="Edit"><EditIcon /></IconButton></td>
            <td><IconButton aria-label="Delete"><DeleteIcon /></IconButton></td>
          </tr>
          <tr>
            {/* <th scope="row">2</th> */}
            <td>WashingtonDc</td>
            <td>USA</td>
            <td><IconButton aria-label="Edit"><EditIcon /></IconButton></td>
            <td><IconButton aria-label="Delete"><DeleteIcon /></IconButton></td>
          </tr>
        
        </tbody>
      </table>
    </div>
  )
}

export default City