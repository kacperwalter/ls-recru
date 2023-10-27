import Link from "next/link"

import parseStringToSlug from "@/app/utils/parseStringToSlug"
import splitId from "@/app/utils/splitId"

import Heading from "@/app/common/components/atoms/Heading/Heading"

const LinkedElements = ({ elements, heading, type }) => {
  return (
    <section className="linked-elements">
      <Heading type="h2" text={heading} />
      <ul>
        {elements.map((element, index) => (
          <li key={index}>
            {/* TODO: this is not the best way to implement these links, rethink it an refactor */}
            <Link href={`/${type}/${parseStringToSlug(element.name)}?id=${splitId(element.url)}`}>
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LinkedElements