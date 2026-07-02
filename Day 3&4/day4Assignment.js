const { chromium, firefox } = require('playwright');

(async () => {
  // Launch Edge (Chromium-based)
  const edgeBrowser = await chromium.launch({
    channel: 'msedge', // explicitly launch Edge
    headless: false
  });
  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();

  // Navigate to Red Bus
  await edgePage.goto('https://www.redbus.in');
  console.log('Red Bus (Edge) Title:', await edgePage.title());
  console.log('Red Bus (Edge) URL:', edgePage.url());

  // Launch Firefox
  const firefoxBrowser = await firefox.launch({ headless: false });
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();

  // Navigate to Flipkart
  await firefoxPage.goto('https://www.flipkart.com');
  console.log('Flipkart (Firefox) Title:', await firefoxPage.title());
  console.log('Flipkart (Firefox) URL:', firefoxPage.url());

  // Close browsers
  await edgeBrowser.close();
  await firefoxBrowser.close();
})();
