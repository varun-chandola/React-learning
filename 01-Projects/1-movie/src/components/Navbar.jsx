import React from "react"
import axios from 'axios'
import { searchApi } from "../allAPI/allApi"
import {useState} from 'react'

import { context } from "../context/MovieContext"
import { useContext } from "react"
import {Link} from "react-router-dom"

import { useSelector } from "react-redux"
export default function Navbar() {
  const [searchBox , setSearchbox] = useState('')
  const {setMovies} = useContext(context)
  const watchListCount = useSelector(state=>state.watchListCount)

function fetchResults(value){
    axios.get(searchApi + `${value}`)
    .then(res=>{
      setMovies(res.data.results)
      setSearchbox('')
    })
  }


  return (
    <>
    <div className="flex items-center justify-center sticky top-0 bg-[#858181] h-[30px] m-0 p-[50px] z-[100]">
      <div className='text-4xl mr-[30px]'><Link to='/'>Home</Link></div>
      <input
      className="font-extrabold p-[10px] text-4xl rounded-[10px]"
      placeholder="search movies"
      value={searchBox}
      onChange={(e)=>setSearchbox(e.target.value)}
      />

      <button 
      className="bg-yellow-300 rounded-[10px] text-black text-3xl ml-[20px] p-3"
      onClick={()=>fetchResults(searchBox)}
      >Search</button>

      <Link to='/watchlist'
      className="font-mono font-bold ml-[50px] text-[30px] text-black">Watchlist ({watchListCount.length})</Link>
    </div>
    </>
  );
}