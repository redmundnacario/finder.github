import React, {Fragment} from 'react'

import SearchBar from '../search-bar/search-bar.component';
import UserList from '../users/users-list.component';

const Home = () => {
    return (
        <Fragment>
            <SearchBar />
            <UserList/>
        </Fragment>
    )
}

export default Home
