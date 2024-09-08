import houseModel from "../models/house.model";


export const createHouse = (house)=> houseModel.create(house) 
export const readHouses = ()=> houseModel.find() 