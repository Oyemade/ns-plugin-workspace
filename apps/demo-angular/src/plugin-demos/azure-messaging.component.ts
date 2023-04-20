import { Component, NgZone } from '@angular/core';
import { DemoSharedAzureMessaging } from '@demo/shared';

@Component({
  selector: 'demo-azure-messaging',
  templateUrl: 'azure-messaging.component.html',
})
export class AzureMessagingComponent {
  demoShared: DemoSharedAzureMessaging;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAzureMessaging();
  }
}
