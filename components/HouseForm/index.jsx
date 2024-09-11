"use client"

import { createHouse, updateHouseAction } from '@/actions/house';
import { useFormState } from 'react-dom'

export default function HouseForm({ id, name, price, location, img, description }) {

   const [state, action] = useFormState(id ? updateHouseAction.bind(null, id) : createHouse, {})
   console.log({ state, action });


   return (
      <form action={action} >
         <input type="text" id="name" name="id" hidden defaultValue={id} required />
         <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" defaultValue={name} required />
         </div>

         <div>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" defaultValue={price} required />
         </div>

         <div>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" defaultValue={location} name="location" required />
         </div>

         <div>
            <label htmlFor="img">Image URL:</label>
            <input type="text" id="img" name="img" defaultValue={img} required />
         </div>

         <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" defaultValue={description} name="description" required />
         </div>

         {false && <p>error name is required</p>}
         <button>submit</button>
      </form>
   )
}
