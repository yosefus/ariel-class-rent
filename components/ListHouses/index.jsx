import { wait } from "@/helpers/wait";
import { readHousesService } from "@/server/BL/service/house.service";
import { connectToMongo } from "@/server/connect";
import Link from 'next/link';

export default async function ListHouses({searchBy}) {
   await connectToMongo()
   await wait(3)
   const list = await readHousesService({ name: { $regex: new RegExp(searchBy), $options: 'i' } })
   return (
      <ul>
         {list.map((house) => (
            <li key={house._id}>
               <Link href={`/houses/${house.name}`}>
                  {house.name}
                  <img src={house.img} width={20} alt="" />
               </Link>
            </li>))}
      </ul>
   )
}
