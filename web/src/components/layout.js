import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (this.state.scrolled && window.scrollY <= 10) {
      this.setState({ scrolled: false });
    } else if (!this.state.scrolled && window.scrollY > 10) {
      this.setState({ scrolled: true });
    }
  };

  render() {
    const {
      children,
      onHideNav,
      onShowNav,
      showNav,
      siteTitle,
      navMenuItems,
      textWhite = true,
    } = this.props;
    const { scrolled } = this.state;
    const defaultItems = [
      {
        title: "Blog",
        kind: "link",
        link: null,
        route: "/blog",
        landingPageRoute: null,
      },
      {
        title: "About",
        kind: "link",
        link: null,
        route: "/about",
        landingPageRoute: null,
      },
      {
        title: "Courses",
        kind: "button",
        link: "https://vsCodeHero.com",
        route: null,
        landingPageRoute: null,
      },
    ];
    const navItems = navMenuItems ? navMenuItems : defaultItems;

    return (
      <>
        <Header
          navMenuItems={navItems}
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
          scrolled={scrolled}
          textWhite={textWhite}
        />
        <>{children}</>
        <Footer siteTitle={siteTitle} />
      </>
    );
  }
}

export default Layout;
