import { createContext, useState } from "react";
export const context = createContext()

import React from 'react'

export default function MovieContext({children}) {
    const [movies , setMovies] = useState([]) 
    const [loading , setLoading] = useState(true)
  return (
    <>
    <context.Provider value={{movies,setMovies,loading,setLoading}}>
        {children}
    </context.Provider>
    </>
  )
}
