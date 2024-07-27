import { Link } from "react-router-dom"

const Sidenav = () => {
    return (
        <div className="nav-bar w-[20%] h-full border-r border-[#EEEEEE] px-5 py-7">
            <h1 className="text-[#EEEEEE] text-[1.9vw] font-semibold"><i className="text-[#A91D3A] font-normal mr-2 text-3xl ri-spy-fill"></i> Movie Povie</h1>
                <nav className="flex flex-col gap-3 mt-4">
                    <h1 className="text-xl capitalize text-[#EEEEEE] font-normal px-4">new feeds</h1>
                    <Link className="text-[1.2vw] px-9 py-2 hover:bg-[#A91D3A] hover:text-[#EEEAAB] rounded-lg capitalize text-[#EEEEEE]">
                        <i className="mr-2 ri-fire-fill"></i>
                        trending
                    </Link>
                    <Link className="text-[1.2vw] px-9 py-2 hover:bg-[#A91D3A] hover:text-[#EEEAAB] rounded-lg capitalize text-[#EEEEEE]">
                        <i className="mr-2 ri-gemini-fill"></i>
                        popular
                    </Link>
                    <Link className="text-[1.2vw] px-9 py-2 hover:bg-[#A91D3A] hover:text-[#EEEAAB] rounded-lg capitalize text-[#EEEEEE]">
                        <i className="mr-2 ri-film-fill"></i>
                        movies
                    </Link>
                    <Link className="text-[1.2vw] px-9 py-2 hover:bg-[#A91D3A] hover:text-[#EEEAAB] rounded-lg capitalize text-[#EEEEEE]">
                        <i className="mr-2 ri-tv-2-fill"></i>
                        tv show
                    </Link>
                    <Link className="text-[1.2vw] px-9 py-2 hover:bg-[#A91D3A] hover:text-[#EEEAAB] rounded-lg capitalize text-[#EEEEEE]">
                        <i className="mr-2 ri-group-2-fill"></i>
                        people
                    </Link>
                </nav>
                <hr className="my-5 border-none h-[1px] text-center w-[90%] bg-[#EEEEEE]" />
                <nav className="flex flex-col gap-3 mt-4">
                    <h1 className="text-xl capitalize text-[#EEEEEE] font-normal px-4">web information</h1>
                    <Link className="text-[1.2vw] px-9 py-2 hover:bg-[#A91D3A] hover:text-[#EEEAAB] rounded-lg capitalize text-[#EEEEEE]">
                        <i className="mr-2 ri-information-2-fill"></i>
                        about MP
                    </Link>
                    <Link className="text-[1.2vw] px-9 py-2 hover:bg-[#A91D3A] hover:text-[#EEEAAB] rounded-lg capitalize text-[#EEEEEE]">
                        <i className="mr-2 ri-phone-fill"></i>
                        contact us
                    </Link>
                </nav>
        </div>
    )
}

export default Sidenav