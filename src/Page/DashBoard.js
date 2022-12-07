import { Container } from '@mui/system'
import React from 'react'

const DashBoard = () => {
  return (
    <div>
      <Container style={{ display: 'flex',marginTop:'10px' }}>
        <div class="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-bg-info mb-3" style={{ maxWidth: '18rem',marginLeft:'50px' }}>
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-bg-secondary mb-3" style={{ maxWidth: '18rem',marginLeft:'50px' }}>
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-bg-warning mb-3" style={{ maxWidth: '18rem',marginLeft:'50px' }}>
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Container>
      <Container>
      <div class="card text-bg-light mb-2" style={{ maxWidth: '18rem',marginLeft:'50px' }}>
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <hr />
    <p class="card-text border">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  <div class="card text-bg-light mb-2" style={{ maxWidth: '18rem',marginLeft:'50px' }}>
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <hr />
    {/* <p class="card-text border">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
      </Container>
    </div>
  )
}

export default DashBoard