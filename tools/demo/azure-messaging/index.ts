import { DemoSharedBase } from '../utils';
// @ts-ignore
import { AzureMessaging } from '@oyemade/azure-messaging';

export class DemoSharedAzureMessaging extends DemoSharedBase {
  azure: AzureMessaging;

  constructor() {
    super();
    this.azure = new AzureMessaging();
  }

  testIt() {
    console.log('test azure-messaging!');
    this.azure.init('abc', 'test').then(() => {
      console.log('init!');
    });

    this.azure.on('notification', (data) => {
      console.log('notification', data);
    });
  }
}
