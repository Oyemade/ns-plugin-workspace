export interface AzurePushNotificationCommon {
  init(connectionString: string, hubName: string): Promise<void>;
  register(deviceToken: string, tags: string[]): Promise<void>;
  unregister(): Promise<void>;
}
