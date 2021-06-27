import React from 'react'
import Personinput from './PersonInput/PersonInput'
import Personlist from './PersonList/PersonList'
import './RestAPI.css'
function RestAPI() {
    return (
        <div class="border">
            <h1 class="header">Test RestAPI</h1>
            <div class="space-x input-text">
                <Personinput />
            </div>
            <div class="space-x list-name">
                <Personlist />
            </div>
        </div>
    )
}

export default RestAPI
