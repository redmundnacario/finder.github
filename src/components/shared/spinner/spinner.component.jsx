import React, {Fragment} from 'react';

import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img 
                src={spinner} 
                alt="loading"
                style={{
                    width : '100px', 
                    margin : 'auto',
                    display: 'block',
                    position: 'absolute',
                    top: '40vh',
                    left: 'calc(50% - 50px)'}}
            />
        </Fragment>
    )
}

export default Spinner
