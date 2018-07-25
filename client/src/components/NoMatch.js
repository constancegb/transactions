import React from "react";

const NoMatch = ({ location }) => (
  <div>
    <h2>
      No match for <code>{location.pathname}</code>
    </h2>
  </div>
);

export default NoMatch;
