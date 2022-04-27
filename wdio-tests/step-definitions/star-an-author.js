const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 0;

// The "Given that I am on the start page" step
// is already already written in another file

// We can share variables between steps
let authorNameEl;

When('I click an author that does not have a star', async () => {
  // We asume that no authors have stars initially
  // Grab the first author name and click on it
  authorNameEl = await $('.author-list .author .author-name');
  await authorNameEl.click();
  browser.pause(pauseTime);
});

Then('the author should get a star', async () => {
  await expect(authorNameEl.$('.star')).toExist();
});

When('I click an author that has a star', async () => {
  authorNameEl = await $('.author-list .author .author-name');
  // Click once for addiwng star
  await authorNameEl.click();
  // Click once for removing star
  await authorNameEl.click();
  browser.pause(pauseTime);
});

Then('the author should get his star removed', async () => {
  let stars = await authorNameEl.$$('.star');
  expect(stars.length).toEqual(0);
});