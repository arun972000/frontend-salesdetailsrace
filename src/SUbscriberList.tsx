import axios from "axios"
import { useEffect, useState } from "react"

type sub={
    name:string
}

const SubscriberList = () => {

    const [subscribers, setSubscribers]=useState<sub[]>([])

    const getSubscribers=async()=>{
        try{
            const res= await axios.get('https://race-subscriber-form.onrender.com/api/sub-lists')
            setSubscribers(res.data)
        }catch(err){
            console.log(err)
        }
    }

useEffect(()=>{
    getSubscribers()
},[])

  return (
    <>
    <p>total nos. {subscribers.length} </p>
    {subscribers.map(item=>(<p>{item.name}</p>))}
    </>
  )
}

export default SubscriberList