export default function Contact(){
    return (
        <div className="my-32">
            <h2 className="text-3xl mb-10 text-center font-semibold">Contact</h2>
            <div>
                <form className="mr-auto ml-auto w-5/12">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input" type="text" name="name" id="name" placeholder="Name"/>
                    
                    <label className="label" htmlFor="email">Email:</label>
                    <input className="input" type="email" name="email" id="email" placeholder="Email"/>
                    
                    <label className="label" htmlFor="message">Message:</label>
                    <textarea className="input resize-none" name="message" id="message" cols="30" rows="8" placeholder="Type your message here...">
                    </textarea>

                    <button className="bg-teal-500 text-white py-2 px-4 rounded-md">Send Message</button>
                </form>
            </div>
        </div>
    )
}