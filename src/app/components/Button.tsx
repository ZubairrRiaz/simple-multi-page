import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';


type link = {
    NextLink: string,
    BackLink:string
}
const Button = (props:link) => {
  return (
    <div className='flex justify-center gap-10 font-extrabold p-6 text-2xl bg-pink-200'>
       <Link href={props.BackLink}><FaArrowLeft /></Link>
       PAGE
       <Link href={props.NextLink}><FaArrowRight /></Link>
    </div>
  )
}

export default Button