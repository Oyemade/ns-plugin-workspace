import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DemoSharedAzureMessaging } from '@demo/shared';
@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demoShared = new DemoSharedAzureMessaging();
  constructor() {
    this.demoShared.testIt();
  }

  demos = [
    {
      name: 'azure-messaging',
    },
  ];
}
