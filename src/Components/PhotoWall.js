import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const PhotoWall = (props) => 
            <>
               <Link className='addIcon' to='/AddPhoto'/>
              
                <div className='photo-grid'>
                    {props.posts
                        .sort((x,y) => y.id - x.id) //highest first
                        .map(post => 
                            <Photo key={post.id} post={post}
                             onRemovePost={props.onRemovePost}/>)
                        }
                </div>  
            </>  
        

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePost: PropTypes.func.isRequired
};

export default PhotoWall