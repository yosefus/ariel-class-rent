
import data from '@/data/data.json';
import { wait } from '@/helpers/wait';
import { readHouseService, readHousesService } from '@/server/BL/service/house.service';
import { connectToMongo } from '@/server/connect';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
   await connectToMongo()
   const allHouses = await readHousesService()
   return allHouses.map(house => ({ houseName: house.name }))
}

export default async function House({ params: { houseName } }) {
   await connectToMongo()
   await wait()
   
   const currentHouse = await readHouseService({name: decodeURI(houseName)})

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
