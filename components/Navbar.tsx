import Link from 'next/link'

function Navbar() {
  return (
    <nav className=" border-b-2 bg-gradient-to-br from-slate-300 to-purple-500">
      <div className="max-w-3xl mx-auto py-4 flex gap-x-4">
        <Link
          href="/"
          className="transition duration-500 ease-in hover:bg-purple-900 hover:text-yellow-200"
        >
          Home
        </Link>
        <Link
          href="/counter"
          className="transition duration-500 ease-in hover:bg-purple-900 hover:text-yellow-200"
        >
          Counter
        </Link>
        <Link
          href="/tours"
          className="transition duration-500 ease-in hover:bg-purple-900 hover:text-yellow-200"
        >
          Tours
        </Link>
        <Link
          href="/actions"
          className="transition duration-500 ease-in hover:bg-purple-900 hover:text-yellow-200"
        >
          Actions
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
