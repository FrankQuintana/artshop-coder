import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import './itemListContainer.css'
import Title from '../Title'
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const arte = [
  { id: 1,
    title: "rojo negro",
    image: "https://i.pinimg.com/originals/ab/26/32/ab26327bcabacd4191283dbedea31e54.jpg",
    category: 'abstractos',
    price: 8000
  },
  { id: 2,
    title: "heart",
    image: "https://i.pinimg.com/originals/fc/e0/b6/fce0b6f45f0787dbdd008e48ec7a523d.jpg",
    category: 'geometricos',
    price: 8000
  },
  { id: 3,
    title: "gordo michi",
    image: "https://i.pinimg.com/originals/e5/c5/80/e5c580bea4057f6c850a096c06d3f01f.jpg",
    category: 'cartoon',
    price: 8000
  },
  { id: 4,
    title: "tomas",
    image: "https://i.pinimg.com/originals/cb/70/46/cb70469144e04b446bcd518b76273f8f.jpg",
    category: 'cartoon',
    price: 8000
  },
  { id: 5,
    title: "dual",
    image: "https://i.pinimg.com/originals/c2/1d/db/c21ddb619dbf0687a5a922636fd1ffd3.jpg",
    category: 'abstractos',
    price: 8000
  },
  { id: 6,
    title: "head",
    image: "https://i.pinimg.com/originals/c8/da/f3/c8daf31066b5422202c78c6f39ed78ad.jpg",
    category: 'geometricos',
    price: 8000
  }
];

const ItemListContainer = () => {

  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if (categoriaId) {
        const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(products => ({ id: products.id, ...products.data() }))))
    } else {
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(products => ({ id: products.id, ...products.data() }))))
    }
    
}, [categoriaId]);
  

  
  return (
    <>
      <Title greeting='ART-SHOP' />
      <div className="listItem__container">
        <ItemList data={data} />
      </div>
    </>
  )
}

export default ItemListContainer