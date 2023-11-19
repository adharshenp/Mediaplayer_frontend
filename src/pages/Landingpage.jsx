import React from 'react'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p className='mt-3'style={{textAlign:'justify'}}>This is a simple media player built using react and bootstrap. You can play, pause, stop videos or audio files.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-warning '>Get Started <i class="fa-solid fa-arrow-right"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </Col>
    </Row>
    <div className='container mt-5 mb-5 d-flex justify-content align-items-center flex-column'>
      <h3>Features</h3>
      <div className='cards d-flex justify-content-evenly align-items-center w-100'>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className='container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
       
       <Row>
        <Col lg={5}>
          <h3 className='text-warning mb-2'>Simple and Powerful</h3>
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Eveything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis quaerat asperiores dolore consequatur necessitatibus labore, eum excepturi saepe placeat quae sequi illo repellendus quas aut earum aperiam modi. Velit?</h6>
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Eveything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis quaerat asperiores dolore consequatur necessitatibus labore, eum excepturi saepe placeat quae sequi illo repellendus quas aut earum aperiam modi. Velit?</h6>
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Eveything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis quaerat asperiores dolore consequatur necessitatibus labore, eum excepturi saepe placeat quae sequi illo repellendus quas aut earum aperiam modi. Velit?</h6>
        </Col>
        <Col></Col>
        <Col lg={6}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FF-xO6Arl4g?si=jEVdT2t2hetZV5uF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Col>
       </Row>
    </div>
    </>
  )
}

export default Landingpage