import React from 'react'
import Testgraphql from "../Graphql/Testgraphql";
import Buttontest from "../Buttontest/Buttontest";
import RestAPI from "../RestAPI/RestAPI";
import './Boilerplate.css'
function Boilerplate() {
    return (
        <div class="example">
            <h1 class="header-1">Boilderplate React</h1>
            <div class="centent-plate">
                <div class='flex-inline text-jest'>
                    <h1>Test Jest</h1>
                    <Buttontest class="size-button" label="click me plase"></Buttontest>
                </div>
                <div class='flex-inline'>
                    <RestAPI />
                    <Testgraphql />
                </div>
            </div>
        </div>
    )
}

export default Boilerplate