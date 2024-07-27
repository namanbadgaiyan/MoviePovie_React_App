import axios from "../../utils/axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import noimage from '/default.jpg'

const Topnav = () => {
    const [topSearch, settopSearch] = useState("")
    const [finalresult, setfinalresult] = useState([])

    const Getresult = async () => {
        try {
            const {data} =  await axios.get(`/search/multi?query=${topSearch}`)
            setfinalresult(data.results)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        Getresult()
    
    }, [topSearch])
    


    return (
        <div className="w-[60%] h-[10vh] pl-10 flex justify-start items-center gap-7 relative text-[#EEEEEE]">
            <i className="text-[1.6vw] ri-search-2-line"></i>
            <input 
                onChange={(e)=>{settopSearch(e.target.value)}}
                value={topSearch}
                type="text"
                placeholder="search anything ..." 
                className="px-5 py-3 text-[#EEEEEE] w-[80%] border-b border-[#EEEEEE] text-[1.2vw] bg-transparent outline-none" 
            />
            {topSearch.length > 0 && <i onClick={()=>{settopSearch("")}} className="text-[1.6vw] ri-close-fill"></i>}
            

            <div className="absolute max-h-[45vh] top-[86%] w-[75%] overflow-auto ml-[3.4vw]">
                {finalresult.map((s,i)=>( 
                    <Link key={i} className="text-[#EEEEEE] px-4 py-2 border-b bg-[#211f1f] rounded border-[#EEEEEE] flex justify-start items-center gap-3 hover:bg-[#A91D3A] hover:text-[#EEEAAB]">
                        <img className="w-[5vw] h-[5vw] object-cover rounded shadow-lg" src={s.backdrop_path || s.profile_path || s.poster_path ? `https://image.tmdb.org/t/p/original/${(s.backdrop_path || s.profile_path || s.poster_path)}` : noimage} alt="" />
                        <span className="text-[1.2vw] capitalize">{s.name || s.title || s.original_title || s.original_name}</span>
                    </Link>
                ))}
            
                
            </div>
        </div>
    )
}

export default Topnav