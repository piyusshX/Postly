import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'
import parse from "html-react-parser";

function PostCard({$id, title, featuredImage, content}) {
  console.log(featuredImage)
  console.log(parse(content))
  let cont = parse(content)
  cont = String(cont)
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-[#F1F1F2] duration-200 rounded-2xl p-3 hover:scale-[1.03] hover:drop-shadow-xl '>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard