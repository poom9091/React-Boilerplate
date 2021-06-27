import React from 'react'
import './Buttontest.css'
function Buttontest({label}) {
    return (
        <button data-testid="button" className="button-style">
            {label}
        </button>
    )
}

export default Buttontest
