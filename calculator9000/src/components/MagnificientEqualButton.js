function MagnificientEqualButton(props) {

    let result = '';

    const handleResult = () => {
        props.handleClickParent(result)
    }

    return (
        <div className='equal'>
            <button className='equal-btn' onClick={() => {
                result = eval(props.operationValue)
                handleResult()
            }
            }>=</button>
        </div>
    )
}

export default MagnificientEqualButton;