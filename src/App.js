import "./App.css";
import 'tailwindcss/tailwind.css'
import Boilerplate from "./component/Boilerplate_SSR/Boilerplate";
import Testgraphql from './component/Graphql/Testgraphql' ;
import Personinput from './component/PersonInput/PersonInput';
import Personlist  from './component/RestAPI/PersonList/PersonList';
import Title from './component/Title/title';
import ListLayout from './component/ListLayout/LiatLayout';
import Buttontest from './component/Buttontest/Buttontest';
import React from "react";

var ep = Math.floor(Math.random() * 5)+1;

function App() {
  return (
     <Boilerplate>
        <Title 
          title='React' 
          TitleColor='text-white' 
          TitleSize='text-9xl' 
        />
        <Buttontest  label="click me plase"/>
        <ListLayout side="w-2/3">
          <h2>Test RestAPI</h2>
          <Personinput />
          <Personlist />
        </ListLayout> 
        <ListLayout side="w-1/3">
            <h2>Test GraphQl</h2>
            <div className="text-center f">
              <h1 className="text-center"> Rick and Morty </h1>
              <h1 className="text-center">-- Episodes : {ep.toString()} --</h1>
            </div>
            <Testgraphql ep={ep}/>
        </ListLayout>
      </Boilerplate> 
  );
}

export default App;
