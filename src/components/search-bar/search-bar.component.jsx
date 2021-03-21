import React, { useState, useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
import {InputGroup,
        FormControl, 
        Button} from 'react-bootstrap'

import GithubContext from '../../context/github/githubContext'

import ClearResults from '../clear-results/clear-results.component'


import './search.styles.scss'

const SearchBar = () => {

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
        githubContext.getUsers(searchString)
        setShowResultName(true)
    }

    const handleChange = (e) => {
        setShowResultName(false)
        setSearchString(e.target.value)
    }


    return (
        <div>
            <div className="search-bar-container container mt-5">
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

