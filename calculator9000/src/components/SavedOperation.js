import React from 'react';
import { FiSave } from 'react-icons/fi';

function SavedOperation(props) {

    const sendData = () => {
        props.getOperationsFromBack();
    }
    return (
        <div className='save'><button className='save-btn' onClick={fetchResult}><FiSave /></button> </div>
    );
}

export default SavedOperation;