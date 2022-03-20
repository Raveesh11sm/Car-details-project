import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import { Table } from 'react-bootstrap';

function SuperAdmin() {
    const [adminCarDetails, setadminCarDetails] = useState([])
   
    useEffect(() => {
     displayCars();
    }, []);
    let displayCars=async()=>{
    
        let jwtToken=localStorage.getItem("jwtToken");
        let token=`Bearer ${jwtToken}`
  
          let res = await axios.get("http://localhost:8080/carsforyou",
          {
            headers:{"Authorization":token}
          }
         );
       
          console.log(res.data.carDetails);
          if(res.data.error){
            alert(res.data.message);
          }else{
            let dispalyCar=res.data.carDetails;
            setadminCarDetails(dispalyCar);
          }
      
      }
  
  return (
    <div>     <Table striped bordered hover>
    <thead>
      <tr>
        <th>car id</th>
        <th>car Name</th>
        <th>car company</th>
        <th>fuel type</th>
        <th>power Steering</th>
        <th>Break System</th>
        <th>milage</th>
        <th>showroom price </th>
        <th>onroad price</th>
        <th>seating Capacity</th>
        <th>engine capacity</th>
        <th>gear Type</th>
        <th>admin Id</th>
        <th>admin name</th>
        
      </tr>
    </thead>
    <tbody>
    {adminCarDetails.map((car)=>{
      return (
        <tr key={car.carId}>
        <td>{car.carId}</td>
        <td>{car.carname}</td>
        <td>{car.company}</td>
        <td>{car.fuelType}</td>
        <td>{car.powerSteering}</td>
        <td>{car.breakSystem}</td>
        <td>{car.mileage}</td>
        <td>{car.showroomPrice}</td>
        <td>{car.onroadPrice}</td>
        <td>{car.seatingCapacity}</td>
        <td>{car.engineCapacity}</td>
        <td>{car.gearType}</td>
        <td>{car.adminDetails.adminId}</td>
        <td>{car.adminDetails.username}</td>
      </tr>
    )
    })}
     
     
    </tbody>
  </Table></div>
  )
}

export default SuperAdmin