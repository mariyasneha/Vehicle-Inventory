import React, { useState } from 'react'
import VehicleNavBar from './VehicleNavBar'

const ViewAllVehicles = () => {
    const [vehicleData, ChangevehicleData] = useState([
        { "id": "1", "name": "Corolla", "brand": "Toyota", "fueltype": "Petrol", "regno": "ABC1234", "manudate": "2020-06-15", "price": "15000", "image": "https://imgd.aeplcdn.com/664x374/cw/ec/26588/Toyota-Corolla-Altis-Exterior-92974.jpg?wm=0&q=80" },
        { "id": "2", "name": "Civic", "brand": "Honda", "fueltype": "Diesel", "regno": "XYZ5678", "manudate": "2019-03-10", "price": "17000", "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=80" },
        { "id": "3", "name": "Model S", "brand": "Tesla", "fueltype": "Electric", "regno": "TES2025", "manudate": "2022-12-01", "price": "70000", "image": "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=1200:*" }
    ])
    return (
        <div>
            <div className="container">
                <VehicleNavBar />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Vehicle Name</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Fuel Type</th>
                                    <th scope="col">Registration number</th>
                                    <th scope="col">Manufacturing date</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehicleData.map(
                                    (value, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{value.id}</th>
                                                <td>{value.name}</td>
                                                <td>{value.brand}</td>
                                                <td>{value.fueltype}</td>
                                                <td>{value.regno}</td>
                                                <td>{value.manudate}</td>
                                                <td>{value.price}</td>
                                                <td><img src={value.image} alt={value.name} width="100" height="60" style={{ objectFit: 'cover' }} /></td>

                                            </tr>
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllVehicles