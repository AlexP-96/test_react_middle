import React from 'react';
import './Loader.css';

const Skeleton = ({
    width,
    height,
    paddingTop
}) => {
    return (
        <div
            className='wrapper__skeleton'
            style={{
                paddingTop: `${paddingTop}px`,
                height: `${height}px`,
                width: `${width}px`,
            }}
        >
            <div
                className='skeleton'
            >
            </div>
        </div>
    );
};

export default Skeleton;