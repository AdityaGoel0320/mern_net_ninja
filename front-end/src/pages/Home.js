import React, { useEffect, useState } from 'react'

export default function Home() {
  const [workouts, setworkouts] = useState([])


  useEffect(() => {

    let fetchworkouts = async () => {

      let response = await fetch('/api/workouts')
      let json = response.json();

      console.log(workouts)
      if (response.ok) {
        setworkouts(json)
      }
    }
    fetchworkouts();
  }, [])

  return (
    <>
      <div>Home kgbjfrtguj</div>

      <div className="workouts">

              {workouts}
      </div>
    </>
  )
}
