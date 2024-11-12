import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components/index'

function Home() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap min-h-[60vh] justify-center items-center">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-black hover:text-gray-500">
                                Signup/Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } 
    console.log(posts)
    return (
        <div className='w-full py-28'>
            <Container>
                <div className='flex flex-wrap min-h-[60vh]'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/3'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home

