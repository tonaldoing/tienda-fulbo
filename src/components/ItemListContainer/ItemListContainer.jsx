import * as React from 'react';
import ItemList from './ItemList/ItemList';
import ItemDetailContainer from './Item/ItemDetail/ItemDetailContainer';
import data from '../../utils/data'

import { useState, useEffect } from 'react';

export default function NestedGrid(props) {

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
          setProducts(data);
        }
      ).catch(
        (errorMsg) => console.error(errorMsg)
      )

    },[]
  )

  return (
    <>
    <section className="ItemList-container" >
      <h2>{props.title}</h2>
      <ItemList products={products}/>
    </section>
      <ItemDetailContainer/>
    </>
  );
}
