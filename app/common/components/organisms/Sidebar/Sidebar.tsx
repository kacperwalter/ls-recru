'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

import './Sidebar.scss'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <Link className={`sidebar__link ${(pathname.startsWith('/characters') || pathname === '/') && 'sidebar__link--active'}`} href="/">Characters</Link>
      <Link className={`sidebar__link ${pathname.startsWith('/planets') && 'sidebar__link--active'}`} href="/planets">Planets</Link>
      <Link className={`sidebar__link ${pathname.startsWith('/vehicles') && 'sidebar__link--active'}`} href="/vehicles">Vehicles</Link>
    </aside>
  )
}

module.exports = Sidebar
export default Sidebar