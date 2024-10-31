import React from 'react'
import Image from 'next/image'

type defineType = {
    src:string,
    alt:string,
    name:string,
    text:string
}

const Pages = (props:defineType) => {
  return (
<div className="bg-pink-200 h-[600px] flex flex-col justify-evenly items-center sm:h-[500px] sm:flex-row">
      <div>
        <Image
          className="rounded-lg"
          height={500}
          width={300}
          alt={props.name}
          src={
            props.src
          }
        />
        <h1 className="text-center text-2xl">{props.name}</h1>
      </div>

      <div className="sm:w-[30%] w-[90%] text-center font-bold text-xl">
        {props.text}
      </div>
    </div>  )
}

export default Pages