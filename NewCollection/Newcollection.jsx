import React from "react";
import './Newcollection.css';
import New_Collection from "../Assets/Frontend_Assets/new_collections";
import Item from "../Item/Item";

function NewCollection() {
    return (
        <div className="newcollection">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="Collection">
               {New_Collection.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image = {item.image} new_price={item.new_price} old_price = {item.old_price}/>
               })}
            </div>
        </div>
    );
}

export default NewCollection;
