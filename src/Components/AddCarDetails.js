import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


function AddCarDetails(props) {
  const [singleProduct, setsingleProduct] = useState({
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
    
  });
  let addProduct = (e) => {
    setsingleProduct({
      ...singleProduct,
      [e.target.name]: e.target.value,
    });
  };
  let saveData = async () => {
    try {
      let jwtToken=localStorage.getItem("jwtToken");
      let token=`Bearer ${jwtToken}`
      let res = await axios.post("http://localhost:8089/admin/addCar", singleProduct,{
        headers:{"Authorization":token}
      });
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        props.hideAddModel();
        props.fetchProducts();
        setsingleProduct({
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
            
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Modal show={props.showAddModel} onHide={props.hideAddModel}>
        <Modal.Header closeButton>
          <Modal.Title>Add Car Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
            placeholder="enter image url"
            name="imageURL"
            value={singleProduct.imageURL}
            onChange={addProduct}
          ></input>
          <input
            placeholder="enter car name"
            name="name"
            value={singleProduct.carName}
            onChange={addProduct}
          ></input>
          <input
            placeholder="enter car compony "
            name="company"
            value={singleProduct.company}
            onChange={addProduct}
          ></input>
          <input
            placeholder="enter fuel type"
            name="fuelType"
            value={singleProduct.fuelType}
            onChange={addProduct}
          ></input>
          <input
           
            placeholder=" powerSteering ? "
            name="powerSteering"
            value={singleProduct.powerSteering}
            onChange={addProduct}
          ></input>
           <input
           
           placeholder=" breakSystem "
           name="breakSystem"
           value={singleProduct.breakSystem}
           onChange={addProduct}
         ></input>
           <input
           placeholder=" showroomPrice "
           name="showroomPrice"
           value={singleProduct.showroomPrice}
           onChange={addProduct}
         ></input>
          <input
           placeholder=" onroadPrice "
           name="onroadPrice"
           value={singleProduct.onroadPrice}
           onChange={addProduct}
         ></input>
          <input
           placeholder=" mileage "
           name="mileage"
           value={singleProduct.mileage}
           onChange={addProduct}
         ></input>
          <input
           placeholder=" seatingCapacity "
           name="seatingCapacity"
           value={singleProduct.seatingCapacity}
           onChange={addProduct}
         ></input>
           <input
           placeholder=" engineCapacity "
           name="engineCapacity"
           value={singleProduct.engineCapacity}
           onChange={addProduct}
         ></input>
           <input
           placeholder=" gearType "
           name="gearType"
           value={singleProduct.gearType}
           onChange={addProduct}
         ></input>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideAddModel}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCarDetails;
