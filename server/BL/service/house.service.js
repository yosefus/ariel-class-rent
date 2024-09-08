import { createHouse, readHouses } from "@/server/DL/controller/house.controller";

export const createHouseService = (house) => createHouse(house)
export const readHousesService = () => readHouses()