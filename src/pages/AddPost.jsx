import React from 'react'
import { Container, PostForm } from '../components/index'
import conf from '../conf/conf'

function AddPost() {

  return (
    <div className='py-8'>
        
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost