import React from "react";

const App = (props: any) => {
  const [title, seTtitle] = React.useState(props.title);

  return (
    <div>
      <h1>{title}</h1>
      <input type="text" onChange={(e) => seTtitle(e.target.value)} />
    </div>
  );
};

export default App;
