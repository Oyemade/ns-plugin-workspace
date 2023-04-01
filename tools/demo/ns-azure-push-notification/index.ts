import { DemoSharedBase } from '../utils';
// @ts-ignore
import { AzurePushNotification } from 'ns-azure-push-notification';

export class DemoSharedNsAzurePushNotification extends DemoSharedBase {
  azure: AzurePushNotification;

  constructor() {
    super();
    this.azure = new AzurePushNotification();
  }

  testIt() {
    console.log('test ns-azure-push-notification!');
    this.azure.init('abc', 'test').then(() => {
      console.log('init!');
    });
  }
}
