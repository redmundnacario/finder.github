import React, {useContext} from 'react'

import GithubContext from '../../context/github/githubContext.js'

import ButtonComponent from '../shared/button/button.component';

import './clear-results.styles.scss';

const ClearResults = ({usersLength, searchString, showResultName}) => {
    const githubContext = useContext(GithubContext)
    
    
     const handleClick =  (e) => {
        e.preventDefault()
        githubContext.clearUsers()
        setTimeout(()=> githubContext.getUsers(), 500)
    }

    return (
        <div className="clear-results-div mt-5">
            {
                // usersLength > 0 && (<h3>{showResultName && searchString ? `Results for "${searchString}"` : "Default Search"}</h3>)
            }
            {
                usersLength > 0 
                    ? <ButtonComponent
                        text={"Clear Results"}
                        className={"button-clear ml-auto"}
                        variant={"outline-danger"}
                        type={"button"}
                        size={"sm"}
                        onClick={handleClick}
                        />
                    : ""
            }
        </div>
    )
}

export default ClearResults
