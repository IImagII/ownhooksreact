import { useEffect } from 'react'
import { useState } from 'react'

export default function useRequest(request) {
   const [data, setDate] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')

   useEffect(() => {
      setLoading(true)
      request()
         .then((response) => setDate(response.data))
         .catch((error) => setError(error))
         .finally(() => setLoading(false))
   }, [])
   return [data, loading, error]
}
