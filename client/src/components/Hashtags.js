import React from "react";

import Chip from "@material-ui/core/Chip";
import _ from "lodash";

const selectTop10Popular = hashtags =>
  _.sortBy(Object.entries(hashtags), ([_, count]) => -count).slice(0, 10);

const Hashtags = ({ hashtags, onClickHashTag }) => {
  return (
    <div className="px2 clearfix">
      {selectTop10Popular(hashtags).map(([tag, count]) => (
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
