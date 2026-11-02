import {By} from 'selenium-webdriver';

import BasePage from './BasePage.js';

class ProdutosPage extends BasePage{

    constructor(driver){

        super(driver);

        this.locators = {

            productsTitle: By.css('[data-test="title"]'),

            productImage: By.css('[data-test="inventory-list"] .inventory_item_img')
        };
    }

    async selecionarProduto(){

        await this.click(this.locators.productImage);
    }
}
export default ProdutosPage;