
import data from '@/data/data.json';
import { notFound } from 'next/navigation';

export default function House({ params: { houseName } }) {
   const currentHouse = data.find(house => house.name === decodeURI(houseName))
   
   if (!currentHouse) { 
        notFound()
   }

  return (
     <div>
        <h1>{currentHouse.name}</h1>
        <h2>${currentHouse.price}</h2>
    </div>
  )
}
