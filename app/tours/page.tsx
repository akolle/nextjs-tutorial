import Link from 'next/link'

const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

const fetchTours = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
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
          <Link key={da.id} href={`/tours/${da.id}`}>
            <h1 className="text-3xl mb-4 hover:text-blue-500">{da.name}</h1>
            <img src={da.image} />
            <p>{da.info}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default ToursPage
