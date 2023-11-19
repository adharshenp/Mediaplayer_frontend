import React, { useState } from 'react'
import Add from './Add'
import { Link } from 'react-router-dom'
import Category from './Category'
import View from './View'


function Home() {
  const [uploadvideostatus,setUploadviedostatus]=useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <div className='add-vedios'>
       <Add setUploadviedostatus={setUploadviedostatus}/>
       </div>
       <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>Watch History</Link>
      </div>
       <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
        <div className='all-vedios col-lg-9'>
          <h4 className='mb-5'>All Vedios</h4>
         <View uploadvideostatus={uploadvideostatus}/>
        </div>
        <div className='category col-lg-3'>
          <Category/>
        </div>
       </div>
      </>
    
    
  )
}

export default Home