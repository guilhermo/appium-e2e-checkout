import { $ } from '@wdio/globals'
import Page from './page.ts';

class LoginPage extends Page {
    get menuButton () { return $('~open menu'); }
    get loginMenuOption () { return $('~menu item log in'); }
    get inputUsername () { return $('~Username input field'); }
    get inputPassword () { return $('~Password input field'); }
    get btnSubmit () { return $('~Login button'); }
    get productsHeader () { return $('android=new UiSelector().text("Products")'); }

    public async login (username: string, password: string) {
        await this.menuButton.click();
        await this.loginMenuOption.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();