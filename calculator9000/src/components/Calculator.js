import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import SavedOperation from "./SavedOperation";
import {useEffect, useState} from "react";
import SavedOperationsContainer from "./SavedOperationsContainer";

export default function Calculator() {

    let [screen, setScreen] = useState("")
    let [result, setResult] = useState("")

    let [over, setOver] = useState(false);

    const handleClick = (nbr) => {
        setScreen(screen + nbr)
        setOver(false)

        if (nbr === 'C') {
            setScreen("")
            setResult("")
            setOver(false)
        }
    };

    const handleResult = (res) => {
        if (res > 9000) {
            setResult(res)
            setOver(true)
        } else {
            setResult(res)
        }
    };

    const [saved, setSaved] = useState([])

    const handleClickSave = (data) => {
        setSaved([data]);
    }

    return (
        <div className='full-screen'>
            <ItSOverNineThousand overValue={over}/>
            <BeautifulScreen screenValue={screen} result={result} />
            <AmazingNumberButton handleClickParent={handleClick} />
            <GreatOperationButton handleClickParent={handleClick} />
            <MagnificientEqualButton operationValue={screen} handleClickParent={handleResult} />
            <SavedOperation sendOperationToBack={screen} sendResultToBack={result} handleClickParent={handleClickSave}/>
            <SavedOperationsContainer values={saved}/>
        </div>
    )
}
