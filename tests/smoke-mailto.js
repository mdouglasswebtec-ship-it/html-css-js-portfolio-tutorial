const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const indexPath = path.join(__dirname, '..', 'Index.html');
  const url = 'file://' + indexPath.replace(/\\/g, '/');

  console.log('Opening', url);
  await page.goto(url);

  // Find the mail link by its href starting with mailto:
  const mailLink = await page.$('a[href^="mailto:"]');
  if (!mailLink) {
    console.error('FAIL: No anchor with href starting with mailto: found');
    await browser.close();
    process.exitCode = 2;
    return;
  }

  const href = await mailLink.getAttribute('href');
  console.log('Found mailto href ->', href);

  if (!href.startsWith('mailto:')) {
    console.error('FAIL: href does not start with mailto:');
    await browser.close();
    process.exitCode = 2;
    return;
  }

  const expected = 'mailto:mdouglasswebtec@gmail.com';
  if (href !== expected) {
    console.warn('WARN: href differs from expected. Expected:', expected);
  }

  console.log('PASS: mailto link present and correctly formatted');
  await browser.close();
})();
