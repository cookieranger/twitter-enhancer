import React from "react";
import Button from "@material-ui/core/Button";

const expand = n => [...Array(n).keys()];

// TODO: fill out how this pagination works.
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

const SearchResults = ({ results }) => {
  return (
    <div className="px2">
      <Pagination allPages={3} currentPage={2} />

      <ul className="Results px2 py1 mt0 blue-background rounded-5 list-reset">
        {results.map((result, index) => <Result key={index} result={result} />)}
      </ul>
    </div>
  );
};

const Result = ({}) => {
  return (
    <li className="Result px3 py1 white-text">
      <div>
        <b>Title</b> @author - 12 hours ago
      </div>
      <div>
        paragraph Ullam porro deserunt qui corrupti consectetur rerum neque. Est
        neque rerum et inventore ea doloremque enim sint. Est numquam
        consequatur occaecati qui voluptatem. Rerum rerum est velit
        exercitationem quia voluptas et ipsam. Quos neque ut quaerat eos.
        Delectus est iste ut voluptate voluptatem quo. In error illum totam.
        Quam eveniet non sed. Facere omnis voluptatem quo beatae vitae in. Harum
        iste deserunt at et. Quis vel repellat deleniti aperiam fugit. Quae
        distinctio nam reiciendis quibusdam inventore qui. Laborum corrupti
        consequatur molestiae voluptas inventore.
      </div>
      <div className="py1">
        <img src="http://via.placeholder.com/350x150" />
      </div>
    </li>
  );
};

export default SearchResults;
