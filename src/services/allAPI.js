//upload videos

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


 export const uploadAllVideo =async(reqBody)=>{
   return await commonAPI ('POST',`${serverURL}/videos`,reqBody)

}

//get all videos from json server

export  const getAllvideo= async()=>{
   return await commonAPI('GET',`${serverURL}/videos`,"")
}


//api to delete video/

export  const deleteAllvideo= async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}
//viewed video in watchhistory
export  const viewedvideohist= async(videodetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videodetails)
}


//api to get all history from json server

export  const getallhistory= async()=>{
   return await commonAPI('GET',`${serverURL}/history`,"")
}


//api to delete history

export  const deleteahistory= async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
  
//to delete all history

export  const deleteallhistory= async()=>{
   return await commonAPI('DELETE',`${serverURL}/history`,"")
}
 
//api to add categories

export  const addtocategory= async(body)=>{
   return await commonAPI('POST',`${serverURL}/categories`,body)
}


//api to get category
export  const getallcategory= async()=>{
   return await commonAPI('GET',`${serverURL}/categories`,"")
}

// api to delete the added category

export  const deleteacategory= async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}


//api to get aparticular video

export  const getvideo = async(id)=>{
   return await commonAPI('GET',`${serverURL}/videos/${id} `,"")
}

//api to updatecategory

export  const updatecategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/categories/${id} `,body)
}
