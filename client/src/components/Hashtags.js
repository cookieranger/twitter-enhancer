import React from "react";

import Chip from "@material-ui/core/Chip";

const Hashtags = ({ hashtags }) => {
  return (
    <div className="px2 clearfix">
      {hashtags.map(hashtag => (
        <div className="col col-3">
          {/* TODO: make these links clickable */}
          <Chip
            className="Hashtag mr2 mb1"
            key={hashtag.name}
            label={`#${hashtag.name} - ${hashtag.count}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Hashtags;
