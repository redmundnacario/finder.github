import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {InputGroup,
        FormControl, 
        Button} from 'react-bootstrap'

import './search.styles.scss'

const SearchBar = ({handleClickSearch, resetSearch }) => {
  
    const [searchString, setSearchString] = useState(undefined)

    useEffect(() => {
        if (!resetSearch) {
            setSearchString(undefined)
        }
    },[resetSearch])

    return (
        <div className="search-bar-container container mt-5">
            <form className="search-bar" onSubmit={ (e) => handleClickSearch(e, searchString)}>
                <InputGroup>
                    <FormControl 
                        id="search-form"
                        type="text" 
                        placeholder="Search"
                        value ={searchString ? searchString: ""}
                        onChange ={(e) => setSearchString(e.target.value)}
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
    )

}

SearchBar.propTypes = {
    handleClickSearch : PropTypes.func.isRequired,
    resetSearch : PropTypes.bool.isRequired
}

export default SearchBar

