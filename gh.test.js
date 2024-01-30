let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 50000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
}, 10000);

describe("Github header test page Actions", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/features/actions");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("Features • GitHub Actions · GitHub");
  });
}, 15000);

describe("Github header test page Marketplace", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/marketplace");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("h1 mb-2 lh-condensed-ultra");
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub Marketplace · to improve your workflow · GitHub"
    );
  }, 50000);
});

describe("Github header test page Pulls", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/pulls");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("AppHeader-context-item-label");
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("Page not found · GitHub · GitHub");
  }, 50000);
});
