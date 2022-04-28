// Import Given, When, Then from wdio/cucumber
const { Given, When, Then } = require('@wdio/cucumber-framework');

// During development of the tests we can set a higher value here
// to pause between steps, then set to 0 when the tests are ready
const pauseTime = 0;

Given('that I am on the start page', async () => {
  // Navigate to a url
  await browser.url(`/`);
  // Also wait for the author list to show
  await $('.author').waitForExist({ timeout: 5000 });
  await browser.pause(pauseTime);
});

Then(/^a list of at least (\d*) authors should be displayed$/, async minNumberOfAuthors => {
  // Convert to number
  minNumberOfAuthors = +minNumberOfAuthors;
  // Grab all the author elements
  let authorEls = await $$('.author-list .author');
  // Check that there are at least minNumberOfAuthors
  await expect(authorEls).toBeElementsArrayOfSize(
    { gte: minNumberOfAuthors }
  );
  await browser.pause(pauseTime);
}
);

Then(/^every displayed author should have a description of at least (\d*) words$/, async minNumOfWords => {
  // Convert to number
  minNumOfWords = +minNumOfWords;
  // Get all author description elements
  let authorDescriptionEls = await $$('.author-list .author .author-description');
  // Loop through every description
  for (descriptionEl of authorDescriptionEls) {
    // Check that the description has at least minNumOfWords
    // (assume that spaces should minNumOfWords-1)
    let descriptionWords = (await descriptionEl.getText()).trim().split(' ');
    expect(descriptionWords.length).toBeGreaterThanOrEqual(minNumOfWords);
  }
  await browser.pause(pauseTime);
});

Then(/^the author "([^"]*)" must be in the list$/, async expectedAuthorName => {
  // Get all author name elements
  let authorNameEls = await $$('.author-list .author .author-name');
  // Put all displayed author names in an array
  let authorNames = [];
  for (let nameEl of authorNameEls) {
    authorNames.push((await nameEl.getText()).trim());
  }
  expect(authorNames).toContain(expectedAuthorName);
  await browser.pause(pauseTime);
});