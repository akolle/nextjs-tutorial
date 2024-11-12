const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  return data
}

async function ToursPage() {
  const data = await fetchTours()

  return (
    <div>
      {data.map((da) => {
        return (
          <div>
            <h1 className="text-3xl mb-4">{da.name}</h1>
            <img src={da.image} />
            <p>{da.info}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ToursPage
