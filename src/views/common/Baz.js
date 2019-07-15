import React from 'react';

const Baz = ({ title, times }) => (
  <div>
    <h4>{title.repeat(times)}</h4>
  </div>
);

export default Baz;
