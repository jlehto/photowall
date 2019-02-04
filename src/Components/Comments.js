import React from 'react';

const Comments = () => {
    return (
        <div className="comment">
            <form className="comment-form">
                <input type="text" placeholder="Comment" name="comment"/>
                <input type="submit" name="submit" hidden/>
            </form>
        </div>
    )
}

export default Comments