export default function Navbar(){
    return(
        <div className="fixed grid grid-cols-3 lg:grid-cols-12 px-4 md:px-0 items-center bg-blue-50 py-4">
            <div className="md:col-start-2 md:col-span-2 text-2xl font-semibold">
                <h1>Website logo</h1>
            </div>
            <div className="col-end-5 block lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
            </div>
            <nav className="hidden lg:block col-end-10">
                <ul className="flex gap-10 uppercase">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}