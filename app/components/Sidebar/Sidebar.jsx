'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

import './Sidebar.scss'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <Link className={`sidebar__link ${pathname === '/' ? 'sidebar__link--active' : ''}`} href="/">Characters</Link>
      <Link className={`sidebar__link ${pathname === '/planets' ? 'sidebar__link--active' : ''}`} href="/planets">Planets</Link>
      <Link className={`sidebar__link ${pathname === '/vehicles' ? 'sidebar__link--active' : ''}`} href="/vehicles">Vehicles</Link>
    </aside>
  )
}

export default Sidebar