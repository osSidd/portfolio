import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/footer';
function Home() {
    const params = useParams();
    const navigate = useNavigate();
    
    const userId = '65b3a22c01d900e96c4219ae'; //John doe

    const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);

                const userData = await response.json();

                document.title = `${userData?.user?.about?.name + ' - ' + userData?.user?.about?.title}`;
                setUser(userData?.user);
                setIsLoading(false);
                document.body.classList.remove('loaded');
            } catch (error) {
                navigate('/');
                setIsLoading(true);
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [params?.user, userId, navigate]);
    console.log(user);


// filtering all the data from the API
    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredServices = user?.services?.filter((item) => item.enabled);
    const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);

    if (isLoading) {
        return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading..</div>;
    }
    return (
        <div className='relative'>
            <Header name={user?.about?.name} />
            <div className=''>
            <Hero about={user?.about}/>
            <About about={user?.about}/>
            <Skills skills={sortedFilteredSkills}/>
            <Projects projects={sortedFilteredProject}/>
            <Services services={filteredServices}/>
            <div className='flex items-start justify-between'>
                <Timeline type='education' timeline={filteredEducation}/>
                <Timeline type='experience' timeline={filteredExperience}/>                
            </div>
            <Testimonial testimonials={filteredTestimonials}/>
            <Contact about={user?.about}/>
            </div>
            <Footer social={filteredSocialHandles}/>
        </div>
    );
}

export default Home;
