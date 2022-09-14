function GreatOperationButton(props) {

    const operations = ['+', '-', '*', '/', 'C'];
    let operationList = '';

    const handleClick = () => {
        props.handleClickParent(operationList)
    }

    return (
        <div className='operation'>
            {
                operations.map((operation, i) =>
                    <button className='operation-btn' key={i} value={operation} onClick={() => {
                        operationList = operationList + operation
                        handleClick()
                    }}>
                        {operation}
                    </button>
                )
            }
        </div>
    )
}

export default GreatOperationButton;