import Link from 'next/link'

function AboutPage() {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
        back to home
      </Link>
    </div>
  )
}
export default AboutPage
