import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail'

import { useParams } from 'react-router-dom'

const arte = [
  { id: 1,
    title: "rojo negro",
    image: "https://i.pinimg.com/originals/ab/26/32/ab26327bcabacd4191283dbedea31e54.jpg",
    category: 'abstractos'
  },
  { id: 2,
    title: "heart",
    image: "https://i.pinimg.com/originals/fc/e0/b6/fce0b6f45f0787dbdd008e48ec7a523d.jpg",
    category: 'geometricos'
  },
  { id: 3,
    title: "gordo michi",
    image: "https://i.pinimg.com/originals/e5/c5/80/e5c580bea4057f6c850a096c06d3f01f.jpg",
    category: 'cartoon'
  },
  { id: 4,
    title: "tomas",
    image: "https://i.pinimg.com/originals/cb/70/46/cb70469144e04b446bcd518b76273f8f.jpg",
    category: 'cartoon'
  },
  { id: 5,
    title: "dual",
    image: "https://i.pinimg.com/originals/c2/1d/db/c21ddb619dbf0687a5a922636fd1ffd3.jpg",
    category: 'abstractos'
  },
  { id: 6,
    title: "head",
    image: "https://i.pinimg.com/originals/c8/da/f3/c8daf31066b5422202c78c6f39ed78ad.jpg",
    category: 'geometricos'
  }
];

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
          setTimeout(() => {
            resolve(arte)
          }, 2000);
        });
        getData.then(res => setData(res.find(art => art.id === parseInt(detalleId))));
      }, [])

  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer