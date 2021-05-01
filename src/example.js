const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--lang=ja"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.deepl.com/translator");
  const textarea = await page.$(".lmt__source_textarea");
  await page.evaluate((element) => {
    args: ["--lang=ja"];
    element.value = "Hello";
    element.dispatchEvent(new KeyboardEvent("input"));
  }, textarea);

  setTimeout(async () => {
    await page.screenshot({ path: "deepl.png" });
    await browser.close();
  }, 3000);
})();
