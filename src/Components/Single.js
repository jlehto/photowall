//'React' must be in scope when using JSX 
import React from 'react'
import Photo from './Photo'

const Single = (props) => {

    const id = props.params.match.params.id
    const photo = props.posts.find(post => post.id.toString() === id)

    return (
        <div className='single-photo'>
            <Photo post={photo}/>
        </div>
    )
}

export default Single