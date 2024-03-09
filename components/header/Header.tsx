import Link from 'next/link'
import { LogoDefaultIcon } from '../icons/LogoDefaultIcon'
import { UserIcon } from '../icons/UserIcon'
import MenuDropdown from './MenuDropdown'

export default function Header() {
  return (
    <header className="w-full">
      <div className="navbar max-w-screen-2xl mx-auto justify-between">
        <MenuDropdown />
        <div className="inline-flex gap-8 items-center">
          <Link href={'/'}>
            <LogoDefaultIcon />
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
          <button className="btn btn-ghost">
            <UserIcon />
            <span className="hidden sm:block">Log in</span>
          </button>
          <button className="btn btn-outline btn-accent">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
