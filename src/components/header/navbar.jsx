import { useState } from 'react'
import menuIcon from '../../assets/menu.svg'

export default function Navbar({name}){

    const navlinks = [
        {
            href: '#',
            label: 'Home'
        },
        {
            href: '#',
            label: 'Services'
        },
        {
            href: '#',
            label: 'Projects'
        },
        {
            href: '#',
            label: 'Contact'
        },        
    ]

    const [mobileMenu, setMobileMenu] = useState(false)
    const [navBg, setNavBg] = useState(false)

    function toggleMenu(){
        setMobileMenu(prev => !prev)
    }

    function debounce(fn, delay){
        let timerId
        return () => {
            clearTimeout(timerId)
            const args = arguments
            timerId = setTimeout(() => fn.apply(this, args), delay)
        }
    }

    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY >= 100) setNavBg(true)
        else setNavBg(false)
    }, 200))

    return (
        <nav className={`py-8 px-8 z-50 ${navBg ? 'bg-white shadow-lg' : 'bg-transparent shadow-none'}`}>
            <ul className="flex items-center">
                <li className="mr-auto">
                    <a href="/"><h1 className="text-3xl font-semibold">{name?.split(' ')[0]}</h1></a>
                </li>
                <MenuLinks mobile={false} navlinks={navlinks}/>
                <li className="ml-auto hidden lg:block">
                    <button className='uppercase tracking-widest bg-orange-600 text-white px-6 py-3'>Contact now</button>
                </li>
                <li className='cursor-pointer' onClick={toggleMenu}>
                    <img className='block lg:hidden w-8 h-8' src={menuIcon} alt="menu icon"/>
                </li>
            </ul>
            <ul className={mobileMenu ? 'block mt-4' : 'hidden'}>
                <MenuLinks mobile={true} navlinks={navlinks}/>
            </ul>
        </nav>
    )
}

function MenuLinks({navlinks, mobile}){
    return navlinks.map(link => (
        <li key={link.label} className={mobile ? 'first:border-t first:pt-2 block lg:hidden mt-2 border-b border-gray-200 pb-2' : 'hidden lg:block mx-4'}>
            <a className={`${mobile ? 'text-sm' : 'text-md'} tracking-widest font-semibold uppercase`} href={link.href}>{link.label}</a>
        </li>
    ))
}