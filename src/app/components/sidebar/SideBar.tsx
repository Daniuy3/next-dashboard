import Image from 'next/image'
import React from 'react'
import { SideBarMenuItem } from './SideBarMenuItem'
import { pages } from '../../(pages)/pages'


export const SideBar = () => {
  return (
    <div 
        id="menu" 
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
        style={{width: "400px"}}    
    >
           <div id="logo" className="my-4 px-6">
            
            <h1 className="text-lg md:text-2xl font-bold text-white">Your<span className="text-blue-500"> DashBoard</span>.</h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
           </div>
           <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image 
                        className="rounded-full w-8 h-8" 
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                        alt="User Avatar"
                        width={50}
                        height={50}
                    />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Daniel Trinidad
                </span>
                </a>
           </div>
           <div id="nav" className="w-full px-6">

            {
                pages.map((page, index) => (
                    <SideBarMenuItem key={index} {...page} />
                ))
            }
            
           </div>
        </div>
  )
}
