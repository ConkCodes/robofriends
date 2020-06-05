import React from "react";
import "./CardList.css"
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div className="cardListContainer">
            {
            robots.map((user) => {
                return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
            })
            }
        </div>
    );
}

export default CardList;