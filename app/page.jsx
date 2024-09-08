
import LoginBtn from "@/components/LoginBtn";
import styles from "./page.module.css";
import data from '@/data/data.json';
import Link from "next/link";
// import { unstable_noStore } from "next/cache";

export default function Home() {
  // unstable_noStore()
  return (
    <div className={styles.page}>
      Home
      <LoginBtn />
      <ul>
        {data.map((house) => (
          <li key={house.name}>
            <Link href={`/houses/${house.name}`}>
              {house.name}
            </Link>
          </li>))}
      </ul>

    </div>
  );
}
