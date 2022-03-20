import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";


function UpdateCarDetails(props) {
    const [updateCar, setupdateCar] = useState({
        imageURL:"",
        name: "",
        company: "",
        fuelType: "",
        powerSteering: "",
        breakSystem: "",
        showroomPrice: "",
        onroadPrice: "",
        mileage: "",
        seatingCapacity: "",
        engineCapacity: "",
        gearType: "",
    })
   
    useEffect(()=>{
        setupdateCar(props.selectedProduct)
    },[props.selectedProduct])

    let updateProduct =(e)=>{
        setupdateCar({
            ...updateCar,
            [e.target.name]:e.target.value
        })
    }
    let saveData =async()=>{
        try{
            let jwtToken=localStorage.getItem("jwtToken");
            let token=`Bearer ${jwtToken}`
            let res = await axios.put(`http://localhost:8089/admin/updateCar/ ${props.selectedProduct.id}`,updateCar,{
                headers:{"Authorization":token}
              })
            if(res.data.error){
               alert(res.data.message);
             }else{
              alert(res.data.message);
              props.hideEditModel();
              props.fetchProducts();
             }
           }catch(err){
             console.log(err);    
        }
       }
  return (
    <div>
         <Modal show={props.showEditModel} onHide={props.hideEditModel}>
        <Modal.Header closeButton>
          <Modal.Title>update car details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
            placeholder="enter image url"
            name="imageURL"
            value={updateCar.imageURL}
            onChange={updateProduct}
          ></input>
          <input
            placeholder="enter car name"
            name="name"
            value={updateCar.name}
            onChange={updateProduct}
          ></input>
          <input
            placeholder="enter car compony "
            name="company"
            value={updateCar.company}
            onChange={updateProduct}
          ></input>
          <input
            placeholder="enter fuel type"
            name="fuelType"
            value={updateCar.fuelType}
            onChange={updateProduct}
          ></input>
          <input
           
            placeholder=" powerSteering ? "
            name="powerSteering"
            value={updateCar.powerSteering}
            onChange={updateProduct}
          ></input>
           <input
           
           placeholder=" breakSystem "
           name="breakSystem"
           value={updateCar.breakSystem}
           onChange={updateProduct}
         ></input>
           <input
           placeholder=" showroomPrice "
           name="showroomPrice"
           value={updateCar.showroomPrice}
           onChange={updateProduct}
         ></input>
          <input
           placeholder=" onroadPrice "
           name="onroadPrice"
           value={updateCar.onroadPrice}
           onChange={updateProduct}
         ></input>
          <input
           placeholder=" mileage "
           name="mileage"
           value={updateCar.mileage}
           onChange={updateProduct}
         ></input>
          <input
           placeholder=" seatingCapacity "
           name="seatingCapacity"
           value={updateCar.seatingCapacity}
           onChange={updateProduct}
         ></input>
           <input
           placeholder=" engineCapacity "
           name="engineCapacity"
           value={updateCar.engineCapacity}
           onChange={updateProduct}
         ></input>
           <input
           placeholder=" gearType "
           name="gearType"
           value={updateCar.gearType}
           onChange={updateProduct}
         ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideEditModel}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default UpdateCarDetails