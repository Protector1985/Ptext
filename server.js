const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const phoneData = require('./phoneData.js');
const messageData = require('./messageData.js')
console.log(phoneData);
console.log(messageData);

puppeteer.use(StealthPlugin())

    
async function masterfunction() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 65,
        
        
    }); //launches the browser headless mode
    const context = browser.defaultBrowserContext();
    context.overridePermissions("https://voice.google.com/", ["notifications"]);
    
    const page = await browser.newPage();
    await page.goto("https://accounts.google.com/signin/v2/identifier?service=grandcentral&passive=1209600&continue=https%3A%2F%2Fvoice.google.com%2Fsignup&followup=https%3A%2F%2Fvoice.google.com%2Fsignup&flowName=GlifWebSignIn&flowEntry=ServiceLogin/",{waitUntil: 'domcontentloaded', timeout:120000})
    
    async function login() {
        // whsOnd zHQkBf
        await page.type("input", "EMAIL")
        await page.keyboard.press('Enter')
        await page.waitForSelector('input',  {
            visible:true,
            timeout: 120000
        })
            await page.waitFor(4000);
            await page.type("input", "PASSWORD")
            await page.keyboard.press('Enter')
       
        console.log("End of function")
        
        
        
        
    }
    login()
    

    async function textMessage() {
        await page.waitForSelector('gv-side-nav', {
            visible:true,
            timeout: 120000
        })
        await page.goto("https://voice.google.com/u/0/messages",{waitUntil: 'networkidle0', timeout:120000})
        await page.waitForSelector('.GYQtq-bgn8Bb', {
            visible:true,
            timeout: 120000,
            waitUntil: 'networkidle0',
            
        })

        async function send() {
   
            await page.waitFor(5000);
            await page.click('.GYQtq-bgn8Bb')
            await page.waitFor(5000);

            await page.waitForSelector('gv-recipient-picker md-content input', {
                visible:true,
                timeout: 120000,
                waitUntil: 'networkidle0',
            })
            for(let i = 0 ; i < phoneData.length ; i ++) {
            await page.type("gv-recipient-picker md-content input", phoneData[i])
            await page.keyboard.press('Enter')
            await page.type("md-input-container textarea", messageData[i])
            await page.keyboard.press('Enter')
            await page.click('.GYQtq-bgn8Bb')
            await page.waitFor(5000);

            await page.waitForSelector('gv-recipient-picker md-content input', {
                visible:true,
                timeout: 120000,
                waitUntil: 'networkidle0',
            })
        }
    }
    send()
        
         
        
    }
    textMessage()
}
masterfunction()

   
  