import React from 'react';
export default (props: any) => {
  return (
    <div>
      <div>
        <div>main</div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
