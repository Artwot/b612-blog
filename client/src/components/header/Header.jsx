import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="/assets/lake-6627781.jpg"
        alt="Header"
        className="headerImg"
      />
    </div>
  );
};
export default Header;
