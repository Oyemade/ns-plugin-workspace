import { Component, NgZone } from '@angular/core';
import { DemoSharedNsAzurePushNotification } from '@demo/shared';
import { } from 'ns-azure-push-notification';

@Component({
	selector: 'demo-ns-azure-push-notification',
	templateUrl: 'ns-azure-push-notification.component.html',
})
export class NsAzurePushNotificationComponent {
  
  demoShared: DemoSharedNsAzurePushNotification;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsAzurePushNotification();
  }

}