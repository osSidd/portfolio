import home_background from '../assets/home_background.jpg'

export default function Home(){
    return (
        <div className="relative h-screen">
            {/**Need to use picture with srcset img for responsive behaviour*/}
            <h1 className='text-5xl top-2/4 left-1/4 absolute font-bold'>Hi I am Osama</h1>
            <img className='opacity-50 left-0 w-screen h-screen object-cover' src={home_background} alt="background" />
        </div>
    )
}