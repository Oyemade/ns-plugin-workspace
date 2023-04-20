import { Observable } from '@nativescript/core';
import { AzureMessagingCommon } from './common';

export declare class AzureMessaging extends AzureMessagingCommon {
  init(connectionString: string, hubName: string): Promise<void>;
}
