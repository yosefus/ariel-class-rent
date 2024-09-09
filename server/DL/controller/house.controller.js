import houseModel from "../models/house.model";


export const createHouse = (house) => houseModel.create(house)
export const readHouses = (filter) => houseModel.find(filter)
export const readHouse = (filter) => houseModel.findOne(filter)