
import data from '@/data/data.json';

export default function House({ params: { houseName } }) {
   const currentHouse = data.find(house => house.name === decodeURI(houseName))
console.log(currentHouse);
   
  return (
     <div>
        <h1>{currentHouse.name}</h1>
        <h2>${currentHouse.price}</h2>
    </div>
  )
}
