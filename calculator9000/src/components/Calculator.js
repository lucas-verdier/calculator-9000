import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import SavedOperation from "./SavedOperation";
import {useEffect, useState} from "react";
import SavedOperationsContainer from "./SavedOperationsContainer";

export default function Calculator() {

    let [screen, setScreen] = useState('');
    let [over, setOver] = useState(false);

    const handleClick = (nbr) => {
        setScreen(screen + nbr)
        setOver(false)
        if (nbr === 'C') {
            setScreen('')
            setOver(false)
        }
    };

    const handleResult = (result) => {

        if (result > 9000) {
            setScreen(result)
            setOver(true)
        } else {
            setScreen(result)
        }
    };



    useEffect(() => {
        const sendDataToBack = async () => {

            const sendValue = await fetch('http://localhost/calculator-9000/calculator9000/src/sendDataToBack.php', {
                method: 'POST',
                body: screen
            })
        }
    }, [handleClick])

    return (
        <div className='full-screen'>
            <ItSOverNineThousand overValue={over}/>
            <BeautifulScreen screenValue={screen}/>
            <AmazingNumberButton handleClickParent={handleClick} />
            <GreatOperationButton handleClickParent={handleClick} />
            <MagnificientEqualButton operationValue={screen} handleClickParent={handleResult}/>
            <SavedOperation dataToSend={}/>
            <SavedOperationsContainer />
        </div>
    )
}