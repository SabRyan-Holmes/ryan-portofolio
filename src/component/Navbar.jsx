import React from 'react'

const Navbar = () => {
    const afterClick = () => {
        const hamburger = document.querySelector('#hamburger');
        const navMenu = document.querySelector('#nav-menu');
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    }

    // Dark Mode Toggle
    const darkToggle = () => {

        const darkToggle = document.querySelector('#dark-toggle');
        const html = document.querySelector('html');

        if (darkToggle.checked) {
            html.classList.add('dark')
            localStorage.theme = 'dark'
        }
        else {
            html.classList.remove('dark');
            localStorage.theme = 'light'
        }
    }

    //System Preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
        '(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }


    //Pindahkan posisis toggle sesuai mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
        '(prefers-color-scheme: dark)').matches)) {
        darkToggle.onClick = true;
    } else {
        darkToggle.onClick = false;
    }

    window.addEventListener('click', function (e) {
        if (e.target != hamburger && e.target != navMenu) {
            hamburger.classList.remove('hamburger-active');
            navMenu.classList.add('hidden');
        }
    })

    const fixedNav = () => {

        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;
        const toTop = document.querySelector('#to-top');
        if (window.scrollY > fixedNav) {
            header.classList.add('navbar-fixed');
            toTop.classList.remove('hidden');
            toTop.classList.add('flex');
        } else {
            header.classList.remove('navbar-fixed');
            toTop.classList.add('hidden');
            toTop.classList.remove('flex');
        }
    }

    return (
        <navbar id='nav-menu' className='navbar hidden absolute right-4 top-full laptop:w-full' >
            <ul className='block laptop:flex tablet:justify-center laptop:justify-end  '>
                <li className='group'>
                    <a href='#home' className='navbar-list'>Home</a>
                </li>
                <li className='group'>
                    <a href="#about" className='navbar-list '>About</a>
                </li>

                <li className='group'>
                    <a href="#blog" className='navbar-list'>Blog</a>
                </li>
                <li className='group'>
                    <a href="#contact" className='navbar-list'>Contact</a>
                </li>
                <li className='flex items-center laptop:justify-start   ' >
                    <div className="flex" onClick={darkToggle}>
                        <span className="mr-2 text-sm text-secondary dark:text-violet-400">Light</span>
                        <input type="checkbox" className="hidden " id="dark-toggle" />
                        <label htmlFor="dark-toggle">
                            <div className="flex h-5 w-9 items-center rounded-full bg-slate-500 p-1">
                                <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                            </div>
                        </label>
                        <span className="ml-2 text-sm text-primary">Dark</span>
                    </div>
                </li>
            </ul>
        </navbar>

    )
}

export default Navbar