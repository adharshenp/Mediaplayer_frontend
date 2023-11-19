 import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteahistory, deleteallhistory, getallhistory, viewedvideohist } from '../services/allAPI'

function Watchhistory() {

const [history,setHistory]=useState([])

  const watchallhistory =async()=>{
    const {data}=await getallhistory()
    console.log(data);
    setHistory(data)
  }
  console.log(history);

 //remove a particular history

 const removeahist=async(id)=>{
  await deleteahistory(id)

  //to get the remaining history
  watchallhistory()
 }

 const historyfull=async()=>{
  await deleteallhistory()
  watchallhistory()
 }



  useEffect(()=>{
    watchallhistory()
  },[])
  return (
    <>
        <div className='container mt-5 d-flex justify-content-between'>
          <h3>Watch History</h3>
          <Link to={'/home'}className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
        </div>
        <div className=' d-flex justify-content-between align-items-center mt-3'> <button onClick={historyfull} className=' fw-bold btn btn-danger '>Clear All</button>  </div>
      
        <table className='table mt-5 mb-5 container'> 
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { history?.length>0?
            history.map((item,index)=>(<tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a href={item.embededlink} target='_blank'>{item.embededlink}</a></td>
              <td>{item.timestamp}</td>
              <td><button onClick={()=>removeahist(item?.id)} className='btn btn-danger'><i class='fa-solid fa-trash-can'></i></button></td>
            </tr>))
            :
            <p className='fw-bolder fs-4 text-danger ms-5'>nothing to display</p>
             }
          </tbody>
        </table>

    </>
  )
}

export default Watchhistory