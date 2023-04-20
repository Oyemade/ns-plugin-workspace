import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AzurePushNotification } from 'ns-azure-push-notification';
@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  azurePushNotifications = new AzurePushNotification();
  constructor() {
    this.azurePushNotifications.init('Endpoint=sb://UPSNotifications.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=1BiPsxc6efJuEcSiho8Uij/KGO8OxWBGSbWX8zTbxy8=', 'UPSHub').then((x) => {
      console.log('Azure Push Notifications init', x);
    });

    this.azurePushNotifications.on('didReceiveNotification', (x) => {
      console.log('Azure Push Notifications didReceiveNotification', x);
    });
  }

  demos = [
    {
      name: 'ns-azure-push-notification',
    },
  ];
}
