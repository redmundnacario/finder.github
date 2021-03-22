import React, { useState, useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
import {InputGroup,
        FormControl, 
        Button} from 'react-bootstrap'


import AlertContext from '../../context/alert/alertContext'
import GithubContext from '../../context/github/githubContext'

import ClearResults from '../clear-results/clear-results.component'


import './search.styles.scss'

const SearchBar = () => {

    const alertContext = useContext(AlertContext)
    const githubContext = useContext(GithubContext)
  
    const [searchString, setSearchString] = useState(undefined)
    const [showResultName, setShowResultName] = useState(true)

    useEffect(() => {
        if ( githubContext.users.length <= 0) {
            setSearchString(undefined)
        }
        // eslint-disable-next-line
    },[githubContext.users])
    

    const handleClickSearch = (e) => {
        e.preventDefault()

        if (/^ *$/.test(searchString) || searchString === undefined){
            alertContext.setAlert({title: "Note", message: `Cannot search with an empty string.`})
            setSearchString(undefined)
        } else {
            githubContext.getUsers(searchString)
            setShowResultName(true)

        }
    }

    const handleChange = (e) => {
        setShowResultName(false)
        setSearchString(e.target.value)
    }


    return (
        <div className="container">
            <div className="search-bar-container mt-5">
                <form className="search-bar" onSubmit={ handleClickSearch}>
                    <InputGroup>
                        <FormControl 
                            id="search-form"
                            type="text" 
                            placeholder="Search"
                            value ={searchString ? searchString: ""}
                            onChange ={handleChange}
                            autoComplete="off"
                        >
                        </FormControl>
                        <InputGroup.Append>
                            <Button 
                                variant="primary" 
                                type="submit"
                                onClick={null}
                            ><i className="fas fa-search"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </div>
            <ClearResults 
                usersLength={githubContext.users.length}  
                searchString={searchString}
                showResultName = {showResultName}
            />
        </div>
    )
}

// SearchBar.propTypes = {
//     getUsers : PropTypes.func.isRequired
// }

export default SearchBar

