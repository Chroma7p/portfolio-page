import React from 'react';

export const Navbar = () => {
    return (
        <header className="bg-slate-800 text-slate-100 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="text-slate-100 ml-3 text-xl">Portfolio</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/portfolio-page/" className="mr-5 hover:text-gray-900">Top</a>
                    <a href="/portfolio-page/work" className="mr-5 hover:text-gray-900">Work</a>
                    <a href="/portfolio-page/hobby" className="mr-5 hover:text-gray-900">Hobby</a>

                </nav>
            </div>
        </header>
    );
}

