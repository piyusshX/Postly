import React from 'react'
import { Container, PostForm } from '../components/index'
import conf from '../conf/conf'

function AddPost() {

  return (
    <div className='pt-32 pb-20'>
        
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost