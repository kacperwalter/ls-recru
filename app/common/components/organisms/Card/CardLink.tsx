'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

import parseStringToSlug from "@/app/utils/parseStringToSlug"

type CardLinkProps = {
  data: {
    name: string
    id: string
  }
}

const CardLink = ({ data }: CardLinkProps) => {
  const pathname = usePathname()

  return (
    <>
      {pathname == '/' || pathname.startsWith('/characters') ? (
        <Link href={{ pathname: `/characters/${parseStringToSlug(data.name)}`, query: { id: data.id } }}>
          Read more
        </Link>
      ) : null}

      {pathname === '/planets' && (
        <Link href={{ pathname: `/planets/${parseStringToSlug(data.name)}`, query: { id: data.id } }}>
          Read more
        </Link>
      )}

      {pathname === '/vehicles' && (
        <Link href={{ pathname: `/vehicles/${parseStringToSlug(data.name)}`, query: { id: data.id } }}>
          Read more
        </Link>
      )}
    </>
  );

}

export default CardLink