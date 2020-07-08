import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log('Im calling again and again');
  return <small>{value}</small>;
});
