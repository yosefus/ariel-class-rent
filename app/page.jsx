
import LoginBtn from "@/components/LoginBtn";
import styles from "./page.module.css";
import data from '@/data/data.json';
import Link from "next/link";
import { connectToMongo } from "@/server/connect";
import { readHousesService } from "@/server/BL/service/house.service";
// import { unstable_noStore } from "next/cache";

export default async function Home() {
  await connectToMongo()
  const list = await readHousesService(data)
  
  // unstable_noStore()
  return (
    <div className={styles.page}>
      Home
      <LoginBtn />
      <ul>
        {list.map((house) => (
          <li key={house._id}>
            <Link href={`/houses/${house.name}`}>
              {house.name}
              <img src={house.img} width={20} alt="" />
            </Link>
          </li>))}
      </ul>

    </div>
  );
}
