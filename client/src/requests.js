const TWITTER_SEARCH_URL = "/tweets"; // TODO: fill
export const fetchSearch = ({ searchTerm }) => {
  return fetch(`${TWITTER_SEARCH_URL}?searchTerms=${searchTerm}`).then(res => {
    if (res.status === 200) {
      return res.json();
    }
    console.error(`error occured at`, res);
    return Promise.reject(res);
  }); // TODO: add search term
};
