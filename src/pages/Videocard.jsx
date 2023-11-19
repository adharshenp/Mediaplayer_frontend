import React from 'react'
import { Card } from 'react-bootstrap'
import { deleteAllvideo, viewedvideohist } from '../services/allAPI'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function Videocard({displayVideo,setDeletevideostatus,isPresent}) {
 
  const [show, setShow] = useState(false);
  const handleClose =() => setShow(false);
  const handleShow = async() => {
    setShow(true)

   const {caption,embededlink}=displayVideo


   const today =new Date()
   let timestamp=new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
   console.log(timestamp);

   let videodetails={
    caption,embededlink,timestamp
   }
   const response =await viewedvideohist(videodetails)
   console.log(response);


  }


  const removeAvideo =async(id)=>{
   const response= await deleteAllvideo(id)
   setDeletevideostatus(true)
   //console.log(response);
  }
  //function to drag a particular card
  const dragstart=(e,id)=>{
    console.log(`card that dragged is ${id}`);
    e.dataTransfer.setData("videoid",id)  //video send to category by drop by key value pair

  }

 
  return (
   <>
   <Card style={{ width: '100%',height:'380px' }} className='mb-4'draggable onDragStart={(e)=>dragstart(e,displayVideo?.id)}>
      <Card.Img onClick={handleShow}  height={'280px'} variant="top" src={displayVideo.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
           <h6>{displayVideo.caption}</h6>
            

          {!isPresent && <button onClick={()=>removeAvideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>}
         
            </Card.Title>
       
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embededlink}?autoplay=1` } title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          escape key.
        </Modal.Body>

      </Modal>
   </>
  )
}

export default Videocard