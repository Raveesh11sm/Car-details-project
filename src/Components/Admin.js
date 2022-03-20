import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import AddCarDetails from './AddCarDetails';
import  axios  from 'axios';
import UpdateCarDetails from './UpdateCarDetails';
import DisplayCar from './DisplayCar.js';

function Admin() {
    const [CarDetails, setCarDetails] = useState([])
    const [showAddModel, setshowAddModel] = useState(false)
    const [selectedProduct, setselectedProduct] = useState({})
    const [showEditModel, setshowEditModel] = useState(false)
   const [Delete, setDelete] = useState()

   console.log(CarDetails);

    useEffect(() => {
      fetchProducts();
    }, [Delete,selectedProduct]);

    let fetchProducts=async()=>{
      let jwtToken=localStorage.getItem("jwtToken");
      let token=`Bearer ${jwtToken}`
      
        let res = await axios.get("http://localhost:8089/admin/getInfo",
        {
          headers:{"Authorization":token}
        }
       );
       console.log(res);
        console.log(res.data.allCarsDetails);
        if(res.data.error){
          alert(res.data.message);
        }else{
          let fetchProducts=res.data.allCarsDetails;
          setCarDetails(fetchProducts);
        }
    
    }
    console.log(CarDetails);
  
    let hideAddModel=()=>{
         setshowAddModel(false)
    };
    
    let hideEditModel =()=>{
      setshowEditModel(false);
    }
  
    return (
      <div>
        <button className='btn btn-primary mt-5' onClick={()=>{setshowAddModel(true)}}>ADD NEW CAR</button>
       <div className='container-fluid '>
        <div className='row m-auto'>
        {CarDetails.map(val=>{
          return  <div className=' col-4 mt-3 '>
          <DisplayCar data={val}setDelete={setDelete} setshowEditModel={setshowEditModel} 
              setselectedProduct={setselectedProduct}/>
             </div>
        })}
            </div>
            </div>
          
  <AddCarDetails  showAddModel={showAddModel} hideAddModel={hideAddModel} fetchProducts={fetchProducts}/>
   <UpdateCarDetails selectedProduct={selectedProduct} showEditModel={showEditModel} 
   hideEditModel={hideEditModel}
    fetchProducts={fetchProducts} />
      </div>
    )
}
export default Admin

