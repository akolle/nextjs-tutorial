import Link from 'next/link'
import Image from 'next/image'

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
    <div className="grid md:grid-cols-2 gap-8">
      {data.map((da) => {
        return (
          <Link key={da.id} href={`/tours/${da.id}`}>
            <div className="relative h-48 mb-2">
              <Image
                src={da.image}
                alt={da.name}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw 30vw"
                priority
                className="object-cover rounded"
              />
            </div>
            <h2>{da.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}

export default ToursPage
