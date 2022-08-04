import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsFetchData } from "actions/moviesList";
import Menu from "components/Menu"
import Upcoming from "components/Upcoming"
import Popular from "components/Popular"
import Search from "components/Search"
import TopRated from "components/TopRated"
import Footer from "components/Footer"
import Loading from "components/Loading";
const Home = () => {
  const { searchFetchDataSuccess,itemsAreLoading } = useSelector((state) => state);
console.log(itemsAreLoading,"state")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsFetchData())
  }, [])
  let showSearch = searchFetchDataSuccess.length > 0
    return (
      <>
        <Menu searchShow/>
        {showSearch ?
          <Search />
          :
          !itemsAreLoading? <>
            <Upcoming />
            <Popular />
            <TopRated />
          </> : <Loading />
        }
        <Footer />
      </>
    )
}

export default Home