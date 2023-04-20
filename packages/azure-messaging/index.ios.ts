import { AzureMessagingCommon } from './common';

export class AzureMessaging extends AzureMessagingCommon {
  delegate: MSNotificationHubDelegateImpl;

  public init(connectionString: string, hubName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.delegate = MSNotificationHubDelegateImpl.initWithOwner(new WeakRef(this));
      MSNotificationHub.setDelegate(this.delegate);
      MSNotificationHub.startWithConnectionStringHubName(connectionString, hubName);
      resolve();
    });
  }
}

@NativeClass()
class MSNotificationHubDelegateImpl extends NSObject implements MSNotificationHubDelegate {
  static ObjCProtocols = [MSNotificationHubDelegate];
  owner: WeakRef<AzureMessaging>;

  static initWithOwner(owner: WeakRef<AzureMessaging>) {
    const delegate = <MSNotificationHubDelegateImpl>MSNotificationHubDelegateImpl.new();
    delegate.owner = owner;
    return delegate;
  }
  notificationHubDidReceivePushNotification?(notificationHub: MSNotificationHub, message: MSNotificationHubMessage): void {
    // console.log('notificationHubDidReceivePushNotification', message);
    const owner = this.owner.deref();
    if (owner) {
      owner.notify({
        eventName: AzureMessaging.receivedEvent,
        object: owner,
        ios: message,
        data: {
          title: message.title,
          body: message.body,
        },
      });
    }
  }

  notificationHubDidRequestAuthorizationError?(notificationHub: MSNotificationHub, granted: boolean, error: NSError): void {
    // console.log('notificationHubDidRequestAuthorizationError, was granted?', granted, ' ...did it have an error?', error, 'Hub', notificationHub);
    const owner = this.owner.deref();
    if (owner) {
      owner.notify({
        eventName: AzureMessaging.authorizationEvent,
        object: owner,
        ios: error,
        data: granted,
      });
    }
  }
}
