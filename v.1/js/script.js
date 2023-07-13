/*
    Preparation Function 'getQuery'
    Returns the content of the 'query' URL parameter.
    Returns false if the parameter does not exist, otherwise returns the content
*/
function getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has("query")) {
      return false;
    }
    return urlParams.get("query");
  }

/*
    Preparation Function 'getResults'
    Returns the search results of the specified 'queryParam' parameters
*/
function getResults(queryParam) {
    // Enter your Gogle API Data here
    const apiKey = '';
    const cx = '';
    const query = queryParam;
    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const results = data.items;
        return results;
      })
      .catch(error => {
        console.error(error);
        return [];
      });
  }

function getVersion(name) {
  let data = versions.name;
  return data
}


/*
 * Preparation Function 'checkInternetConnection'
 * Returns true if the internet connection is available
 */
function checkInternetConnection() {
	var online = navigator.onLine;
	return online
}
