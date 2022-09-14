import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import {useState} from "react";

export default function Calculator() {

    let [screen, setScreen] = useState('')

    const handleClick = (nbr) => {
        setScreen(screen + nbr)

        if (nbr == 'C') {
            setScreen('')
        }
    };

    const handleResult = (result) => {
        setScreen(result)
    };

    return (
        <div className='full-screen'>
            <BeautifulScreen screenValue={screen}/>
            <AmazingNumberButton handleClickParent={handleClick} />
            <GreatOperationButton handleClickParent={handleClick} />
            <MagnificientEqualButton operationValue={screen} handleClickParent={handleResult}/>
        </div>
    )
}