import { Observable } from '@nativescript/core';
import { AzurePushNotificationCommon } from './common';

export declare class AzurePushNotification extends Observable implements AzurePushNotificationCommon {
  init(connectionString: string, hubName: string): Promise<void>;
  register(deviceToken: string, tags: string[]): Promise<void>;
  unregister(): Promise<void>;
}
