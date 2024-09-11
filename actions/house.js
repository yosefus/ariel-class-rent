"use server"

import { createHouseService } from "@/server/BL/service/house.service";
import { connectToMongo } from "@/server/connect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createHouse = async (fd) => {
   await connectToMongo()
   const created = await createHouseService(Object.fromEntries(fd))
   console.log(created);
   revalidatePath(`/houses/${created.name}`)
   redirect('/')
}

