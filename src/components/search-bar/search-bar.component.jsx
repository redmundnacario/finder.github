import React, { Component } from 'react'

import {InputGroup,
        FormControl, 
        Button} from 'react-bootstrap'

import './search.styles.scss'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            searchString : null
        }
    }

    setSearchString = (e) => {
        
        this.setState({ searchString: e.target.value})        
    }

    render() {
    
        const {handleClickSearch} = this.props
        return (
            <div className="search-bar-container container">
                <form className="search-bar" onSubmit={ (e) => handleClickSearch(e, this.state.searchString)}>
                    <InputGroup>
                        <FormControl 
                            id="search-form"
                            type="text" 
                            placeholder={this.state.searchString ? null: "Search"}
                            onChange ={(e) => this.setSearchString(e)}
                        >
                        </FormControl>
                        <InputGroup.Append>
                            <Button variant="primary" type="submit" onClick={null}>Go!</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </div>
        )
    }
}

export default SearchBar

