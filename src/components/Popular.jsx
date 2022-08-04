import { Link } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import {URL} from 'Constants';
const IMAGE_URL = URL.IMAGE_URL

const Popular = () => {
  const { popularFetchDataSuccess } = useSelector((state) => state);
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col text-center w-full">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Popular Movies</h1>
      </div>
      <div class="grid grid-rows-1 grid-flow-col -m-4 overflow-x-auto">
      {popularFetchDataSuccess.map((item) =>
             <Link to={`/detail/${item.id}`}  class="p-4 w-96">
               <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`${IMAGE_URL+item.poster_path}`}/>
               <div class="w-full">
                 <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                 <h3 class="text-gray-500 mb-3">{item.release_date}</h3>
                 <p class=" leading-6">Rating: {item.vote_average}</p>
               </div>
           </Link>)}
      
       
      </div>
    </div>
  </section>
  )
}

export default Popular
