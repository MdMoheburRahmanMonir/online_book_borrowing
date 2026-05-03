import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const loading = () => {
    return (
        <div className='flex items-center text-center justify-center py-60'>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            ></RotatingLines>
        </div>
    );
};

export default loading;     