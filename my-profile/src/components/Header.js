import PropTypes from "prop-types"
import Button from "./Button"

const FULL_NAME = "Ricky"
const AGE = 21

const Header = ({title}) => {
  const onClick = () => {
    console.log("click!")
  }

  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: FULL_NAME
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const headingStyle = {
  color: "red"
}

export default Header