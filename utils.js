import { useEffect } from 'react';

export const onEnterPress = (f) => {
    const downHandler = ({ key }) => {
      if (key === 'Enter') {
        f()
      }
    }

    useEffect(() => {
      window.addEventListener('keydown', downHandler)
      return () => {
        window.removeEventListener('keydown', downHandler)
      }
    })
}