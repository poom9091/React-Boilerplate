import React from 'react'
import Personinput from './PersonInput/PersonInput'
import Personlist from './PersonList/PersonList'
import './RestAPI.css'
function RestAPI() {
    return (
        <div className="">
            <h1 className=" ">Test RestAPI</h1>
            <Personinput  />
            <Personlist/>
        </div>
    )
}

export default RestAPI
