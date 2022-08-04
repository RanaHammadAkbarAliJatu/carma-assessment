import React, { useEffect, useState } from "react";
import { get_details_movie, post_reviews, get_similar_movie } from 'apis/api';
import { URL } from 'Constants';
import { useParams } from 'react-router-dom'
import StarRatingComponent from "react-star-rating-component";
import RelatedMovies from "components/RelatedMovies"
import Loading from "components/Loading"
import Menu from "components/Menu";
import Footer from "components/Footer";

const IMAGE_URL = URL.IMAGE_URL
const Detail = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [similar, setSimilar] = useState([]);
  const [rating, setRating] = useState(0);
  const getMovies = () => {
    setLoading(true)
    setLoading2(true)
    const data_movie = get_details_movie(id)
    data_movie.then((response) => {
      setLoading(false)
      setData(response)
    })
    const similar_movie = get_similar_movie(id)
    similar_movie.then((response) => {
      setLoading2(false)
      setSimilar(response)
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
    <Menu   />
    <section class="text-gray-600 body-font overflow-hidden">
      {!loading ? 
      <div class="container px-5 py-12 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`${IMAGE_URL + data?.poster_path}`} />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">status: {data.status}</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
            <h2 class="text-sm title-font text-gray-500 tracking-widest mb-1">Release Date: {data.release_date}</h2>

            <h2 class="text-sm title-font text-gray-500 tracking-widest mb-1">Runtime: {data.runtime}</h2>
            <h2 class="text-sm title-font text-gray-500 tracking-widest mb-1">Original Language: {data.original_language}</h2>
            <h2 class="text-sm title-font text-gray-500 tracking-widest mb-1">homepage: {data.homepage}</h2>
            <h2 class="text-sm title-font text-gray-500 tracking-widest mb-1">
              Spoken Languages:
              {data?.spoken_languages?.map((item) => {
                return item.name + " "
              })}
            </h2>
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Production Companies:
              {data?.production_companies?.map((item) => {
                return item.name + " "
              })}
            </h2>
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Genres:{" "}
              {data?.genres?.map((item) => {
                return item.name + " "
              })}
            </h2>
            <p class="leading-relaxed my-5">{data.overview}</p>
            <div class="flex mb-4">
              <span class="flex items-center">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={(nextValue) => {
                    setRating(nextValue);
                    post_reviews(nextValue, id)
                  }}
                />
                <span class="text-gray-600 ml-3">{data?.vote_average?.toFixed(1)} Reviews</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      :
      <Loading />}
      <RelatedMovies similar={similar} loading={loading2} />
    </section>
    <Footer />
    </>
  )
}

export default Detail