import React from "react";

import Chip from "@material-ui/core/Chip";
import _ from "lodash";

const Hashtags = ({ hashtags, onClickHashTag }) => {
  return (
    <div className="px2 clearfix">
      {_
        .sortBy(Object.entries(hashtags), ([_, count]) => -count)
        .slice(0, 10)
        .map(([tag, count]) => (
          <div className="col col-3">
            <Chip
              onClick={() => onClickHashTag(tag)}
              className="Hashtag mr2 mb1 clickable"
              key={tag}
              label={
                <div>
                  <b>{tag}</b> - {count}
                </div>
              }
            />
          </div>
        ))}
    </div>
  );
};

export default Hashtags;
