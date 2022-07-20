import * as React from 'react';

import ItemDetail from './ItemDetail';
import data from '../../../../utils/data'

import { useState, useEffect } from 'react';


export default function NestedGrid(props) {

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
            setDetail(data[0]);
          }
        ).catch(
          (errorMsg) => console.error(errorMsg)
        )
  
      },
    )
    return (
      <>
        <ItemDetail detail={detail} />
      </>
    );
  }