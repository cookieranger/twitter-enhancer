import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="px2">
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
