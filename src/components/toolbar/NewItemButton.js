import React from 'react'
import Button from '../common/Button'

export default function NewItemButton({ newShpaeProps = {}, ...others }) {
    const onMouseDown = () => {}

    return (
        <Button {...others} onMouseDown={onMouseDown} />
    )
}