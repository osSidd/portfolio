export default function Projects(){
    return (
        <div className="my-32">
            <h2 className="text-3xl text-center font-semibold mb-10">Projects</h2>
            <div className="grid grid-rows-2 md:grid-rows-none items-center px-4 md:px-0 md:grid-cols-12 gap-0 md:gap-5">
                <div className="md:col-start-2 md:col-span-4 shadow-lg py-2 px-4 rounded-lg">project gif</div>
                <div className="md:col-end-12 md:col-span-5">
                    <h3 className="font-semibold text-lg">A JamStack Blog website</h3>
                    <div className="my-2">
                        <span className="align-middle">REACT | NODE-EXPRESS | MONGODB | AUTH(JWT) | TAILWINDCSS</span>
                    </div>
                    <div>
                        <a className="link" href="https://blog-client-phi.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
                        <a className="link" href="https://github.com/osSidd/blog" target="_blank" rel="noopener noreferrer">Backend-Repo</a>
                        <a className="link" href="https://github.com/osSidd/blog_client" target="_blank" rel="noopener noreferrer">Frontend-Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}