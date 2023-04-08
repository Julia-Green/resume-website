function Header() {
  return (
    <nav className="navbar sticky-top">
        <div className="col-6 d-flex align-items-start">
            <a className="navbar-brand">&gt; Julia Green</a>
        </div>
        <div className="col-6 d-flex flex-row align-items-end justify-content-between d-none d-md-flex">
            <a className="nav-link">About</a>
            <a className="nav-link">Portfolio</a>
            <a className="nav-link">Contact</a>
            <a className="nav-link">Github</a>
            <a className="nav-link">linkedin</a>
        </div>
    </nav>
  );
}
export default Header;