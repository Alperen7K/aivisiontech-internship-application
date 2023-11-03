/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, October 2023
 */
import React from 'react'
import logo from '../assets/logo.svg'
import { InstagramOutlined, TwitterOutlined, LinkedinOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div className="h-[10vh] w-[100vw] mt-[1vh] flex  justify-center items-center">
      <div className="h-[10vh] w-[80vw] flex justify-between items-center">
        <a href="https://kapsulteknoloji.org/" target="_blank">
          <img src={logo} alt="Logo" className="h-full"></img>
        </a>
        <div>
          <a href="https://www.instagram.com/kapsulteknoloji/" target="_blank" className="mx-1">
            <InstagramOutlined className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/company/kapsul-teknoloji-platformu/" target="_blank" className="mx-1">
            <LinkedinOutlined className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://twitter.com/kapsulkonya" target="_blank" className="mx-1">
            <TwitterOutlined className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://www.facebook.com/KapsulTeknoloji" target="_blank" className="mx-1">
            <FacebookOutlined className="text-white text-2xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  )
}
