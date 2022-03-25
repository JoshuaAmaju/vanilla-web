import React from "react";
import ReactDOM from "react-dom";

const app = document.getElementById("app");

const props = app?.dataset.props;

const PROPS = props ? JSON.parse(props) : {};

const About = (props: any) => {
  const [title, seTtitle] = React.useState(props.title);

  return (
    <div>
      <h1>{title}</h1>
      <input type="text" onChange={(e) => seTtitle(e.target.value)} />
    </div>
  );
};

ReactDOM.render(<About {...PROPS} />, app);
