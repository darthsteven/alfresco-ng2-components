/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserVisibility } from '@alfresco/adf-testing';
import { element, by } from 'protractor';

export class ErrorPage {

    errorPageCode = element(by.css('adf-error-content .adf-error-content-code'));
    errorPageTitle = element(by.css('adf-error-content .adf-error-content-title'));
    errorPageDescription = element(by.css('adf-error-content .adf-error-content-description'));
    backButton = element(by.id('adf-return-button'));
    secondButton = element(by.id('adf-secondary-button'));

    clickBackButton() {
        BrowserVisibility.waitUntilElementIsVisible(this.backButton);
        this.backButton.click();
    }

    clickSecondButton() {
        BrowserVisibility.waitUntilElementIsVisible(this.secondButton);
        this.secondButton.click();
    }

    checkErrorCode() {
        BrowserVisibility.waitUntilElementIsVisible(this.errorPageCode);
    }

    getErrorCode() {
        BrowserVisibility.waitUntilElementIsVisible(this.errorPageCode);
        return this.errorPageCode.getText();
    }

    getErrorTitle() {
        BrowserVisibility.waitUntilElementIsVisible(this.errorPageTitle);
        return this.errorPageTitle.getText();
    }

    getErrorDescription() {
        BrowserVisibility.waitUntilElementIsVisible(this.errorPageDescription);
        return this.errorPageDescription.getText();
    }
}
