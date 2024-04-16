export default function Footer({social}){
    return(
        <footer className=" flex items-center justify-between py-4 px-8">
            <div className="flex justify-between items-center w-3/12 ">
                {
                    social.map(soc => (
                        <a href={soc.url} key={soc._id}>
                            <img src={soc.image.url} alt={soc.platform} className="w-10"/>
                        </a>
                    ))
                }
            </div>
            <div>
               &copy; {new Date().getFullYear()} copyright all rights reserved 
            </div>
        </footer>
    )
}