import React from 'react'
import warning from "../../img/warning.png"


const ValidationError = () => {
    return (
        <div className="validation-err">
            <img src={warning}
                alt='warning.png' className="warning-icon" />
            <div>Please, fill in form field</div>
        </div>
    )
}

export default ValidationError