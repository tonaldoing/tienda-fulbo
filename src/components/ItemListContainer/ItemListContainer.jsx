import * as React from 'react';
import ItemList from './ItemList/ItemList';
import data from '../../utils/data'

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function ItemListContainer(props) {

  const {name} = useParams();
  
  const [products, setProducts] = useState([]);

  useEffect(

    () => {  

      let promise = new Promise ( (resolve, reject) => {
        setTimeout(
          () =>  {
            resolve(data)
          }, 2000);
      });

      promise
      .then(
        (res) => {
          if(name){
            setProducts(data.filter((product) => product.category === name ));
          } else {
            setProducts(data);
          }          
        }
      ).catch(
        (errorMsg) => console.error(errorMsg)
      )

    },[name]
  )

  return (
    <>
    <section className="ItemList-container" >
      <ItemList products={products}/>
    </section>
    </>
  );
}
