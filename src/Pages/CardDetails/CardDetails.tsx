import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IItem, products } from '../../Products';
import Header from '../../ui/Card/header/Header';
import Price from '../../ui/Card/price/Price';

const CardDetails:React.FC = () => {

  const [card, setCard] = useState<IItem>();
  
  const { id } = useParams();

  useEffect(()=>setCard(products.map(el=>el.items).flat().find(el=>el.id===id)), []);

  if(!card) return <>Loading...</>
  
  return (
    <div>
      <Header name={card!.name} />
      <Price price={card!.price} />
    </div>
  )
}

export default CardDetails;