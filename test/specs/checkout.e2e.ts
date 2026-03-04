import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts'
import CheckoutPage from '../pageobjects/checkout.page.ts'
import { CHECKOUT_DATA } from '../data/checkout.data.ts';
import checkoutPage from '../pageobjects/checkout.page.ts';

describe('Fluxo de checkout - myDemoApp', () => {

    before(async () => {
        await LoginPage.login('bob@example.com', '10203040');
    });

    it('Validar acesso à tela de produtos após login', async () => {
        await expect(LoginPage.productsHeader).toBeDisplayed();
    });

    it('Fluxo de checkout completo com sucesso', async () => {
        await CheckoutPage.firstProduct.click();
        await CheckoutPage.addToCartBtn.click();
        await CheckoutPage.cartIcon.click();
        await CheckoutPage.proceedCheckoutBtn.click();

        await CheckoutPage.submitShippingForm(
            CHECKOUT_DATA.validUser.name, 
            CHECKOUT_DATA.validUser.address, 
            CHECKOUT_DATA.validUser.city,
            CHECKOUT_DATA.validUser.state, 
            CHECKOUT_DATA.validUser.zip,
            CHECKOUT_DATA.validUser.country, 
        );
        await expect(CheckoutPage.paymentMethodTitle).toBeDisplayed();

        await CheckoutPage.submitPaymentMethodForm(
            CHECKOUT_DATA.validUser.name, 
            CHECKOUT_DATA.payment.validCard.cardNumber,  
            CHECKOUT_DATA.payment.validCard.expirationData,  
            CHECKOUT_DATA.payment.validCard.securityCode,
        );

        await checkoutPage.clickReviewOrder();

        await expect(CheckoutPage.reviewYourOrderTitle).toBeDisplayed();
        await CheckoutPage.finishPayment();
        await CheckoutPage.backToProductsBtn.click();
    });

    it('Tentativa de utilizar cartão inválido', async () => {
        await CheckoutPage.firstProduct.click();
        await CheckoutPage.addToCartBtn.click();
        await CheckoutPage.cartIcon.click();
        await CheckoutPage.proceedCheckoutBtn.click();

        await CheckoutPage.submitShippingForm(
            CHECKOUT_DATA.validUser.name, 
            CHECKOUT_DATA.validUser.address, 
            CHECKOUT_DATA.validUser.city,
            CHECKOUT_DATA.validUser.state, 
            CHECKOUT_DATA.validUser.zip,
            CHECKOUT_DATA.validUser.country, 
        );
        await expect(CheckoutPage.paymentMethodTitle).toBeDisplayed();

        await CheckoutPage.submitPaymentMethodForm(
            CHECKOUT_DATA.payment.invalidCard.fullName, 
            CHECKOUT_DATA.payment.invalidCard.cardNumber,  
            CHECKOUT_DATA.payment.invalidCard.expirationData,  
            CHECKOUT_DATA.payment.invalidCard.securityCode,
        );

        await CheckoutPage.clickReviewOrder();
        await expect(CheckoutPage.reviewYourOrderTitle).not.toBeDisplayed();
    });
});