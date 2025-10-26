import React from 'react'
import { assets } from "../assets/assets"
import { useAppContext } from '../context/AppContext';

const NavBar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-40">

      <img src={assets.logo} alt="log" onClick={() => navigate("/")} className='w-32 sm:w-44 cursor-pointer' />

      <button onClick={() => navigate("/admin")} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5">
       {token?"Dahboard":"Login"}
        <img src={assets.arrow} alt="arrow" className='w-3' />

      </button>

    </div>
  )
}

export default NavBar