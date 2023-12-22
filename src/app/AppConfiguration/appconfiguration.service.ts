import { InjectionToken } from "@angular/core";
import { IAppConfiguration } from "./appconfiguration.interface";
import { environment } from '../../environments/environment';

export const APP_CONFIGURATION_SERVICE = new InjectionToken<IAppConfiguration>('App.Config');

export const APP_CONFIGURATION: IAppConfiguration = {
    ApiEndPoint: environment.apiEndPoint
}