import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DisplayCar(props) {
  console.log(props.data);
let {id,name,company,fuelType,breakSystem,engineCapacity,gearType,imageURL,mileage,onroadPrice,
  powerSteering,seatingCapacity,showroomPrice}=props.data
  if(powerSteering===1){
    powerSteering="Power Steering"
  }
  else powerSteering="Normal Steering"
  let{setselectedProduct,setshowEditModel}=props
  
  let handleClick=()=>{
    console.log(id);
  }

  let handleDelete = async(id)=>{
    console.log(id);
    try{
     let jwtToken=localStorage.getItem("jwtToken");
     let token=`Bearer ${jwtToken}`
     console.log(token,jwtToken);
      let res =await axios.delete(`http://localhost:8089/admin/deleteCar/${id}`,
      {
       headers:{"Authorization":token}
     });
      console.log(res.data.carDetails);
      props.setDelete(id)
      // if(res.data.error){
      //   alert(res.data.message);
      // }else{
      //  alert(res.data.message);
      //  fetchProducts();
      // }
    }catch(err){
      console.log(err);
    }
 }
 let updateProduct=(car)=>{
  setshowEditModel(true);
  setselectedProduct(car);
}

  
  return (
    <div key={id} onClick={handleClick}>
      {/* <img src='https://www.bugatti.com/fileadmin/_processed_/9/5/csm_HEAD /> */}
      {/* <div className='row'> */}
     
    <div className="card col-4 shadow-lg p-3 mb-5 bg-white rounded" style={{width: '25rem',height:"700px",padding:"10px"}}>
        <img src={imageURL} className="card-img-top" style={{borderRadius:"10px",width:"23rem",height:"160px"}} alt="gotilla" />
        <div className="card-body text-justify d-flex justify-content-between">
          <div className='card-body ' style={{width: '10rem'}}>
         <p className="card-title  text-start"><b>company:</b>  {company}</p>
         <hr />
          <p className="card-title text-start"><b>car name:</b> {name}</p>
          <hr />
          <p className="card-text text-start"><b>showroom:</b>{showroomPrice} Rs</p>
          <hr />
          <p className="card-text text-start"><b>Onroad:</b>{onroadPrice} rs</p>
          <hr />
          <p className="card-text text-start"><b>Break Type:</b>{breakSystem}</p>
          <hr />
          
          </div>
          <div className='card-body'>
          <p className="card-text text-start"><b>engine capacity:</b>{engineCapacity}</p>
          <hr />
          <p className="card-text text-start"><b>fuel type:</b>{fuelType}</p>
          <hr />
          <p className="card-text text-start"><b>gear type:</b>{gearType}</p>
          <hr />
          <p className="card-text text-start"><b>milage:</b>{mileage} KM/L</p>
          <hr />
          <p className="card-text text-start"><b>seatings:</b>{seatingCapacity} seats</p>
          <hr />
          <p className="card-text text-start"><b>Steering:</b>{powerSteering}</p>
          <hr />
          {/* <p className="card-text text-start"><b>Admin Id:</b></p>
          <hr /> */}
          </div> 
        </div>

        <div className='conatiner-fluid d-flex justify-content-around' style={{width: '25rem'}}>
        <div>
        <button className="btn btn-danger" onClick={()=>{handleDelete(id)}}>Delete </button>
        </div>
      <div>
          {/* <button className="btn btn-primary">Edit </button> */}
        <button className='btn btn-primary m-2' onClick={()=>{updateProduct(props.data)}}>Update</button>

      </div>
      </div>
      <br />
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
 
  )
}

export default DisplayCar