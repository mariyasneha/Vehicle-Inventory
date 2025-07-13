import React from 'react'
import { Link } from 'react-router-dom'

const VehicleNavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Vehicle Inventory</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">AddVehicle</Link>
              <Link class="nav-link" to="/search">SearchVehicle</Link>
              <Link class="nav-link" to="/delete">DeleteVehicle</Link>
              <Link class="nav-link" to="/viewall">ViewAllVehicles</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default VehicleNavBar