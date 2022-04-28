import { expect } from '@jest/globals';

import Author from '../../src/utilities/Author';

// Mock fetch and make it work with relative urls 
// (like on frontend)
import fetch from 'node-fetch';
const orgFetch = fetch;
global.fetch = (url, options) => {
  if (url.indexOf('http') < 0) {
    // note using port 4000, hard coded for production build
    // we should have env variable for this eventually...
    url = 'http://localhost:4000' + url;
  }
  return orgFetch(url, options);
}


describe('Test FetchHelper via subclass Author', () => {

  test('Test the find method', async () => {

    let allAuthors = await Author.find();

    expect(allAuthors.length > 0).toBeTruthy();

  });

});
