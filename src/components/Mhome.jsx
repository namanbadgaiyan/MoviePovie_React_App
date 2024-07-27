import { useEffect, useState } from "react"
import Header from "./partials/Header"
import Sidenav from "./partials/Sidenav"
import Topnav from "./partials/Topnav"
import axios from "../utils/axios"
import HoriCard from "./partials/HoriCard"
import Dropbox from "./partials/Dropbox"

const Mhome = () => {
    document.title = "MP | homepage"
    const [headwall, setheadwall] = useState(null)
    const [treand, settreand] = useState(null)
    const [category, setcategory] = useState("all")

    const Getheadwall = async () => {
        try {
            const {data} =  await axios.get(`/trending/all/day`)
            const randomRes = data.results[(Math.random() * data.results.length).toFixed()];
            setheadwall(randomRes)
        } catch (error) {
            console.log("error", error);
        }
    }

    const Gettreand = async () => {
        try {
            const {data} =  await axios.get(`/trending/${category}/day`)
            const randomRes = data.results;
            settreand(randomRes)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(()=>{
        Gettreand()
        !headwall && Getheadwall()
    },[category])

    return headwall && treand ? (
        <>
            <Sidenav />
            <div className="base-bar w-[80%] h-full overflow-y-auto">
                <Topnav />
                <Header data={headwall} />
                <div className="flex items-center justify-between pt-5 px-7">
                    <h1 className="text-white text-[2vw] mb-2"> <i className="mr-2 ri-fire-fill text-[#A91D3A]"></i>Trending</h1>
                    <Dropbox func={(e)=>setcategory(e.target.value)} title="filter" options={["tv","movie","all"]} />
                </div>
                <HoriCard data={treand} />
            </div>
        </>
    ) : (<h1 className="flex items-center justify-center text-white text-[3vw] w-full">Loading...</h1>)
}

export default Mhome