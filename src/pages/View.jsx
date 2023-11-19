import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllvideo } from '../services/allAPI'


function View({uploadvideostatus}) {
  const [allVideo,setAllVideo]=useState([])

  const [deletevideoststus,setDeletevideostatus]=useState(false)

  const getAllUploadedVideos =async()=>{
    const response =await getAllvideo()
    //console.log(response);
    const{data}=response
   // console.log(data);
    setAllVideo(data)
  
  }
  console.log(allVideo);
   
  useEffect(()=>{
    getAllUploadedVideos()
    setDeletevideostatus(false)
  },[uploadvideostatus,deletevideoststus ])

  return (
    <>

  <Row>
    { allVideo.length>0?
    allVideo.map((video)=>(

      <Col sm={12} md={6} lg={4} xl={3}>
    <Videocard displayVideo={video} setDeletevideostatus={setDeletevideostatus}/>
  </Col>
    ))
    
   
  :
   
    <p>nothing to display</p>

}
  </Row>

    </>
  )
}

export default View