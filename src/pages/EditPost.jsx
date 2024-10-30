import React, {useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostForm } from '../components/index'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {

    const [post, setPost] = useState(null)
    const {slug} = useParams()
    console.log(slug)
    const url = String(slug)
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost({slug}).then((post) => {
                if (post) {
                    setPost(post)
                    console.log(post)
                }
            })
        } else {
            navigate('/')
        }
    })


    return post ? (
        <div className='py-8'>
            <Container>
                {/* <PostForm post={post} slug={url} /> */}
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null

}

export default EditPost