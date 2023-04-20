import { Utils } from '@nativescript/core';
import { AzurePushNotificationCommon } from './common';

export class AzurePushNotification implements AzurePushNotificationCommon {
  notificationInstance: com.microsoft.windowsazure.messaging.NotificationHub;

  init(connectionString: string, hubName: string): Promise<void> {
    this.notificationInstance = new com.microsoft.windowsazure.messaging.NotificationHub(hubName, connectionString, Utils.android.getApplicationContext());
    // this.notificationInstance.setListener(new com.microsoft.windowsazure.messaging.NotificationListener({
    //   onPushNotificationReceived(context: android.content.Context, message: any) {
    //     console.log('onPushNotificationReceived', message);
    //   }
    // }));

    return Promise.resolve();
  }

  register(deviceToken: string, tags: string[]): Promise<void> {
    return Promise.resolve();
  }
  unregister(): Promise<void> {
    return Promise.resolve();
  }
}

// NotificationHub.setListener(new NotificationListener(){
//     @Override
//     public void onPushNotificationReceived(Context context, NotificationMessage message) {
//         // Render the notification, fire an Intent, update device settings, whatever your application needs.
//     }
// });
