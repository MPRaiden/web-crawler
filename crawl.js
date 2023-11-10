const normalizeURL = (url) => {
  // Create url object from input url string
  try {
    const urlObject = new URL(url);

    // Extract hostname and pathname only
    const modifiedURLObject = `${urlObject.hostname}${urlObject.pathname}`;
    return modifiedURLObject.replace(/\/+$/, '');
  } catch (error) {
    throw new Error('Invalid URL. Please provide a valid URL.');
  }
};

module.exports = {
  normalizeURL,
};
