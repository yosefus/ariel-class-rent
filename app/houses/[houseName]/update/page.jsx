import HouseForm from '@/components/HouseForm'
import { readHouseService } from '@/server/BL/service/house.service'
import { connectToMongo } from '@/server/connect'
import React from 'react'

export default async function Update({ params: { houseName } }) {
   await connectToMongo()
   const currentHouse = await readHouseService({ name: decodeURI(houseName) })


   return (
      <div>
         <HouseForm
            id={currentHouse._id.toString()}
            name={currentHouse.name}
            price={currentHouse.price}
            location={currentHouse.location}
            img={currentHouse.img}
            description={currentHouse.description}
         />
         {/* {JSON.stringify(currentHouse)} */}
      </div>
   )
}
