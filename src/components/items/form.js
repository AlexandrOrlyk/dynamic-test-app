import React from 'react'
import Items from '../blog'

const Form = () => {
    return (
        <Items
                        blockName='Items'
                        nameInput='name'
                        onSubmit={this.handleSubmit}
                        onChange={this.onHandleChange}
                        buttonPresent
                        /> 
    )
}

export default Form