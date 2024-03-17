import { useEffect, useRef, useState } from 'react'

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebounceValue(value), delay)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [value, delay])
  return debounceValue
}
