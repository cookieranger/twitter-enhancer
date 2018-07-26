const TWITTER_SEARCH_URL = ""; // TODO: fill
export const fetchSearch = ({ searchTerm }) => {
  return fetch(`${TWITTER_SEARCH_URL}`); // TODO: add search term
};
