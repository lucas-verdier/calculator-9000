import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import {useState} from "react";

export default function Calculator() {

    let [screen, setScreen] = useState('')
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

    return (
        <div className='full-screen'>
            <BeautifulScreen screenValue={screen}/>
            <AmazingNumberButton handleClickParent={handleClick} />
            <GreatOperationButton handleClickParent={handleClick} />
            <MagnificientEqualButton operationValue={screen} handleClickParent={handleResult}/>
            <ItSOverNineThousand overValue={over}/>
        </div>
    )
}