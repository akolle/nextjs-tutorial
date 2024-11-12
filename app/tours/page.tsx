const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

async function ToursPage() {
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  console.log(data)

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
