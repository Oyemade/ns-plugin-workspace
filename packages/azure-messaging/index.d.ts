import { Observable } from '@nativescript/core';
import { AzureMessagingCommon } from './common';

export declare class AzureMessaging extends Observable implements AzureMessagingCommon {
  init(connectionString: string, hubName: string): Promise<void>;
  register(deviceToken: string, tags: string[]): Promise<void>;
  unregister(): Promise<void>;
}
