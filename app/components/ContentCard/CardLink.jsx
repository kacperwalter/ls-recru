'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

import parseStringToSlug from "@/app/utils/parseStringToSlug"

const CardLink = ({data}) => {
  const pathname = usePathname()

  return (
    <>
    {pathname === '/' && 
      <Link href={{
        pathname: `/characters/${parseStringToSlug(data.name)}`,
        query: { id: data.id }
      }}>Read more</Link>
    }

    {pathname === '/planets' && 
      <Link href={{
        pathname: `/planets/${parseStringToSlug(data.name)}`,
        query: { id: data.id }
      }}>Read more</Link>
    }

    {pathname === '/vehicles' && 
      <Link href={{
        pathname: `/vehicles/${parseStringToSlug(data.name)}`,
        query: { id: data.id }
      }}>Read more</Link>
    }
    </>
  )
}

export default CardLink