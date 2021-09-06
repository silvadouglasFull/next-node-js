import React, { useEffect, useState } from 'react'
const Index = () => {
  const [state, setState] = useState(0)
  useEffect(() => {
    setInterval(() => {
      refreshTime()
    }, 1000)
  }, [])
  const refreshTime = () => {
    let dateString = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    let formattedString = dateString.replace(", ", " - ");
    setState(formattedString);
  }

  return (
    <p>{state}</p>
  )
}
export default Index