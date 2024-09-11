"use server"

import { createHouseService, updateHouseService } from "@/server/BL/service/house.service";
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

export const updateHouseAction = async (id, fd) => {
   await connectToMongo()
   console.log(id, fd);
   const update = await updateHouseService(id, Object.fromEntries(fd))
   revalidatePath(`/houses/${update.name}`)
   redirect('/')
}

