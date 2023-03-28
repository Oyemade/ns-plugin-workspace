import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsAzurePushNotificationComponent } from './ns-azure-push-notification.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsAzurePushNotificationComponent }])],
  declarations: [NsAzurePushNotificationComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NsAzurePushNotificationModule {}
