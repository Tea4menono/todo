import React from 'react';

export const Header: React.FC = () => {
    return (
        <div className="flex p-10 text-xl font-medium text-slate-800 items-center">
            <img className="h-6 mr-auto" src="/images/todo-list-high-resolution-logo-transparent.png"
                 alt="logo"/>

            <button className="transition-colors duration-500 hover:bg-indigo-50 p-2 rounded-lg">
                Features
            </button>
            <button className="transition-colors duration-500 hover:bg-indigo-50 p-2 rounded-lg">
                Pricing
            </button>

            <button className="transition-colors duration-800 hover:bg-indigo-50 p-2 rounded-lg">
                Log in
            </button>

            <button className="transition-colors duration-800 hover:bg-indigo-50 p-2 rounded-lg">
                Register
            </button>

        </div>
    );
};

