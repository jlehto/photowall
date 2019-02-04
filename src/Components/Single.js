//'React' must be in scope when using JSX 
import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = (props) => {

    const id = props.params.match.params.id
    const photo = props.posts.find(post => post.id.toString() === id)

    return (
        <div className='single-photo'>
            <Photo post={photo}/>
            <Comments/>
        </div>
    )
}

export default Single