import {By} from 'selenium-webdriver';

import BasePage from './BasePage.js';

class CheckoutPage extends BasePage {

    constructor(driver){

        super(driver);

        this.locators = {

            campoCep: By.id('cart-shipping-vue'),

            botaoAlterarCEP: By.css('[data-test="change-zipcode-link"]'),

            botaoContinuar: By.css('a[data-checkout-event-tracker="avancar_topo"]'),

            erroCep: By.css('[data-test="cart-shipping-alert"]')
        };
    }

    async clicarAlterarCEP(){

        await this.click(this.locators.botaoAlterarCEP);
    }

    async preencherCEP(usuario){

        await this.type(this.locators.campoCep, usuario.cep);
    }

    async clicarContinuar(){

        await this.click(this.locators.botaoContinuar);
    }
}

export default CheckoutPage;