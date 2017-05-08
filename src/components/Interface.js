import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Interface extends React.Component {
    render() {
        return (
            <div>
                <ul className="interface__ul">
                    <NavLink to={'/action'}><li className="interface__btn"><span>Action</span></li></NavLink>
                    <NavLink to={'/comedy'}><li className="interface__btn" ><span>Comedy</span></li></NavLink>
                    <NavLink to={'/adventure'}><li className="interface__btn"><span>Adventure</span></li></NavLink>
                </ul>
            </div>
        )
    }
}

export default Interface;