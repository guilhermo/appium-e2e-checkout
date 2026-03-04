export default class Page {
    public async waitAndClick(element: WebdriverIO.Element) {
        await element.waitForDisplayed();
        await element.click();
    }

    public async waitAndSetValue(element: WebdriverIO.Element, value: string) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }
}