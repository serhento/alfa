import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';

import './App.css';
import {setProducts, removeProduct, selectedProducts} from "./redux/actions/productActions";
import Product from './components/Product'
import Filter from "./components/Filter";

function App() {

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const [isLiked, setIsliked] = useState(false);

  const fetchProducts = async() =>{
    const response = await axios
        .get('https://floating-sierra-20135.herokuapp.com/api/movies')
        .catch((err) => {
          console.log('Err', err);
        });
    dispatch(setProducts(response.data.data));
  };

  useEffect(()=>{
    fetchProducts();
  },[]);

  const removeItem =(id)=>{
    dispatch(removeProduct(id));
  };

  const likedItems =(id)=>{
      if (state.length === 0){
          setState([...state, id]);
      } else{
          if(state.some(item => item === id) === false){
              setState([...state, id]);
          }else{
              let arr = state.filter((prod)=> prod !== id);
              setState(arr);
          }
      }
  };

  const showLikedItems =(e)=>{
      if(state.length === 0){
          return true;
      }else{
          if(isLiked === false){
              e.target.classList.add('filter-color');
              dispatch(selectedProducts(state));
              setIsliked(true);
          }else{
              setState([]);
              dispatch(selectedProducts([]));
              e.target.classList.remove('filter-color');
              fetchProducts();
              setIsliked(false);
          }
      }

  };

  return (
    <div className="App">
      <Filter showLikedItems={showLikedItems}/>

      <div className="wrapper">
        {products.map(product => <Product likedItems={likedItems} removeItem={removeItem} title={product.title} poster={product.poster} id={product.id}/>)}
      </div>

    </div>
  );
}

export default App;
