import { useState, useEffect } from 'react'
import img from "../img/logo.png";
const Loader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Optional: Add a minimum display time for the loader
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <img 
        src={img} 
        alt="Loading..." 
        className="w-20 h-25 animate-spin"
        style={{ animationDuration: '2s' }}
      />
    </div>
  )
}

export default Loader 