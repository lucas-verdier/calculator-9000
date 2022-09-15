import {useEffect, useState } from "react";

const SavedOperationsContainer = () => {

    const [saved, setSaved] = useState([])

    useEffect( () => {
        const fetchOperation = async () => {
            const getResult = await fetch('http://localhost/calculator-9000/calculator9000/src/savedOperations.php');
            const data = await getResult.json()

            setSaved(data)
        };

        fetchOperation();

        }, []
    )

    return (
        <div className='saves-container'>
            <ul>
                {
                    saved.map((save, i) =>
                        <li  key={i} className='saves-container-li'>{save.operations + ' = ' + save.results}</li>
                    )

                }
            </ul>
        </div>
    )
}

export default SavedOperationsContainer;