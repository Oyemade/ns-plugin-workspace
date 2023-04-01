import { AzurePushNotificationCommon } from './common';

export declare class AzurePushNotification implements NsAzurePushNotificationCommon {
  init(connectionString: string, hubName: string): Promise<void>;
  register(deviceToken: string, tags: string[]): Promise<void>;
  unregister(): Promise<void>;
}
