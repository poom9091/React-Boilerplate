import React from 'react'
import './Buttontest.css'
function Buttontest({label}) {
    return (
        <div data-testid="button" className="button-style">
            {label}
        </div>
    )
}

export default Buttontest
