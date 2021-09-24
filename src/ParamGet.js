const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlGet = (name) => {
    return urlParams.get(name)
}

module.exports = { urlGet };