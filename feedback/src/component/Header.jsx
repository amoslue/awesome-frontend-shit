import PropTypes from 'prop-types'


function Header({ bgColor, color, text }) {
    const headerStyle = {
        background: bgColor,
        color: color,
        padding: '10px',
        textAlign: 'center'
    };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
    bgColor: "rgba(0, 0, 0, 0.4)",
    color: "rgba(255, 255, 255, 0.8)",
    text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string
};

export default Header;
