import React from 'react';
import './Loader.css';

const Skeleton = ({
    width,
    height,
}) => {
    return (
        <div
            className='wrapper__skeleton'
            style={{
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