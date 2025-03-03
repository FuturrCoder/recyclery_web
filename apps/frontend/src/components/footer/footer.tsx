import { Bike } from "lucide-react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon } from "../icons/icons";

export default function Footer() {
  return (
    <div className="p-8 flex flex-col gap-4 bg-darkblue-800 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className='flex justify-start items-center gap-2'>
          <Bike className='size-10'/>
          <b className='text-[28px] text-nowrap'>the recyclery</b>
        </div>
        <div className="space-x-4">
          <button className='bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Donate</button>
          <button className='bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Join Our Newsletter</button>
        </div>
      </div>
      <div className='border-[1px] border-white/10'/>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <b>Let's stay in touch!</b>
          <p>Have a question? Please feel free to visit us in-person or contact us via phone or email.</p>
        </div>
        <div>
          <p><b>Phone:</b> 773-262-5900</p>
          <p><b>Email:</b> info@therecyclery.org</p>
          <p><b>Address:</b> 7628 N Paulina St. 60626 Chicago, IL</p>
        </div>
      </div>
      <div className='border-[1px] border-white/10'/>
      <div className="flex justify-between items-center">
        <p>© Copyright 2025 <Link to="/" className="hover:underline">The Recyclery Collective</Link>. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="https://www.facebook.com/TheRecyclery" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="size-8" />
          </Link>
          <Link to="https://instagram.com/therecyclery/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="size-8" />
          </Link>
        </div>
      </div>
    </div>
  )
}
