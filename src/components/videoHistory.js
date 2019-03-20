import React from 'react';

const VideoHistory = ({history}) => {
  if(!history) {
    return <div>Loading...</div>;
  }

  return(
    <div className="col-md-12 mt-2 text-center">
      <h1>History</h1>
      <ul className="list-group">
      {
        history.map((obj, i) => (
          <li className="list-group-item">{obj.name}</li>
        ))
      }
      </ul>
    </div>
  );
};
module.exports = VideoHistory;
