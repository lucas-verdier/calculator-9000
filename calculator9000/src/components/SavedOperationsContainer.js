import {useEffect, useState } from "react";

const SavedOperationsContainer = (props) => {

    // const [saved, setSaved] = useState([])
    //
    // useEffect( () => {
    //     const fetchOperation = async () => {
    //         const getResult = await fetch('http://localhost/calculator-9000/calculator9000/src/savedOperations.php');
    //         const data = await getResult.json()
    //
    //         setSaved(data)
    //
    //         console.log(data)
    //     };
    //
    //     fetchOperation();
    //
    //     }, []
    // )
    const data = props.values

    console.log(data[0])

    if (data[0]) {

        return (
            <div className='saves-container'>
                <ul>
                    {
                        data[0].map((save, i) =>
                            <li  key={i} className='saves-container-li'>{save.operations + ' = ' + save.results}</li>
                        )

                    }
                </ul>
            </div>
        )
    } else {
        return (
            <div className='saves-container'>
                <ul>
                    <li>Pas de sauvegarde</li>
                </ul>
            </div>
        )
    }
}

export default SavedOperationsContainer;