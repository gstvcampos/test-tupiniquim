import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full">
      <div className="navbar max-w-screen-xl mx-auto justify-between">
        <div className="inline-flex gap-8 items-center">
          <Link
            href={'/'}
            className="relative block h-12 w-24 md:h-20 md:w-40 px-3"
          >
            <Image
              src="/logo.png"
              alt="logo driven"
              fill
              priority
              className="object-contain"
            />
          </Link>
          <ul className="inline-flex gap-8 items-center">
            <li>Drivers</li>
            <li>Passengers</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Log in</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
