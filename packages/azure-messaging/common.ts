import { Observable } from '@nativescript/core';

export class AzureMessagingCommon extends Observable {
  static receivedEvent: string = 'receivedEvent';
  static authorizationEvent: string = 'authorizationEvent';

  init(connectionString: string, hubName: string): Promise<void> {
    return Promise.resolve();
  }
}
