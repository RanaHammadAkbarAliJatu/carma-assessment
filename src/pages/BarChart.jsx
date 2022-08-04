import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsFetchData } from "actions/moviesList";
import Menu from "components/Menu"
import Chart from "components/Chart"
import Search from "components/Search"
import Footer from "components/Footer"
const Home = () => {
  const { searchFetchDataSuccess } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsFetchData())
  }, [])
  return (
    <>
      <Menu/>
        <>
          <Chart />
        </>
      <Footer />
    </>
  )
}

export default Home