import { createHouse, readHouses , readHouse} from "@/server/DL/controller/house.controller";

export const createHouseService = (house) => createHouse(house)
export const readHousesService = (filter) => readHouses(filter)
export const readHouseService = (filter) => readHouse(filter)