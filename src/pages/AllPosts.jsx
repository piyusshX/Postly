import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { PostCard, Container } from '../components/index'


function AllPosts() {

    const [posts, setPost] = useState([])
    useEffect(() => {}, [])
    service.getPosts([]).then((posts) => {
        if (posts) {
            console.log(posts.documents)
            setPost(posts.documents)
        }
    })


  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div className='p-2 w-1/4' key={post.$id}>
                        {/* Below we have write post={post} beacuse <PostCard/> recives an object 
                            as parameter and since we have destructure it in the PostCard component
                            we can send the object with any name we want*/}
                        <PostCard post={post} /> 
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts