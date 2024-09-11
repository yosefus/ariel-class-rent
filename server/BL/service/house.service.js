import { createHouse, readHouses , readHouse, updateHouse} from "@/server/DL/controller/house.controller";

export const createHouseService = (house) => createHouse(house)
export const readHousesService = (filter) => readHouses(filter)
export const readHouseService = (filter) => readHouse(filter)
export const updateHouseService = (id, data) => updateHouse(id, data)