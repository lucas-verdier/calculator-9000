import React from 'react';

const ItSOverNineThousand = (props) => {

    if (props.overValue === true) {
        return (
            <div className='nine-thousand'>
                <p>It's over 9000 !!!</p>
            </div>
        )
    }
}

export default ItSOverNineThousand;