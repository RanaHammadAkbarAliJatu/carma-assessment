import React, { useEffect, useState } from "react";
import { get_with_genres_movie} from 'apis/api';
import { URL } from 'Constants';
import { useParams } from 'react-router-dom'
import Menu from "components/Menu"
import { Link } from "react-router-dom";
import Footer from "components/Footer"

import Loading from "components/Loading"
const IMAGE_URL = URL.IMAGE_URL

const Home = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMovies = () => {
    setLoading(true)
    const data_movie = get_with_genres_movie(id)
    data_movie.then((response) => {
      console.log(response.results[0],"response")
      setLoading(false)
      setData(response.results)
    })
  }
  useEffect(() => {
    getMovies()
  }, [id])
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <>
      <Menu/>
       { !loading ? <>
          <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
              <div class="flex flex-wrap -m-4">
                {data.map((item) =>
                  <Link to={`/detail/${item.id}`} className="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                      <img class="h-40 rounded w-full object-cover object-center mb-6" src={`${IMAGE_URL + item.poster_path}`} alt="content" />
                      <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.release_date}</h3>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                    </div>
                  </Link>)}

              </div>
            </div>
          </section>
        </> : <Loading />
      }
      <Footer />
    </>
  )
}

export default Home