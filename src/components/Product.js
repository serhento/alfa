import React from 'react';

const Product =({likedItems, removeItem, title, poster, id})=>{

    const clickLike =(e)=>{
        if (e.target.classList.contains('liked')) {
            e.target.classList.remove('liked');
        }else{
            e.target.classList.add('liked');
        }
        likedItems(e.target.parentElement.id);
    };

    return(
        <div className="item" key={id}>
            <p className="item-title" >{title}</p>
            <img className="item-img" src={poster} alt="Poster"/>
            <div className="item-svg">
                <div className="item-svg-like">
                    <svg onClick={clickLike} id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
                    </svg>
                </div>
                <div className="item-svg-remove">
                    <svg onClick={()=>removeItem(id)} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
                    </svg>
                </div>
            </div>
        </div>)

};

export default Product;
