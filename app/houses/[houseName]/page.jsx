
import data from '@/data/data.json';
import { wait } from '@/helpers/wait';
import { readHouseService, readHousesService } from '@/server/BL/service/house.service';
import { connectToMongo } from '@/server/connect';
import Image from 'next/image';
import { notFound } from 'next/navigation';


// export async function generateStaticParams() {
//    await connectToMongo()
//    const allHouses = await readHousesService()
//    return allHouses.map(house => ({ houseName: house.name }))
// }

export const generateMetadata = async ({ params: { houseName } }) => {
   await connectToMongo()
   const currentHouse = await readHouseService({ name: decodeURI(houseName) })
   return ({
      title: currentHouse.name, 
      description: currentHouse.description
})
}

export default async function House({ params: { houseName } }) {
   await connectToMongo()
   // await wait()

   const currentHouse = await readHouseService({ name: decodeURI(houseName) })

   if (!currentHouse) {
      notFound()
   }

   return (
      <div style={{position: 'relative', color: '#fff', height: '90vh'}}>
         <Image src={currentHouse.img} style={{objectFit: 'cover', zIndex: -1}}  alt={currentHouse.name} fill />
         <h1>{currentHouse.name}</h1>
         <h2>${currentHouse.price}</h2>
         <p>{currentHouse.description}</p>
      </div>
   )
}
