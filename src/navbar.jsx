import React from 'react';
import { Link } from 'react-router-dom';

const homeurl=process.env.PUBLIC_URL;
export const Navbar = () => {
    return (
        <header className="bg-slate-800 text-slate-100 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="text-slate-100 ml-3 text-xl">Portfolio</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={homeurl+"/"} className="mr-5 hover:text-gray-900">Top</Link>
                    <Link to={homeurl+"/work"} className="mr-5 hover:text-gray-900">Work</Link>
                    <Link to={homeurl+"/hobby"} className="mr-5 hover:text-gray-900">Hobby</Link>
                </nav>
            </div>
        </header>
    );
}

