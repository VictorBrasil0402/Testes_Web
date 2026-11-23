import { By } from 'selenium-webdriver';

import BasePage from './BasePage.js';

class ReservaPage extends BasePage{

    constructor(driver){

        super(driver);

        this.locators = {

            flightsTitle: By.css('h3'),

            chooseFlightButton: By.css('.table input[type="submit"]')
        };
    }

    async selecionarVoo(){

        await this.click(this.locators.chooseFlightButton);
    }
}

export default ReservaPage;