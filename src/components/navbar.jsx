export default function Navbar(){
    return(
        <div className="fixed w-full grid grid-cols-3 lg:grid-cols-12 px-4 md:px-0 items-center bg-white py-4">
            <div className="col-span-2 md:col-start-2 md:col-span-2">
                <h1 className="uppercase font-semibold md:text-xl">osama siddiquee</h1>
            </div>
            <div className="col-end-5 block lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
            </div>
            <nav className="hidden lg:block col-end-10">
                <ul className="flex gap-10 uppercase font-semibold text-gray-700">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}