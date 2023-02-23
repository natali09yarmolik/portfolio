import React from 'react'
import './App.scss';
import Header from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./main/skills/Skills";
import {Projects} from "./main/projects/Projects";
import {Distant} from "./main/distant/Distant";
import {Contacts} from "./main/contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
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

export default App;
