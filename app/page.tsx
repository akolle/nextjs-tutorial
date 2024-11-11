import Link from 'next/link'

function HomePage() {
  return (
    <div className="bg-slate-300 p-3">
      <h1 className="text-7xl">Home Page</h1>
      <div className="uppercase">
        <div>
          <Link
            href="/about"
            className="text-xl text-blue-500 inline-block mt-8"
          >
            about page
          </Link>
        </div>
        <div>
          <Link
            href="/info"
            className="text-xl text-blue-500 inline-block mt-8"
          >
            info page
          </Link>
        </div>
      </div>
    </div>
  )
}
export default HomePage
