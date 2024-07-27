/* eslint-disable react/prop-types */

const HoriCard = ({data}) => {
    return (
        <div className="w-full h-[50vh] px-7 py-5">           
            <div className="flex overflow-x-auto overflow-y-hidden fwffw">
            {data.map((d,i)=>(
                <div key={i} className="m-2 w-[20vw] h-[40vh] flex-shrink-0">
                    <img className="w-full h-[70%] object-cover" src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path}`} alt="" />
                    <h1 className="font-normal text-white text-[1.5vw]">{d.name || d.title || d.original_title || d.original_name}</h1>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HoriCard