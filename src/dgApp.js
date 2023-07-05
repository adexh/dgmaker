import React from 'react';
import Dg from './dg';

const DgApp = () => {
  const data = {
    name: 'Root',
    children: [
      {
        name: 'Child 1',
        children: [
          { name: 'Grandchild 1' },
          { name: 'Grandchild 2' },
          { name: 'Grandchild 3' },
        ],
      },
      {
        name: 'Child 2',
        children: [{ name: 'Grandchild 4' }, { name: 'Grandchild 5' }],
      },
    ],
  };

  return (
    <div>
      <Dg data={data} />
    </div>
  );
};

export default DgApp;