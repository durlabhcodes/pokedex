import React from "react";
import './Pokesearch.css';

export default class Pokesearch extends React.Component {
    render() {
        return (
            <div className="pokesearch">
                <div className="pokesearch__input">
                    <input type="text" name="" id="" />
                </div>
                <div className="pokesearch__btn">
                    <button>Search</button>
                </div>
            </div>
        );
    }
}