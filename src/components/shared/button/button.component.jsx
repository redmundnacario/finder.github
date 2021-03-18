import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = ({className, variant, type, size, onClick, text }) => {
    return (
        <Button
            className={className}
            variant={variant}
            type={type}
            size={size}
            onClick={(e) => onClick(e)}
            >
            {text}
        </Button>
    )
}

export default ButtonComponent
