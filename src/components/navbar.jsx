export default function Navbar(){
    return(
        <div className="grid grid-cols-12 bg-blue-100 py-4">
            <div className="col-start-2 col-span-2 text-2xl font-semibold">
                <h1>Website logo</h1>
            </div>
            <nav className="col-end-10">
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