import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { nowPlaying, IMGPATH, topRatedAPI } from "../allAPI/allApi";
import "../index.css";

import { useContext } from "react";
import { context } from "../context/MovieContext";
import { addToWatchList } from "../features/reducers/watchlist";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";


export default function Home() {

  const { movies, setMovies, loading, setLoading } = useContext(context);
  function displayHome() {
    axios.get(nowPlaying).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }

  useEffect(() => {
    displayHome();
  }, []);

  const dispatch = useDispatch();
  function handleAdd(payload) {
    dispatch(addToWatchList(payload));
  }

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          {movies.length === 0 ? (
            <div className='flex justify-center items-center w-100 bg-[#212121] h-[100vh]'>
              <img src='https://png.pngtree.com/element_our/20200610/ourmid/pngtree-red-error-icon-image_2248553.jpg'/>
            </div>
          ) : (
            <div className="flex flex-wrap w-screen bg-[#212121] justify-center h-100">
              {movies.map((each) => {
                const { title, release_date } = each;
                return (
                  <div
                    className="hover:bg-[#878683] border-solid border-2 border-white shadow w-[400px] h-[520px] m-[10px] p-[10px]  text-white rounded-[10px]"
                    key={release_date + title + Math.random() + 100}
                  >
                    <div className="flex items-center justify-center">
                      <img
                        alt=""
                        src={
                          each.poster_path
                            ? IMGPATH + each.poster_path
                            : `https://dummyimage.com/320x480/000/fff&text=No+Image+Available`
                        }
                        width={250}
                      />
                    </div>
                    <div className="flex items-center justify-center flex-col mt-5">
                      <h2 className="text-2xl flex justify-center items-center">{title}</h2>
                      <p className="mt-[10px] text-xl">({release_date})</p>
                      <button
                        className="border-2 mt-[10px] bg-white text-black"
                        onClick={() => handleAdd(each)}
                      >
                        Add to Watchlist
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
}
