import React, { useEffect, useState } from 'react'
import LoadMore from './Component/LoadMore'

const App = () => {

  const [dummydata,setdummydata]=useState([]);
  const[count,setcount]=useState(0)
  const[disable,setdisable]=useState(false)

  useEffect(()=>{

    fetchData();

  },[count])
  const fetchData=async()=>{
    const data=await fetch(`https://dummyjson.com/products?limit=10&skip=${count===0?0:count*20}`)
    const datajson=await data.json();
    //setdummydata(datajson.products)
    setdummydata((prevData) => [...prevData, ...datajson.products]);
    if(dummydata.length===60) setdisable(true)
    
  }
  return (
    <>
    <div className='flex flex-wrap justify-between items-center sm:justify-center lg:justify-between'>

      {dummydata.map((data)=>(<LoadMore thumnail={data.thumbnail}/>))}
    </div>
    {!disable?<button onClick={()=>setcount(count+1)}>Load More</button>:<p>All product finished</p>}
    </>
  )
}

export default App