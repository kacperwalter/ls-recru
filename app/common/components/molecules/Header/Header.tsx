import Heading from "@/app/common/components/atoms/Heading/Heading"
import RichText from "@/app/common/components/atoms/RichText/RichText"

const Header = ({ headingType = 'h2', headingText, caption }) => {
  return (
    <header>
      <Heading type={headingType} text={headingText} />
      <RichText text={caption} />
    </header>
  )
}

export default Header