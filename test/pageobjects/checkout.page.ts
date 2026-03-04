import { $ } from '@wdio/globals'
import Page from './page.ts';

class CheckoutPage extends Page {
    get firstProduct() { return $('android=new UiSelector().className("android.widget.ImageView").instance(4)'); }
    get addToCartBtn() { return $('~Add To Cart button'); }
    get cartIcon() { return $('~cart badge'); }
    get proceedCheckoutBtn() { return $('~Proceed To Checkout button'); }

    /* Formulário de identificação */
    get inputFullName() { return $('~Full Name* input field'); }
    get inputAddress() { return $('~Address Line 1* input field'); }
    get inputCity() { return $('~City* input field'); }
    get inputState() { return $('~State/Region input field'); }
    get inputZipCode() { return $('~Zip Code* input field'); }
    get inputCountry() { return $('~Country* input field'); }
    get btnToPayment() { return $('~To Payment button'); }
    get paymentMethodTitle() { return $('android=new UiSelector().text("Enter a payment method")'); }

    /* Formulário do Cartão */
    get inputCardNumber() { return $('~Card Number* input field'); }
    get inputCardExpirationData() { return $('~Expiration Date* input field'); }
    get inputCardSecurityCode() { return $('~Security Code* input field'); }
    get revieOrderBtn() { return $('~Review Order button'); }
    get reviewYourOrderTitle() { return $('android=new UiSelector().text("Review your order")'); }

    /* Alerts de Erro */
    get invalidFullNameAlert() { return $('android=new UiSelector().text("Value looks invalid.").instance(0)'); }
    get invalidCardNumberAlert() { return $('android=new UiSelector().text("Value looks invalid.").instance(1)'); }
    get invalidExpirationDateAlert() { return $('android=new UiSelector().text("Value looks invalid.").instance(2)'); }
    get invalidSecurityCodeAlert() { return $('android=new UiSelector().text("Value looks invalid.").instance(3)'); }

    /* Finalização */
    get finishOrderBtn() { return $('~Place Order button'); }
    get finishOrderMsg() { return $('android=new UiSelector().text("Checkout Complete")'); }
    get backToProductsBtn() { return $('~Continue Shopping button'); }

    public async submitShippingForm(name: string, address: string, city: string, state: string, zip: string, country: string) {
        await this.inputFullName.setValue(name);
        await this.inputAddress.setValue(address);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.inputZipCode.setValue(zip);
        await this.inputCountry.setValue(country);
        await this.btnToPayment.click();
    }

    public async submitPaymentMethodForm(name: string, card: string, expirationData: string, securityCode: string) {
        await this.inputFullName.setValue(name);
        await this.inputCardNumber.setValue(card);
        await this.inputCardExpirationData.setValue(expirationData);
        await this.inputCardSecurityCode.setValue(securityCode);
    }

    public async clickReviewOrder() {
        await this.revieOrderBtn.click();
    }

    public async finishPayment() {
        await this.finishOrderBtn.click();
    }
}

export default new CheckoutPage();