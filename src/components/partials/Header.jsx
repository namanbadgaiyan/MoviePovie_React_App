/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Header = ({data}) => {
    return (
        <div className="w-full h-[65vh] mt-5 bgwall flex flex-col justify-end items-start px-10 py-10" style={{background: `linear-gradient(rgba(37, 34, 34, 0.3) , rgba(26, 23, 23, 0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${(data.backdrop_path || data.profile_path || data.poster_path)})`,backgroundPosition: 'center' , backgroundSize: 'cover'}}>

            <h1 className="font-bold text-white text-[2.6vw]">{data.name || data.title || data.original_title || data.original_name}</h1>
            <p className="w-[70%] text-white">{data.overview.slice(0,200)}...<Link className="mx-2 text-blue-600">see more</Link></p>
            <p className="text-white">
                <i className="ri-soundcloud-fill text-[#A91D3A] ml-2 mr-1"></i>{" "}{!data.release_date ? "no information" : data.release_date}{" "}
                {data.media_type.toUpperCase() === "MOVIE" ? (<i className="ml-2 ri-movie-2-fill text-[#A91D3A]"></i>) : (<i className="ml-2 ri-tv-fill text-[#A91D3A]"></i>)}{" "}{data.media_type.toUpperCase()}
            </p>
            <Link className="px-4 py-2 text-white rounded-md bg-[#A91D3A] hover:text-[#EEEAAB] mt-2 capitalize">watch trailer</Link>

        </div>
    )
}

export default Header