import React from 'react'
import './App.scss';
import {Skills} from "./main/skills/Skills";
import {Projects} from "./main/projects/Projects";
import {Distant} from "./main/distant/Distant";
import {Contacts} from "./main/contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Main} from "./main/mainBlock/Main";
import {Header} from "./header/Header";

export  const App = () => {
  return (
    <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Distant/>
            <Contacts/>
            <Footer/>
    </div>
  );
}


