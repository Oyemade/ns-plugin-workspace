interface MSChangeTracking {
  isDirty: boolean;
}
declare var MSChangeTracking: {
  prototype: MSChangeTracking;
};

declare class MSInstallation extends NSObject implements MSChangeTracking, MSTaggable, NSCoding {
  static alloc(): MSInstallation; // inherited from NSObject

  static new(): MSInstallation; // inherited from NSObject

  expirationTime: Date;

  installationId: string;

  pushChannel: string;

  readonly templates: NSDictionary<string, MSInstallationTemplate>;

  userId: string;

  isDirty: boolean; // inherited from MSChangeTracking

  readonly tags: NSSet<string>; // inherited from MSTaggable

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  addTag(tag: string): boolean;

  addTags(tagsToAdd: NSArray<string> | string[]): boolean;

  clearTags(): void;

  encodeWithCoder(coder: NSCoder): void;

  getTemplateForKey(key: string): MSInstallationTemplate;

  initWithCoder(coder: NSCoder): this;

  removeTag(tag: string): boolean;

  removeTags(tagsToRemove: NSArray<string> | string[]): boolean;

  removeTemplateForKey(key: string): boolean;

  setTemplateForKey(template: MSInstallationTemplate, key: string): boolean;

  toJsonData(): NSData;
}

interface MSInstallationEnrichmentDelegate extends NSObjectProtocol {
  notificationHubWillEnrichInstallation?(notificationHub: MSNotificationHub, installation: MSInstallation): void;
}
declare var MSInstallationEnrichmentDelegate: {
  prototype: MSInstallationEnrichmentDelegate;
};

interface MSInstallationLifecycleDelegate extends NSObjectProtocol {
  notificationHubDidFailToSaveInstallationWithError?(notificationHub: MSNotificationHub, installation: MSInstallation, error: NSError): void;

  notificationHubDidSaveInstallation?(notificationHub: MSNotificationHub, installation: MSInstallation): void;
}
declare var MSInstallationLifecycleDelegate: {
  prototype: MSInstallationLifecycleDelegate;
};

interface MSInstallationManagementDelegate extends NSObjectProtocol {
  notificationHubWillUpsertInstallationCompletionHandler?(notificationHub: MSNotificationHub, installation: MSInstallation, completionHandler: (p1: NSError) => void): void;
}
declare var MSInstallationManagementDelegate: {
  prototype: MSInstallationManagementDelegate;
};

declare class MSInstallationTemplate extends NSObject implements MSChangeTracking, MSTaggable {
  static alloc(): MSInstallationTemplate; // inherited from NSObject

  static new(): MSInstallationTemplate; // inherited from NSObject

  body: string;

  readonly headers: NSDictionary<string, string>;

  isDirty: boolean; // inherited from MSChangeTracking

  readonly tags: NSSet<string>; // inherited from MSTaggable

  addTag(tag: string): boolean;

  addTags(tagsToAdd: NSArray<string> | string[]): boolean;

  clearTags(): void;

  getHeaderValueForKey(key: string): string;

  removeHeaderValueForKey(key: string): void;

  removeTag(tag: string): boolean;

  removeTags(tagsToRemove: NSArray<string> | string[]): boolean;

  setHeaderValueForKey(value: string, key: string): void;

  toDictionary(): NSDictionary<any, any>;
}

declare class MSNotificationHub extends NSObject {
  static addTag(tag: string): boolean;

  static addTags(tags: NSArray<string> | string[]): boolean;

  static alloc(): MSNotificationHub; // inherited from NSObject

  static clearTags(): void;

  static didFailToRegisterForRemoteNotificationsWithError(error: NSError): void;

  static didReceiveRemoteNotification(userInfo: NSDictionary<any, any>): void;

  static didRegisterForRemoteNotificationsWithDeviceToken(deviceToken: NSData): void;

  static getInstallationId(): string;

  static getPushChannel(): string;

  static getTags(): NSArray<string>;

  static getTemplateForKey(key: string): MSInstallationTemplate;

  static getTemplates(): NSDictionary<string, MSInstallationTemplate>;

  static getUserId(): string;

  static isEnabled(): boolean;

  static new(): MSNotificationHub; // inherited from NSObject

  static removeTag(tag: string): boolean;

  static removeTags(tags: NSArray<string> | string[]): boolean;

  static removeTemplateForKey(key: string): boolean;

  static setDelegate(delegate: MSNotificationHubDelegate): void;

  static setEnabled(isEnabled: boolean): void;

  static setEnrichmentDelegate(enrichmentDelegate: MSInstallationEnrichmentDelegate): void;

  static setLifecycleDelegate(lifecycleDelegate: MSInstallationLifecycleDelegate): void;

  static setTemplateForKey(template: MSInstallationTemplate, key: string): boolean;

  static setUserId(userId: string): void;

  static startWithConnectionStringHubName(connectionString: string, notificationHubName: string): void;

  static startWithConnectionStringHubNameOptions(connectionString: string, notificationHubName: string, options: MSNotificationHubOptions): void;

  static startWithInstallationManagement(managementDelegate: MSInstallationManagementDelegate): void;

  static startWithInstallationManagementOptions(managementDelegate: MSInstallationManagementDelegate, options: MSNotificationHubOptions): void;

  static willSaveInstallation(): void;
}

interface MSNotificationHubDelegate extends NSObjectProtocol {
  notificationHubDidReceivePushNotification?(notificationHub: MSNotificationHub, message: MSNotificationHubMessage): void;

  notificationHubDidRequestAuthorizationError?(notificationHub: MSNotificationHub, granted: boolean, error: NSError): void;
}
declare var MSNotificationHubDelegate: {
  prototype: MSNotificationHubDelegate;
};

declare class MSNotificationHubMessage extends NSObject {
  static alloc(): MSNotificationHubMessage; // inherited from NSObject

  static new(): MSNotificationHubMessage; // inherited from NSObject

  readonly body: string;

  readonly title: string;

  readonly userInfo: NSDictionary<any, any>;
}

declare class MSNotificationHubOptions extends NSObject {
  static alloc(): MSNotificationHubOptions; // inherited from NSObject

  static new(): MSNotificationHubOptions; // inherited from NSObject

  authorizationOptions: UNAuthorizationOptions;

  constructor(o: { authorizationOptions: UNAuthorizationOptions });

  initWithAuthorizationOptions(authorizationOptions: UNAuthorizationOptions): this;
}

interface MSTaggable {
  tags: NSSet<string>;

  addTag(tag: string): boolean;

  addTags(tagsToAdd: NSArray<string> | string[]): boolean;

  clearTags(): void;

  removeTag(tag: string): boolean;

  removeTags(tagsToRemove: NSArray<string> | string[]): boolean;
}
declare var MSTaggable: {
  prototype: MSTaggable;
};

declare class SBConnectionString extends NSObject {
  static alloc(): SBConnectionString; // inherited from NSObject

  static new(): SBConnectionString; // inherited from NSObject

  static stringWithEndpointFullAccessSecret(endpoint: NSURL, fullAccessSecret: string): string;

  static stringWithEndpointIssuerIssuerSecret(endpoint: NSURL, issuer: string, secret: string): string;

  static stringWithEndpointListenAccessSecret(endpoint: NSURL, listenAccessSecret: string): string;

  static stringWithEndpointSharedAccessKeyNameAccessSecret(endpoint: NSURL, keyName: string, secret: string): string;
}

declare class SBLocalStorage extends NSObject {
  static alloc(): SBLocalStorage; // inherited from NSObject

  static new(): SBLocalStorage; // inherited from NSObject

  deviceToken: string;

  isRefreshNeeded: boolean;

  constructor(o: { notificationHubPath: string });

  deleteAllRegistrations(): void;

  deleteWithRegistrationName(registrationName: string): void;

  getStoredRegistrationEntryWithRegistrationName(registrationName: string): StoredRegistrationEntry;

  initWithNotificationHubPath(notificationHubPath: string): this;

  refreshFinishedWithDeviceToken(newDeviceToken: string): void;

  updateWithRegistrationNameRegistrationIdETagDeviceToken(registrationName: string, registrationId: string, eTag: string, devToken: string): void;
}

declare class SBNotificationHub extends NSObject {
  static alloc(): SBNotificationHub; // inherited from NSObject

  static new(): SBNotificationHub; // inherited from NSObject

  constructor(o: { connectionString: string; notificationHubPath: string });

  initWithConnectionStringNotificationHubPath(connectionString: string, notificationHubPath: string): this;

  registerNativeWithDeviceTokenTagsCompletion(deviceToken: NSData, tags: NSSet<any>, completion: (p1: NSError) => void): void;

  registerNativeWithDeviceTokenTagsError(deviceToken: NSData, tags: NSSet<any>): boolean;

  registerTemplateWithDeviceTokenNameJsonBodyTemplateExpiryTemplatePriorityTemplateTagsCompletion(deviceToken: NSData, name: string, bodyTemplate: string, expiryTemplate: string, priorityTemplate: string, tags: NSSet<any>, completion: (p1: NSError) => void): void;

  registerTemplateWithDeviceTokenNameJsonBodyTemplateExpiryTemplatePriorityTemplateTagsError(deviceToken: NSData, templateName: string, bodyTemplate: string, expiryTemplate: string, priorityTemplate: string, tags: NSSet<any>): boolean;

  registerTemplateWithDeviceTokenNameJsonBodyTemplateExpiryTemplateTagsCompletion(deviceToken: NSData, name: string, bodyTemplate: string, expiryTemplate: string, tags: NSSet<any>, completion: (p1: NSError) => void): void;

  registerTemplateWithDeviceTokenNameJsonBodyTemplateExpiryTemplateTagsError(deviceToken: NSData, templateName: string, bodyTemplate: string, expiryTemplate: string, tags: NSSet<any>): boolean;

  unregisterAllWithDeviceTokenCompletion(deviceToken: NSData, completion: (p1: NSError) => void): void;

  unregisterAllWithDeviceTokenError(deviceToken: NSData): boolean;

  unregisterNativeWithCompletion(completion: (p1: NSError) => void): void;

  unregisterNativeWithError(): boolean;

  unregisterTemplateWithNameCompletion(name: string, completion: (p1: NSError) => void): void;

  unregisterTemplateWithNameError(name: string): boolean;
}

declare class SBTokenProvider extends NSObject {
  static alloc(): SBTokenProvider; // inherited from NSObject

  static new(): SBTokenProvider; // inherited from NSObject

  timeToExpireinMins: number;

  constructor(o: { connectionDictinary: NSDictionary<any, any> });

  initWithConnectionDictinary(connectionDictionary: NSDictionary<any, any>): this;

  setTokenWithRequestCompletion(request: NSMutableURLRequest, completion: (p1: NSError) => void): void;

  setTokenWithRequestError(request: NSMutableURLRequest): boolean;
}

declare class StoredRegistrationEntry extends NSObject {
  static alloc(): StoredRegistrationEntry; // inherited from NSObject

  static new(): StoredRegistrationEntry; // inherited from NSObject

  ETag: string;

  RegistrationId: string;

  RegistrationName: string;

  constructor(o: { string: string });

  initWithString(string: string): this;

  toString(): string;
}
