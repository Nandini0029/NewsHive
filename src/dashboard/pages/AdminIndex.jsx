import React, { useEffect, useState } from 'react';
import News from '../../info/News';
import axios from 'axios';

const AdminIndex = () => {

  const [d,setD] = useState();
  const [count,setCount] = useState();
  useEffect(()=>{
    const getData = async()=>{
      try
      {
        const r = await axios.get("https://newshive-express-1.onrender.com/data", {
          headers: {
            'Authorization': localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }
        });
        
        if(r.status == 200)
        {
          setD(r.data);
        }
        else
        {
          console.log(r);
        }
      }
      catch(error)
      {
        console.log(error);
      }
    };
    const getcount = async()=>{
      try
      {
        const r = await axios.get("https://newshive-express-1.onrender.com/dataCount", {
          headers: {
            'Authorization': localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }
        });
        
        if(r.status == 200)
        {
          console.log(r);
          setCount(r.data.totalAuth);
        }
        else
        {
          console.log(r);
        }
      }
      catch(error)
      {
        console.log(error);
      }
    };
    getData();
    getcount();
  },[]);
  return (<>
  {d != null ? 
    <div className='mt-2'>
      <div className='grid grid-cols-5 gap-x-4'>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>{d.totalNews}</span>
          <span className='text-md'>Total News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>{d.pendingNews}</span>
          <span className='text-md'>Pending News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>{d.activeNews}</span>
          <span className='text-md'>Active News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>{d.inactiveNews}</span>
          <span className='text-md'>Deactive News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>{count}</span>
          <span className='text-md'>Writers</span>
        </div>
      </div>
    </div>
    : ""}
    <News></News>
    </>
  );
};

export default AdminIndex;