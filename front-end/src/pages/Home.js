import React, { useEffect, useState } from 'react'

export default function Home() {
  const [workouts, setworkouts] = useState(null)


  useEffect(() => {

    let fetchworkouts = async () => {

      let response = await fetch('/api/workouts')
      let json = response.json();

      setworkouts(json)
      console.log(workouts)
      // if (response.ok) {
      //   setworkouts(json)
      // }
    }
    fetchworkouts();
  }, [])

  return (
    <>
      <div>Home</div>

      <div className="workouts">

        {
          workouts && workouts.map((workout) => {
            return (
              <p key={workout._id}>{workout.title}</p>
            )
          })
        }
      </div>
    </>
  )
}
