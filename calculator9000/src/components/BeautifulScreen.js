import React from "react";

export default function BeautifulScreen(props) {

        return (
            <div className='Screen'>
                    <p>{props.screenValue}</p>
                    <p>{props.result}</p>
            </div>
        )
}



