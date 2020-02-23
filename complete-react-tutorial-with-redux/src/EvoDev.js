import React from 'react';

const EvoDev = ({data_props}) => {
  const {name, version} = data_props;
  
  return (
    <div>
      <p>
        {name}<br/>
        Version: {version}
      </p>
    </div>
  );
}

export default EvoDev;
