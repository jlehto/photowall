import React from 'react';
import Photo from './Photo';

const PhotoWall = (props) => 
   
            <div className='photo-grid'>
                { props.posts.map((post,idx) => 
                    <Photo key={idx} post={post} onRemovePost={props.onRemovePost}/>)
                }
            </div>    
        

export default PhotoWall