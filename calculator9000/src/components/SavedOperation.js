import React from 'react';
import { FiSave } from 'react-icons/fi';
import axios from "axios";
import {stringify} from "qs";
import qs from 'qs'

function SavedOperation(props) {

    const sendDataToBack = async () => {

        const params = {
            operation: props.sendOperationToBack,
            result: props.sendResultToBack
        }
        console.log(params)

        await fetch('http://localhost/calculator-9000/calculator9000/src/sendDataToBack.php', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({params})
        })
        // const qs = require('qs');
        // await axios.post('http://localhost/calculator-9000/calculator9000/src/sendDataToBack.php', JSON.stringify({
        //         data: props.sendOperationToBack,
        //         results: props.sendResultToBack
        //     })
        // )


        // axios.post('http://localhost/calculator-9000/calculator9000/src/sendDataToBack.php', {
        //     data: JSON.stringify(params)
        // })
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }
    // .then(response => {
    //     const {data} = response;
    //     console.log(response)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    // const options = {
    //     method: 'post',
    //     url: 'http://localhost/calculator-9000/calculator9000/src/sendDataToBack.php',
    //     data: {
    //         operation: props.sendOperationToBack,
    //         result: props.sendResultToBack
    //     },
    //     transformResponse: [(data) => {
    //         stringify(data)
    //
    //         return data
    //     }]
    // }

    // axios(options)

    return (
        <div className='save'>
            <button className='save-btn' onClick={sendDataToBack}><FiSave/></button>
        </div>
    );
}

export default SavedOperation;