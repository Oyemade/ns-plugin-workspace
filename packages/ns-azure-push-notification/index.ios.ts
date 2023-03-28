import { AzurePushNotificationCommon } from './common';
import { Application, Utils } from '@nativescript/core';

declare const SBNotificationHub: any;
declare const UIDevice: any;

export class AzurePushNotification implements AzurePushNotificationCommon {
  private notificationHub: any;

  public init(connectionString: string, hubName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (Application.ios) {
        this.notificationHub = new SBNotificationHub(connectionString, hubName);
        resolve();
      } else {
        reject('This method is available only on iOS');
      }
    });
  }

  public register(deviceToken: string, tags: string[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (Application.ios) {
        this.notificationHub.registerNativeWithDeviceToken_tags_completion(deviceToken, tags, (error) => {
          if (error) {
            reject(error.localizedDescription);
          } else {
            resolve();
          }
        });
      } else {
        reject('This method is available only on iOS');
      }
    });
  }

  public unregister(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (Application.ios) {
        this.notificationHub.unregisterAllWithDeviceToken_completion(UIDevice.currentDevice.identifierForVendor.UUIDString, (error) => {
          if (error) {
            reject(error.localizedDescription);
          } else {
            resolve();
          }
        });
      } else {
        reject('This method is available only on iOS');
      }
    });
  }
}

// const appDelegate = UIApplication.sharedApplication.delegate as any as UIResponder & UIApplicationDelegate;

// // Store original implementations
// const originalDidRegisterForRemoteNotificationsWithDeviceToken = appDelegate.applicationDidRegisterForRemoteNotificationsWithDeviceToken;
// const originalDidFailToRegisterForRemoteNotificationsWithError = appDelegate.applicationDidFailToRegisterForRemoteNotificationsWithError;

// // Override the methods to handle push notifications registration
// appDelegate.applicationDidRegisterForRemoteNotificationsWithDeviceToken = function (application: UIApplication, deviceToken: NSData) {
//   const pushPlugin = new AzurePushNotification();
//   const deviceTokenString = deviceToken.description.replace(/[<> ]/g, '');
//   pushPlugin.register(deviceTokenString, ['tag1', 'tag2']).catch(console.error);

//   if (originalDidRegisterForRemoteNotificationsWithDeviceToken) {
//     originalDidRegisterForRemoteNotificationsWithDeviceToken.call(this, application, deviceToken);
//   }
// };

// appDelegate.applicationDidFailToRegisterForRemoteNotificationsWithError = function (application: UIApplication, error: NSError) {
//   console.error('Failed to register for remote notifications:', error.localizedDescription);

//   if (originalDidFailToRegisterForRemoteNotificationsWithError) {
//     originalDidFailToRegisterForRemoteNotificationsWithError.call(this, application, error);
//   }
// };

class MyAppDelegate extends UIResponder {
  public static ObjCProtocols = [UIApplicationDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
    if (launchOptions) {
      const remoteNotification = launchOptions.objectForKey(UIApplicationLaunchOptionsRemoteNotificationKey);
      if (remoteNotification) {
        // Handle remote notification received on app launch
        console.log('Remote notification received on app launch:', remoteNotification);
      }
    }

    return true;
  }

  applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void {
    // Register the device token with your notification hub
    const deviceTokenString = deviceToken.description.replace(/[<>]/g, '').replace(/ /g, '');
    console.log('Device token:', deviceTokenString);

    // Instantiate your AzurePushNotifications class and call the register method
  }

  applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void {
    console.error('Failed to register for remote notifications:', error.localizedDescription);
  }

  applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void {
    console.log('Remote notification received:', userInfo);
    // Handle remote notification
  }
}

// Register the AppDelegate
Application.ios.delegate = MyAppDelegate;
