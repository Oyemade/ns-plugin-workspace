import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'nativescript-label-marquee', loadChildren: () => import('./plugin-demos/nativescript-label-marquee.module').then(m => m.NativescriptLabelMarqueeModule) },
	{ path: 'ns-azure-push-notification', loadChildren: () => import('./plugin-demos/ns-azure-push-notification.module').then(m => m.NsAzurePushNotificationModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
