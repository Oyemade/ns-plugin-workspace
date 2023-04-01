import { AzurePushNotificationCommon } from './common';
import { Application, Utils } from '@nativescript/core';

export class AzurePushNotification implements AzurePushNotificationCommon {
  delegate: MSNotificationHubDelegateImpl;

  public init(connectionString: string, hubName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.delegate = MSNotificationHubDelegateImpl.initWithOwner(new WeakRef(this));
      MSNotificationHub.setDelegate(this.delegate);
      MSNotificationHub.startWithConnectionStringHubName(connectionString, hubName);
      resolve();
    });
  }

  public register(deviceToken: string, tags: string[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // don't believe we need these - may auto register
      // MSNotificationHub.registerNativeWithDeviceToken_tags_completion(deviceToken, tags, (error) => {
      //   if (error) {
      //     reject(error.localizedDescription);
      //   } else {
      //     resolve();
      //   }
      // });
    });
  }

  public unregister(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // don't believe we need these - may auto register
      // this.notificationHub.unregisterAllWithDeviceToken_completion(UIDevice.currentDevice.identifierForVendor.UUIDString, (error) => {
      //   if (error) {
      //     reject(error.localizedDescription);
      //   } else {
      //     resolve();
      //   }
      // });
    });
  }
}

@NativeClass()
class MSNotificationHubDelegateImpl extends NSObject implements MSNotificationHubDelegate {
  static ObjCProtocols = [MSNotificationHubDelegate];
  owner: WeakRef<AzurePushNotification>;

  static initWithOwner(owner: WeakRef<AzurePushNotification>) {
    const delegate = <MSNotificationHubDelegateImpl>MSNotificationHubDelegateImpl.new();
    delegate.owner = owner;
    return delegate;
  }
  notificationHubDidReceivePushNotification?(notificationHub: MSNotificationHub, message: MSNotificationHubMessage): void {
    console.log('notificationHubDidReceivePushNotification', message);
  }

  notificationHubDidRequestAuthorizationError?(notificationHub: MSNotificationHub, granted: boolean, error: NSError): void {
    console.log('notificationHubDidRequestAuthorizationError, was granted?', granted, ' ...did it have an error?', error);
  }
}
