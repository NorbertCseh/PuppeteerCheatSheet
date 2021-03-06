//Import
const puppeteer = require("puppeteer");

//Main function
(async () => {
  //Try Catch coz it's orifessional
  try {
    //Puppeter launch a browser, headless for visiblity, viewport for "screen" size, args for windows size
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: [`--window-size=1366,768`]
    });
    //Open new page
    const page = await browser.newPage();
    //Go to Page
    await page.goto("https://google.com");
    //Wait till the element is loaded
    await page.waitFor("input[name=q]");
    //Set focus on elemnt
    await page.focus("input[name=q]");
    //Type into field
    await page.keyboard.type("Valami");
    //Waiting
    await page.waitFor(3000);
    //Writeing to input another version
    await page.$eval(
      "input[name=q]",
      el => (el.value = "Adenosine triphosphate")
    );
    //Click on element
    await page.click("input[name=btnK]");
    //Keyboard press
    await page.keyboard.press("Enter");
  } catch (err) {
    console.log(err);
  }
})();
