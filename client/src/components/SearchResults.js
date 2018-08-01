import React from "react";
import Button from "@material-ui/core/Button";

const expand = n => [...Array(n).keys()];

// NOTE: not using
const Pagination = ({ allPages, currentPage }) => {
  return (
    <div className="Pagination center pb1">
      {expand(allPages)
        .map(page => +page + 1)
        .map(page => (
          <Button
            color={currentPage === page ? "primary" : "default"}
            mini
            key={page}
            variant="fab"
            classes={{
              root: `i-mx0_5 ${currentPage === page ? "inactive" : ""}`
            }}
            style={{ width: 20, height: 20, minHeight: 20 }}
          >
            {page}
          </Button>
        ))}
    </div>
  );
};

const SearchResults = ({ results, onClickHashTag }) => {
  return (
    <div className="px2">
      <ul className="Results px2 py1 mt0 blue-background rounded-5 list-reset">
        {results.map((tweet, index) => (
          <Result key={index} tweet={tweet} onClickHashTag={onClickHashTag} />
        ))}
      </ul>
    </div>
  );
};

const Result = ({
  tweet: { author, content, hashtags, img_url, title, created_at },
  onClickHashTag
}) => {
  return (
    <li className="Result px3 py1 white-text">
      <div>
        <b className="pr2">{title}</b>
        <i>
          @{author} - {created_at}
        </i>
      </div>
      <br />
      <div
        className="Result-content"
        dangerouslySetInnerHTML={{
          __html: content.replace(/#(\w*)/g, hashtag => `<b>${hashtag}</b>`)
        }}
      />
      <div className="py1">
        <img src={img_url} />
      </div>
    </li>
  );
};

export default SearchResults;
