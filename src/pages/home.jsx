import home_background from '../assets/home_background.jpg'

export default function Home(){
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
            {/**Need to use picture with srcset img for responsive behaviour*/}
            <span className='text-white font-bold text-xl md:text-2xl mb-2'>Hi I am</span>
            <h1 className='text-4xl md:text-8xl text-white font-bold'>Osama Siddiquee</h1>
        </div>
    )
}