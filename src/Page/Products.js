import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const Products = () => {
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">Vat</th>
            <th scope="col">Discount</th>
            <th scope="col">Picture</th>
            <th scope="col">Stock</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td>Jacket</td>
            <td>1000</td>
            <td>03/01/2023</td>
            <td>30</td>
            <td>20.00</td>
            <td><img src="" alt="Picture" /></td>
            <td>200</td>
            <td><IconButton aria-label="Edit"><EditIcon /></IconButton></td>
            <td><IconButton aria-label="Delete"><DeleteIcon /></IconButton></td>
          </tr>
          <tr>

            <td>Shirts</td>
            <td>1300</td>
            <td>03/01/2023</td>
            <td>25</td>
            <td>15.00</td>
            <td><img src="" alt="Picture" /></td>
            <td>125</td>
            <td><IconButton aria-label="Edit"><EditIcon /></IconButton></td>
            <td><IconButton aria-label="Delete"><DeleteIcon /></IconButton></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Products