import { useEffect } from 'react'

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-e-Doctor`
  }, [title])
}

export default useTitle
