import { Utils } from '@nativescript/core';
import { AzureMessagingCommon } from './common';

export class AzureMessaging extends AzureMessagingCommon {
  notificationInstance: com.microsoft.windowsazure.messaging.NotificationHub;

  init(connectionString: string, hubName: string): Promise<void> {
    this.notificationInstance = new com.microsoft.windowsazure.messaging.NotificationHub(hubName, connectionString, Utils.android.getApplicationContext());
    com.microsoft.windowsazure.messaging.notificationhubs.NotificationHub.setListener(
      new com.microsoft.windowsazure.messaging.notificationhubs.NotificationListener({
        onPushNotificationReceived(param0, param1) {
          console.log('onPushNotificationReceived', param0, param1);
        },
      })
    );

    return Promise.resolve();
  }
}
