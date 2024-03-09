import Image from 'next/image'
import Link from 'next/link'
import { UserIcon } from '../icons/UserIcon'

export default function Header() {
  return (
    <header className="w-full">
      <div className="navbar max-w-screen-2xl mx-auto justify-between">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
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
          <ul className="menu menu-horizontal text-neutral hidden md:flex">
            <li>
              <Link href="/drivers">Drivers</Link>
            </li>
            <li>
              <Link href="/passengers">Passengers</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn btn-ghost text-primary hover:underline hover:bg-transparent">
            <UserIcon />
            Log in
          </button>
          <button className="btn btn-outline btn-accent">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
