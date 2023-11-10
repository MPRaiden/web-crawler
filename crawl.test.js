const { normalizeURL } = require('./crawl');

test('Function normalizeURL returns just pathname, hostname and removes trailing forward slash', () => {
  // Nominal happy path case
  const exampleURL = 'https://blog.boot.dev/path/';

  // Declare actual and expected variable results
  const actual = normalizeURL(exampleURL);
  const expected = 'blog.boot.dev/path';

  // Check if actual matches expected
  expect(actual).toEqual(expected);
});

test('Function normalizeURL returns a string if inputted a string', () => {
  // Input is empty string
  const exampleURL = 'https://blog.boot.dev/path/';

  // Declare actual and variable result
  const actual = normalizeURL(exampleURL);

  // Check if output of function is string
  expect(typeof actual).toBe('string');
});

test('Function normalizeURL throws an error if the input is invalid', () => {
  // Declare empty string as input for function
  const exampleURL = '';

  // Check if calling normalizeURL with invalid input throws expected error
  expect(() => normalizeURL(exampleURL)).toThrow(
    'Invalid URL. Please provide a valid URL.'
  );
});
