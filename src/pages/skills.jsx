export default function Skills(){
    return (
        <div className="bg-white my-32">
            <h2 className="text-3xl text-center font-semibold mb-10">Skills</h2>
            <div className="grid grid-rows-2 md:grid-rows-none items-center px-4 md:px-0 md:grid-cols-12 gap-0 md:gap-5">
                <div className="md:col-start-2 md:col-span-4">
                    <ul>
                        <li className="my-2">Building websites and web-apps using MERN stack</li>
                        <li className="my-2">Making REST-APIs using NODE-EXPRESS</li>
                        <li className="my-2">Authentication using PassportJS</li>
                        <li className="my-2">Developing websites using JamStack</li>
                        
                    </ul>
                </div>
                <div className="md:col-end-12 md:col-span-5 flex items-center flex-wrap">
                    <span className="icons">HTML</span>
                    <span className="icons">CSS</span>
                    <span className="icons">JAVASCRIPT</span>
                    <span className="icons">REACT</span>
                    <span className="icons">NODEJS</span>
                    <span className="icons">EXPRESS</span>
                    <span className="icons">MONGODB</span>
                    <span className="icons">REST-API</span>
                    <span className="icons">TAILWINDCSS</span>
                    <span className="icons">AUTH</span>
                </div>
            </div>
        </div>
    )
}