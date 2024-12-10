// styles
import "./home.scss";

// hooks | library
import { ReactElement } from "react";
import WithAuth from "../../utils/middleware/WithAuth";

function Home(): ReactElement {
  return <>home component works!</>;
}

const HomeWithAuth = WithAuth(Home);
export default HomeWithAuth;
