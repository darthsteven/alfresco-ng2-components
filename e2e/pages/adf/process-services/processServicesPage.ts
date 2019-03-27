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

import { AppNavigationBarPage } from './appNavigationBarPage';

import { element, by } from 'protractor';
import { BrowserVisibility } from '@alfresco/adf-testing';

export class ProcessServicesPage {

    apsAppsContainer = element(by.css('div[class="adf-app-listgrid ng-star-inserted"]'));
    taskApp = element(by.css('mat-card[title="Task App"]'));
    iconTypeLocator = by.css('mat-icon[class*="card-logo-icon"]');
    descriptionLocator = by.css('mat-card-subtitle[class*="subtitle"]');

    checkApsContainer() {
        BrowserVisibility.waitUntilElementIsVisible(this.apsAppsContainer);
    }

    goToApp(applicationName) {
        const app = element(by.css('mat-card[title="' + applicationName + '"]'));
        BrowserVisibility.waitUntilElementIsVisible(app);
        app.click();
        return new AppNavigationBarPage();
    }

    goToTaskApp() {
        BrowserVisibility.waitUntilElementIsVisible(this.taskApp);
        this.taskApp.click();
        return new AppNavigationBarPage();
    }

    getAppIconType(applicationName) {
        const app = element(by.css('mat-card[title="' + applicationName + '"]'));
        BrowserVisibility.waitUntilElementIsVisible(app);
        const iconType = app.element(this.iconTypeLocator);
        BrowserVisibility.waitUntilElementIsVisible(iconType);
        return iconType.getText();
    }

    getBackgroundColor(applicationName) {
        const app = element(by.css('mat-card[title="' + applicationName + '"]'));
        BrowserVisibility.waitUntilElementIsVisible(app);
        return app.getCssValue('background-color');
    }

    getDescription(applicationName) {
        const app = element(by.css('mat-card[title="' + applicationName + '"]'));
        BrowserVisibility.waitUntilElementIsVisible(app);
        const description = app.element(this.descriptionLocator);
        BrowserVisibility.waitUntilElementIsVisible(description);
        return description.getText();
    }

    checkAppIsNotDisplayed(applicationName) {
        const app = element(by.css('mat-card[title="' + applicationName + '"]'));
        return BrowserVisibility.waitUntilElementIsNotOnPage(app);
    }

    checkAppIsDisplayed(applicationName) {
        const app = element(by.css('mat-card[title="' + applicationName + '"]'));
        return BrowserVisibility.waitUntilElementIsVisible(app);
    }

}
