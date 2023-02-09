import {BsGithub, BsLinkedin} from 'react-icons/bs'

export default function Social(){
    return (
        <div className="hidden md:block fixed top-2/4 bg-white px-2 py-4 rounded-r-lg text-black text-4xl">
            <span className='block mb-4'><BsGithub/></span>
            <span><BsLinkedin/></span>
        </div>
    )
}