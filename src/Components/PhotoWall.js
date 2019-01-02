import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

const PhotoWall = (props) => 
            <>
                <button className='addIcon'  onClick={props.onClickAddButton}></button>
                <div className='photo-grid'>
                    { props.posts.map((post,idx) => 
                        <Photo key={idx} post={post} onRemovePost={props.onRemovePost}/>)
                    }
                </div>  
            </>  
        

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePost: PropTypes.func.isRequired
};

export default PhotoWall