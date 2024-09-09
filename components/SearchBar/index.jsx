'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function SearchBar() {
   const searchParams = useSearchParams()
   const pathname = usePathname()
   const { replace } = useRouter()

   const handleChange = (e) => {
      e.preventDefault()
      const searchTerm = e.target.search.value;
      const params = new URLSearchParams(searchParams);
      if (searchTerm) {
         params.set('searchBy', searchTerm)
      } else {
         params.delete('searchBy')
      }
      replace(`${pathname}?${params.toString()}`)
   }

   return (
      <form onSubmit={handleChange} >
         <input
            name='search'
            type="search"
            placeholder="search..."
            defaultValue={searchParams.get('searchBy')}
         />
         <button>search</button>
      </form>
   )
}
