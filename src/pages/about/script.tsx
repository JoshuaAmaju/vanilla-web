import { render } from "react-dom";
import App from "./app";

const app = document.getElementById("app");

const props = app?.dataset.props;

const PROPS = props ? JSON.parse(props) : {};

render(<App {...PROPS} />, app);
