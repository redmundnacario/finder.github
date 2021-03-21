import React from 'react'

import ButtonComponent from '../shared/button/button.component';

import './clear-results.styles.scss';

const ClearResults = ({searchStr, handleClick}) => {
    return (
        <div className="clear-results-div container mt-5">
            <h3>{searchStr ? `Showing results for "${searchStr}"`: "Default search"}</h3>
            <ButtonComponent
                text={"Clear Results"}
                className={"button-clear"}
                variant={"outline-danger"}
                type={"button"}
                size={"sm"}
                onClick={handleClick}
            />
        </div>
    )
}

export default ClearResults
