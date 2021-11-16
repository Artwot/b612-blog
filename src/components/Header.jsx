import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://pixabay.com/get/geea56d4a781db8163b5930234df7d1a870fbb0a5f9abbe432695952e6d77e0634749f97843c266b1ca02b15454cab8c5.jpg"
        alt="Header"
        className="headerImg"
      />
    </div>
  );
};
export default Header;
