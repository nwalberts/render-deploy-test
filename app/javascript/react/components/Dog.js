import React, { useState, useEffect } from "react"

const Dog = (props) => {
  const [dog, setDog] = useState({})
  const [newDog, setNewDog] = useState("")

  const fetchDog = async () => {
    let dogId = props.match.params.id
    try {
      const response = await fetch(`/api/v1/dogs/${dogId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setDog(responseBody)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  

  useEffect(() => {
    fetchDog()
  }, [])

  const handleClick = () => {
    fetchDog()
  }

  let handleChange = (event) => {
    setNewDog(event.currentTarget.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let formPayload = {
      dog: {
        name: newDog
      }
    }

    try {
      const response = await fetch("/api/v1/dogs", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      console.log(responseBody)
      // setDog(newDog)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }


  return(
    <div>
    <h1>Your Dog: {dog.name}</h1>
    <button className="button" onClick={handleClick}> Click for a new Dog </button>
    <form onSubmit={handleSubmit}>
      <label>New Dog Name:</label>
      <input
        type="text"
        value={newDog}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default Dog