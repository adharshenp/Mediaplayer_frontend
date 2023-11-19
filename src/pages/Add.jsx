import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadviedostatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [videos,setVideos]=useState({
    id:'',
    caption:'',
    url:'',
    embededlink:''
  })
  console.log(videos);


  const embedvideolink=(e)=>{
    const {value}=e.target
    console.log(value.slice(-11));
    const link=`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos,embededlink:link})

  }
  const handleUpload=async()=>{
    const {id,caption,url,embededlink}=videos

    //if there is no value in input box
    if(!id||!caption||!url||!embededlink){
      toast.warning('please fill all the field')
    }
    else{
     const response= await uploadAllVideo(videos)
     console.log(response);
     if(response.status>=200 && response.status<300){
      setUploadviedostatus(response.data)
      toast.success(`${response.data.caption} is successfully uploaded`)

      setVideos({
        id:'',
    caption:'',
    url:'',
    embededlink:''
      })

      //close the modal
      handleClose()
     }
     else{
      console.log(response);
      toast.error('failed! try again')
     }
    }
  }
  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload New Vedio</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i> Upload Vedios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>please fill the form completly</p>
         <form className='border border-secondary rounded p-3'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter vedio id"  onChange={(e)=>setVideos({...videos,id:e.target.value})}/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter vedio caption" onChange={(e)=>setVideos({...videos,caption:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder=" vedio image url" onChange={(e)=>setVideos({...videos,url:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder=" enter youtube vedio link" onChange={embedvideolink} />
      </Form.Group>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload}  variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Add








//<iframe width="703" height="395" src="https://www.youtube.com/embed/2ivup-i5eQw" title="Cristiano Ronaldo is STILL THE GOAT at 38 • Dribbling Skills, Assists &amp; Goals 2023/24 | HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


//toastify- customise alert