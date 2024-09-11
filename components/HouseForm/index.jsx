"use client"

import { createHouse } from '@/actions/house';
import { useFormState } from 'react'

export default function HouseForm() {

   return (
      <form action={createHouse} >
         <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
         </div>

         <div>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" required />
         </div>

         <div>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" required />
         </div>

         <div>
            <label htmlFor="img">Image URL:</label>
            <input type="text" id="img" name="img" required />
         </div>

         <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required />
         </div>

         {false && <p>error name is required</p>}
         <button>submit</button>
      </form>
   )
}
