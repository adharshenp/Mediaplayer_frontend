import React, { useEffect, useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addtocategory, deleteacategory, getallcategory, getvideo, updatecategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Videocard from './Videocard';


function Category() {
  const [show,setShow]=useState(false);

  const [Categoryname,setCategoryname]=useState('')
  const [category,setCategory]=useState([])

  const handleClose =() =>setShow(false);
  const handleShow =() =>setShow(true);

  //function to add category 
  const handleaddcategory=async()=>{
    console.log(Categoryname);
    if(Categoryname){

      let body ={
        Categoryname,
        allvideos:[]
      }
      const response=await addtocategory(body)
      console.log(response);
      if(response.status>=200&&response.status<300){
        toast.success('Added Successfully')
        allcategory()
        

        //input box empty after adding category

        setCategoryname("")
        //modal close
        handleClose()
 
      }
      else{
        toast.error('Something went Wrong')
      }

    }
    else{
      toast.warning('please a enter a CatergoryName')
    }

  }


  //function to get all categories

  const allcategory=async()=>{
    const {data}= await getallcategory()
   // console.log(data);
   setCategory(data)
  }
  console.log(category);

  //function to delete added category

  const removecategory=async(id)=>{
    await deleteacategory(id)
    //to get the remaining category
    allcategory()
     
  }

  //function to prevent reload

  const dragover=(e)=>{
    e.preventDefault()
  }
 
//function to drop video card to category
  const videodrop =async(e,categoryid)=>{
    console.log('category in which videocard is dropped',categoryid);
   let videoid= e.dataTransfer.getData("videoid")
   console.log(videoid);

//api to get a video
   const{data} =await getvideo(videoid)
   console.log(data);


   let selectedcategory=category.find((item)=>item?.id==categoryid)
    selectedcategory.allvideos.push(data)
   console.log(selectedcategory);
    await updatecategory(categoryid,selectedcategory)
    allcategory()
  }
  

  useEffect(()=>{ allcategory() },[])


  return (
    <>


    <div className='d-grid ms-3'>
    <button onClick={handleShow} className='btn btn-warning'>Add New Category</button></div>


    { category?.length>0?
    category?.map((item)=>(<div className='m-5 border border-warning p-3 rounded' droppable onDragOver={(e)=>dragover(e) } onDrop={(e)=>videodrop(e,item?.id)} >
    <div className="d-flex justify-content-between align-items-center">
      <h6>{item.Categoryname}</h6>
      <button onClick={()=>removecategory(item?.id)} className='btn btn-danger'><i class='fa-solid fa-trash-can fa-fade'></i></button>
    </div>
    
    <Row>
      <Col>
      {
        item?.allvideos.length>0?
        item.allvideos.map((card)=>(<Videocard displayVideo={card} isPresent={true}/>))
        :
        <p>Nothing to diplsy</p>
      }
      </Col>
    </Row>

  </div>) )
      
    : <p className='fw-bolder fs-5 text-danger m-3 '>Nothing to display</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class='fa-solid fa-pencil text-warning me-2'></i>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary rounded p-3'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e)=>setCategoryname(e.target.value)}
              />
            </Form.Group>
          </form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleaddcategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>



    </>
  )
}

export default Category