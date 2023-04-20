import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AzureMessagingComponent } from './azure-messaging.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AzureMessagingComponent }])],
  declarations: [AzureMessagingComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AzureMessagingModule {}
