import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/kuljeetchaudhary")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setdata(data);

    //     })

    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='image' width={200}></img>
    <p>Account Holder Name: {data.name}</p>
    </div>
  )
}

export default Github
export  const githubInfoloader =async()=>{
    const response=await  fetch("https://api.github.com/users/kuljeetchaudhary");
    return response.json();
}