// styles
import "./header.scss";
import brandingLogo from "../../assets/brandingLogo.png";

// hooks | libraries
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Header(): ReactElement {
  return (
    <header>
      <Link to={"/"} title={"Home"}>
        <figure>
          <img
            src={brandingLogo}
            alt={"A toolbox with a lot of tools around."}
          />
        </figure>
        {/*<h1>What a tool !</h1>*/}
      </Link>
    </header>
  );
}
