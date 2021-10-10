import React from "react";

const Filter =({showLikedItems})=>{
    return(
        <div id="filter-block">
            <button onClick={showLikedItems} id="filter">Фильтр</button>
        </div>
    )
};

export default Filter;
