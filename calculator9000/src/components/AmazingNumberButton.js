import {useState} from "react";

const AmazingNumberButton = (props) => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,',', 0];
    let numbersList = "";

    const handleClick = () => {
        props.handleClickParent(numbersList);
    };

    return (
        <div className='number'>
            {
                numbers.map((nbr, index) =>
                    <button className='number-btn' key={index} onClick={() => {
                        numbersList = numbersList + nbr
                        handleClick()
                    }}>{nbr}</button>
                )
            }
        </div>
    )
}

export default AmazingNumberButton;
