import Link from 'next/link'
import { MenuIcon } from '../icons/MenuIcon'

export default function MenuDropdown() {
  return (
    <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <MenuIcon />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
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
  )
}
