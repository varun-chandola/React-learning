import React from 'react'
import {useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(){
    // const [apiData , setApiData] = useState([]);

    const apiData = useLoaderData()


    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         // console.log(data)
    //         setApiData(data)
    //     })
    // } , [])

    
    return (
        <>
        <div className='text-center bg-gray-700 m-4 p-4 text-white text-3xl'>
            Github followers : {apiData.followers}

            <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                <img  src={apiData.avatar_url} alt='github proflie pic'/>
            </div>

        </div>
        </>
    )
}


export  const infoLoader = async () => {
    const repsonse = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return repsonse.json()
}