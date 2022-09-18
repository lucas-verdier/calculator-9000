import React from 'react';
import { FiSave } from 'react-icons/fi';

function SavedOperation(props) {

    const sendDataToBack = async () => {

        const params = {
            operation: props.sendOperationToBack,
            result: props.sendResultToBack
        }

        await fetch('http://localhost/calculator-9000/calculator9000/src/sendDataToBack.php', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({params})
        })
    }

    const handleCLick = () => {
        const fetchOperation = async () => {
            const getResult = await fetch('http://localhost/calculator-9000/calculator9000/src/savedOperations.php');
            const data = await getResult.json()

            props.handleClickParent(data)

        };

        fetchOperation();
    }


    return (
        <div className='save'>
            <button className='save-btn' onClick={() => {
                sendDataToBack()
                handleCLick()
            }}><FiSave/></button>
        </div>
    );
}

export default SavedOperation;