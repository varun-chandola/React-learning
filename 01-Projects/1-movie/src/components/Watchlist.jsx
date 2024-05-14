import React from 'react'
import { useSelector } from 'react-redux'
import { IMGPATH } from '../allAPI/allApi'

import { Link } from 'react-router-dom'
import {removeFromWatchList} from '../features/reducers/watchlist'
import { useDispatch } from 'react-redux'
const Watchlist = () => {
  const dispatch = useDispatch()
  const watchlist = useSelector(state=>state.watchListCount)

  // function handleRemove(removedId){
  //   dispatch(removeFromWatchList(removedId))
  // }

  return (
    <>
     {watchlist.length == 0 ? (<div className='w-screen bg-[#212121]'>
          <div className="w-screen h-screen flex items-center justify-cetner flex-col">
            <img src='https://wegotthiscovered.com/wp-content/uploads/2023/06/LEO-POINTING-MEME.jpeg'/>
          </div>
          </div>) : 
          
          (
            <div className="flex flex-wrap w-screen bg-[#212121] items-center justify-center h-[86vh]">
              <div className='w-screen'>

              </div>
      {watchlist.map(each=>(
        <div key={each.id}
        className="hover:bg-[#878683] scale-1 border-solid border-2 border-white shadow w-[400px] h-[500px] m-[10px] p-[10px] bg-[#212121] text-white rounded-[10px]"
        >
              <div className='flex items-center justify-center'>
                <img alt="" src={each.poster_path? IMGPATH + each.poster_path : `https://dummyimage.com/320x480/000/fff&text=No+Image+Available`} width={250} />
            </div>
            <div className='flex items-center justify-center flex-col mt-5'>
                <h2 className='text-2xl'>{each.title}</h2>
                <p className='text-xl'>({each.release_date})</p>
              <button className='border-2 bg-white text-black'
              // onClick={()=>handleRemove(each.id)}
              onClick={()=>dispatch(removeFromWatchList(each.id))}
              >Remove from Watchlist</button>
              </div>
        </div>
      ))}
    </div>
    )}
    </>    
  )
}

export default Watchlist