import { AzurePushNotificationCommon } from './common';

export class AzurePushNotification implements AzurePushNotificationCommon {
  init(connectionString: string, hubName: string): Promise<void> {
    return Promise.resolve();
  }
  register(deviceToken: string, tags: string[]): Promise<void> {
    return Promise.resolve();
  }
  unregister(): Promise<void> {
    return Promise.resolve();
  }
}
