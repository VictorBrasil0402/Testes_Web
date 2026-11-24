import {By} from 'selenium-webdriver';

import BasePage from './BasePage.js';

class CheckoutResumoPage extends BasePage {

    constructor(driver){

        super(driver);

        this.locators = {

            tituloResumo: By.css('.hidden-xs.hidden-sm .ch-order-summary-summary-title'),

            linkVoltar: By.linkText('Voltar')
        };
    }

    async clicarVoltar(){

        await this.click(this.locators.linkVoltar);
    }
}

export default CheckoutResumoPage;