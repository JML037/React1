import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./componentes/Paginas.js";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
    <div className="App">
        <Router>
        <Header />
        <Paginas />
        </Router>

      
    </div>
    </DataProvider>
  );
}

export default App;