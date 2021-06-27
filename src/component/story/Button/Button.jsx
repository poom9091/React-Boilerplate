import React from 'react'
import './Button.css'


function Button(props) {
    const { variant = 'primary',bgcolor,color,boderrd, fontsize,children, ...rest} = props
    const mystyle = {
        backgroundColor: `${bgcolor}`,
        color: `${color}`,
        fontSize: `${fontsize}`,
        borderRadius: `${boderrd}`

    }
    return (
        <button 
            className={`button ${variant}`} 
            style={mystyle }
            {...rest} 
        >
            {children}
        </button>
    )
}

export default Button
