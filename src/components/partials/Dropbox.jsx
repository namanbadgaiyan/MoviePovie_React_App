/* eslint-disable react/prop-types */

const Dropbox = ({title , options ,func}) => {
    return (
        <div className=''>
            <select defaultValue="0" onChange={func} name="format" id="format" className="w-[12vw] text-white/50 rounded-md hover:text-white h-[5vh] outline-none bg-transparent border border-[#EDEDED]/20 hover:border-white">
                <option value="0" disabled className="text-white bg-black/40">{title}</option>
                {options.map((o,i)=>(<option key={i} className="text-white bg-black/40" value={o}> {o.toUpperCase()} </option>))}
            </select>
        </div>
    )
}

export default Dropbox 