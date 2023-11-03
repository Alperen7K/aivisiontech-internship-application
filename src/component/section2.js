import React from 'react'
import bebek from '../assets/baby.jpeg'
import bebek2 from '../assets/baby2.jpg'
import { Button } from 'antd'
import { ZoomInOutlined } from '@ant-design/icons'

export const Section2 = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-[280px] h-[380px] bg-[#0036a1] rounded-tl-[60px] rounded-br-[60px] rounded-bl-[15px] rounded-tr-[15px]">
        <div className="flex flex-col p-2 items-center justify-around w-full text-white">
          <div className="flex ">
            <img src={bebek} className="h-[100px] p-1 rounded" />
            <img src={bebek2} className="h-[100px] p-1 rounded" />
          </div>
          <div className="w-full px-8">
            <label className="text-[15px] text-left">AI2NEO</label>
          </div>
          <label className="text-[20px]">BEBEKLERİN MUHAFIZI</label>
          <div className="flex justify-end w-full px-7">
            {/* <button className="bg-white text-[#0036a1] rounded font-bold p-1">İncele</button> */}
            <Button className="text-white" icon={<ZoomInOutlined />} />
          </div>
        </div>
      </div>
    </div>
  )
}
