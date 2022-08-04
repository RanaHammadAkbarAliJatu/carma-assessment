import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { URL } from 'Constants';
const IMAGE_URL = URL.IMAGE_URL

const Popular = () => {
  const { searchFetchDataSuccess } = useSelector((state) => state);
  return (
    <section class="text-gray-600 body-font my-4">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Search Movies</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          {searchFetchDataSuccess.map((item) =>
            <Link to={`/detail/${item.id}`} className="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src={`${IMAGE_URL + item.poster_path}`} alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.release_date}</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                <p class="leading-relaxed text-base">vote_average: {item.vote_average}</p>
              </div>
            </Link>)}

        </div>
      </div>
    </section>
  )
}

export default Popular
