import React from 'react'
import mandoLogo from "../../images/mandoLogo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@mui/icons-material/Search';
import Dataa from "../../Dataa.json";
import CloseIcon from '@mui/icons-material/Close';






export const Header = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = Dataa.filter((value) => {
            return value.Componente.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord == "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");

    }

    return (
        <header>

            <Link to="/">
                <div className="logo">
                    <img src={mandoLogo} alt="logo" width="150" />

                </div>
            </Link>
            <ul>
                <li>
                    <Link to='/'>INICIO</Link>
                </li>
                <li>
                    <Link to='/productos'>PRODUCTOS</Link>
                </li>
                <li>
                    <Link to='/rating'>Puntuanos</Link>
                </li>
                <li>
                    <Link to='/historial'>Historial</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
            <div className='search'>
                <div className='searchInputs'>
                    <input type="text" placeholder='Ingrese el texto' value={wordEntered} onChange={handleFilter} />
                    <div className='searchIcon'>
                        {filteredData.length == 0 ? (
                            <SearchIcon />) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}

                    </div>

                </div>
                {filteredData.length != 0 && (

                    <div className='dataResult'>
                        {filteredData.slice(0, 15).map((value, key) => {
                            return <p> {value.Componente} </p>
                        })}
                    </div>
                )}

            </div>
        </header>


    )
}