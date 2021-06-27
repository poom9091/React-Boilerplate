import React from 'react'
import RestAPI from './RestAPI'
export default {
    title: 'RestAPI/testAPI',
    component: RestAPI
}

export const Small = () => <RestAPI/>

Small.storyName = 'Smaill input'