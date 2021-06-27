import React from 'react'
import './Button.css'


function Button(props) {
    const { variant = 'primary',padding,bgcolor,width,height,color,boderrd, fontsize,children, ...rest} = props
    const mystyle = {
        backgroundColor: `${bgcolor}`,
        color: `${color}`,
        fontSize: `${fontsize}`,
        borderRadius: `${boderrd}`,
        width: `${width}` ,
        hight: `${height}`,
        padding: `${padding}`
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
