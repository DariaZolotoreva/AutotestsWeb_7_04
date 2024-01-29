let page;

describe("Github page tests", () => {

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
    await page.setDefaultNavigationTimeout(500);
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
    await page.setDefaultNavigationTimeout(500);
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
    await page.setDefaultNavigationTimeout(500);
  });
});

describe("Github header test page Actions", () => {
  beforeEach(async () => {
    page1 = await browser.newPage();
    await page1.goto("https://github.com/features/actions");
  })
  
  afterEach(() => {
    page1.close();
  })

  test("The h1 header content'", async () => {
    const firstLink = await page1.$("header div div a");
    await page1.waitForSelector('h1');
    const title2 = await page1.title();
    expect(title2).toEqual('Features • GitHub Actions · GitHub');
    await page.setDefaultNavigationTimeout(500);
  })
});

describe("Github header test page Marketplace", () => {
  beforeEach(async () => {
    page1 = await browser.newPage();
    await page1.goto("https://github.com/marketplace");
  })
  
  afterEach(() => {
    page1.close();
  })

  test("The h1 header content'", async () => {
    const firstLink = await page1.$("h1 mb-2 lh-condensed-ultra");
    await page1.waitForSelector('h1');
    const title2 = await page1.title();
    expect(title2).toEqual('GitHub Marketplace · to improve your workflow · GitHub');
    await page.setDefaultNavigationTimeout(500);
  })
  
});

describe("Github header test page Pulls", () => {
  beforeEach(async () => {
    page1 = await browser.newPage();
    await page1.goto("https://github.com/pulls");
  })
  
  afterEach(() => {
    page1.close();
  })

  test("The h1 header content'", async () => {
    const firstLink = await page1.$("AppHeader-context-item-label");
    await page1.waitForSelector('h1');
    const title2 = await page1.title();
    expect(title2).toEqual('Page not found · GitHub · GitHub');
    await page.setDefaultNavigationTimeout(500);
  }) 
});


