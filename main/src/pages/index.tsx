import React from 'react';
export default (props: any) => {
  return (
    <div>
      <div>
        <div>11</div>
        <div style={{ padding: 20 }}>{props.children}</div>
      </div>
    </div>
  );
};
