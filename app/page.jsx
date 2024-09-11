
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";
import styles from "./page.module.css";
import ListHouses from "@/components/ListHouses";
// import { unstable_noStore } from "next/cache";

export default async function Home({ searchParams: { searchBy } }) {

  //   if (!list.length) {
  //     await createHouseService(data)
  //   }
  // console.log(list);

  // unstable_noStore()
  return (
    <div className={styles.page} >
      Home
      <section>
        <h2>all houses &deg;</h2>
        <SearchBar />
        <Suspense key={searchBy} fallback={<p>loading...</p>}>
          <ListHouses searchBy={searchBy} />
        </Suspense>
      </section>
    </div>
  );
}
