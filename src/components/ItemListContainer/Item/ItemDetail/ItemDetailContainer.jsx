import * as React from 'react';

import ItemDetail from './ItemDetail';
import data from '../../../../utils/data'

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';


export default function NestedGrid(props) {

    const {id} = useParams();

    const [detail, setDetail] = useState([]);
  
    useEffect(
  
      () => {  
  
        let detail = new Promise ( (resolve, reject) => {
          setTimeout(
            () =>  {
              resolve(data)
            }, 2000);
        });
  
        detail
        .then(
          (res) => {            
            if(id){
              setDetail(data.filter((product) => product.id == id ));
            } else {
              setDetail(data);
            }        
          }
        ).catch(
          (errorMsg) => console.error(errorMsg)
        )
  
      },[id]
    )
    return (
      <>
        <ItemDetail detail={detail} />
      </>
    );
  }