declare module com {
  export module microsoft {
    export module windowsazure {
      export module messaging {
        export class AdmNativeRegistration extends com.microsoft.windowsazure.messaging.Registration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.AdmNativeRegistration>;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
        }
        export class AdmTemplateRegistration extends com.microsoft.windowsazure.messaging.TemplateRegistration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.AdmTemplateRegistration>;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
        }
        export class BaiduNativeRegistration extends com.microsoft.windowsazure.messaging.Registration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.BaiduNativeRegistration>;
          public mUserId: string;
          public mChannelId: string;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
          public getChannelId(): string;
          public getUserId(): string;
        }
        export class BaiduTemplateRegistration extends com.microsoft.windowsazure.messaging.TemplateRegistration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.BaiduTemplateRegistration>;
          public mUserId: string;
          public mChannelId: string;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
          public getChannelId(): string;
          public getUserId(): string;
        }
        export class BuildConfig {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static FLAVOR: string;
          public static VERSION_CODE: number;
          public static VERSION_NAME: string;
          public constructor();
        }
        export class Connection {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.Connection>;
          public executeRequest(param0: string, param1: string, param2: string, param3: string, param4: androidNative.Array<java.util.AbstractMap.SimpleEntry<string, string>>): string;
          public constructor(param0: string);
          public executeRequest(param0: string, param1: string, param2: string, param3: string, param4: string, param5: androidNative.Array<java.util.AbstractMap.SimpleEntry<string, string>>): string;
        }
        export class ConnectionString {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.ConnectionString>;
          public constructor();
          public static createUsingSharedAccessKeyWithListenAccess(param0: java.net.URI, param1: string): string;
          public static createUsingSharedAccessKey(param0: java.net.URI, param1: string, param2: string): string;
          public static createUsingSharedAccessKeyWithFullAccess(param0: java.net.URI, param1: string): string;
        }
        export class ConnectionStringParser {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.ConnectionStringParser>;
          public static parse(param0: string): java.util.Map<string, string>;
        }
        export module ConnectionStringParser {
          export class ParserState {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState>;
            public static EXPECT_KEY: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
            public static EXPECT_ASSIGNMENT: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
            public static EXPECT_VALUE: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
            public static EXPECT_SEPARATOR: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
            public static valueOf(param0: string): com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
            public static values(): androidNative.Array<com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState>;
          }
        }
        export class FcmNativeRegistration extends com.microsoft.windowsazure.messaging.Registration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.FcmNativeRegistration>;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
        }
        export class FcmTemplateRegistration extends com.microsoft.windowsazure.messaging.TemplateRegistration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.FcmTemplateRegistration>;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
        }
        export class GcmNativeRegistration extends com.microsoft.windowsazure.messaging.Registration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.GcmNativeRegistration>;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
        }
        export class GcmTemplateRegistration extends com.microsoft.windowsazure.messaging.TemplateRegistration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.GcmTemplateRegistration>;
          public getSpecificPayloadNodeName(): string;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
        }
        export class NotificationHub {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.NotificationHub>;
          public registerBaidu(param0: string, param1: string, param2: androidNative.Array<string>): com.microsoft.windowsazure.messaging.Registration;
          public constructor(param0: string, param1: string, param2: globalAndroid.content.Context);
          public registerBaiduTemplate(param0: string, param1: string, param2: string, param3: string, param4: androidNative.Array<string>): com.microsoft.windowsazure.messaging.TemplateRegistration;
          public unregisterTemplate(param0: string): void;
          public register(param0: string, param1: androidNative.Array<string>): com.microsoft.windowsazure.messaging.Registration;
          public setConnectionString(param0: string): void;
          public unregisterAll(param0: string): void;
          public getConnectionString(): string;
          public unregister(): void;
          public registerTemplate(param0: string, param1: string, param2: string, param3: androidNative.Array<string>): com.microsoft.windowsazure.messaging.TemplateRegistration;
          public getNotificationHubPath(): string;
          public setNotificationHubPath(param0: string): void;
        }
        export class NotificationHubException {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.NotificationHubException>;
          public getStatusCode(): number;
        }
        export class NotificationHubResourceNotFoundException extends com.microsoft.windowsazure.messaging.NotificationHubException {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.NotificationHubResourceNotFoundException>;
        }
        export class NotificationHubUnauthorizedException extends com.microsoft.windowsazure.messaging.NotificationHubException {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.NotificationHubUnauthorizedException>;
        }
        export class PnsSpecificRegistrationFactory {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.PnsSpecificRegistrationFactory>;
          public static getInstance(): com.microsoft.windowsazure.messaging.PnsSpecificRegistrationFactory;
          public isTemplateRegistration(param0: string): boolean;
          public createTemplateRegistration(param0: string): com.microsoft.windowsazure.messaging.TemplateRegistration;
          public setRegistrationType(param0: com.microsoft.windowsazure.messaging.Registration.RegistrationType): void;
          public createNativeRegistration(param0: string): com.microsoft.windowsazure.messaging.Registration;
          public getAPIOrigin(): string;
          public getPNSHandleFieldName(): string;
        }
        export abstract class Registration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.Registration>;
          public mRegistrationType: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
          public mRegistrationId: string;
          public mNotificationHubPath: string;
          public mExpirationTime: string;
          public mPNSHandle: string;
          public mName: string;
          public mTags: java.util.List<string>;
          public mURI: string;
          public mUpdated: string;
          public mETag: string;
          public static getNodeValue(param0: org.w3c.dom.Element, param1: string): string;
          public appendTagsNode(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
          public getURI(): string;
          public getSpecificPayloadNodeName(): string;
          public getRegistrationId(): string;
          public getNotificationHubPath(): string;
          public appendNodeWithValue(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element, param2: string, param3: string): void;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public getTags(): java.util.List<string>;
          public getPNSHandle(): string;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
          public getRegistrationType(): com.microsoft.windowsazure.messaging.Registration.RegistrationType;
          public getExpirationTime(): java.util.Date;
        }
        export module Registration {
          export class RegistrationType {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.Registration.RegistrationType>;
            public static unknown: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
            public static gcm: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
            public static fcm: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
            public static adm: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
            public static baidu: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
            public static valueOf(param0: string): com.microsoft.windowsazure.messaging.Registration.RegistrationType;
            public static values(): androidNative.Array<com.microsoft.windowsazure.messaging.Registration.RegistrationType>;
          }
        }
        export class RegistrationGoneException {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.RegistrationGoneException>;
        }
        export abstract class TemplateRegistration extends com.microsoft.windowsazure.messaging.Registration {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.TemplateRegistration>;
          public loadCustomXmlData(param0: org.w3c.dom.Element): void;
          public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
          public getTemplateName(): string;
          public getBodyTemplate(): string;
        }
        export class Utils {
          public static class: java.lang.Class<com.microsoft.windowsazure.messaging.Utils>;
          public static isNullOrWhiteSpace(param0: string): boolean;
          public static getXmlString(param0: org.w3c.dom.Element): string;
        }
        export module notificationhubs {
          export class Installation extends com.microsoft.windowsazure.messaging.notificationhubs.Taggable {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.Installation>;
            public addTag(param0: string): boolean;
            public setExpiration(param0: java.util.Date): void;
            public getUserId(): string;
            public constructor();
            public addTags(param0: java.util.Collection<any>): boolean;
            public clearTags(): void;
            public setPushChannel(param0: string): void;
            public removeTags(param0: java.util.Collection<any>): boolean;
            public getTags(): java.lang.Iterable<string>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getPushChannel(): string;
            public setUserId(param0: string): void;
            public getInstallationId(): string;
            public removeTag(param0: string): boolean;
            public setTemplates(param0: java.util.Map<string, com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate>): void;
            public setInstallationId(param0: string): void;
            public getTemplates(): java.util.Map<string, com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate>;
            public getExpiration(): java.util.Date;
          }
          export class IdAssignmentVisitor extends com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.IdAssignmentVisitor>;
            public constructor(param0: globalAndroid.content.Context);
            public setInstallationId(param0: string): void;
            public getInstallationId(): string;
            public visitInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void;
          }
          export class AuthorizationException extends com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubException {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.AuthorizationException>;
          }
          export class InstallationAdapter {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter>;
            /**
             * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { saveInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener, param2: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): void });
            public constructor();
            public saveInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener, param2: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): void;
          }
          export module InstallationAdapter {
            export class ErrorListener {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener>;
              /**
               * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter$ErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onInstallationSaveError(param0: java.lang.Exception): void });
              public constructor();
              public onInstallationSaveError(param0: java.lang.Exception): void;
            }
            export class Listener {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener>;
              /**
               * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onInstallationSaved(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void });
              public constructor();
              public onInstallationSaved(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void;
            }
            export class ConnectionString {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.ConnectionString>;
              public getSharedAccessKey(): string;
              public getEndpoint(): string;
              public getSharedAccessKeyName(): string;
              public equals(param0: any): boolean;
              public static parse(param0: string): com.microsoft.windowsazure.messaging.notificationhubs.ConnectionString;
              public toString(): string;
            }
            export class BasicNotificationMessage extends com.microsoft.windowsazure.messaging.notificationhubs.NotificationMessage {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.BasicNotificationMessage>;
              public getBody(): string;
              public getData(): java.util.Map<string, string>;
              public constructor(param0: string, param1: string, param2: java.util.Map<string, string>);
              public getTitle(): string;
            }
            export class ClientException extends com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubException {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.ClientException>;
            }
            export class DebounceInstallationAdapter extends com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.DebounceInstallationAdapter>;
              public saveInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener, param2: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): void;
              public constructor(param0: globalAndroid.content.Context, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter, param2: number);
              public constructor(param0: globalAndroid.content.Context, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter);
            }
            export class FirebaseReceiver {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.FirebaseReceiver>;
              public constructor(param0: com.microsoft.windowsazure.messaging.notificationhubs.NotificationHub);
              public onNewToken(param0: string): void;
              public constructor();
              public onCreate(): void;
              public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
            }
          }
          export class InstallationPutRequest {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.InstallationPutRequest>;
            public getHeaders(): java.util.Map<string, string>;
            public constructor(param0: com.microsoft.windowsazure.messaging.notificationhubs.ConnectionString, param1: string, param2: com.microsoft.windowsazure.messaging.notificationhubs.Installation, param3: com.android.volley.Response.Listener<org.json.JSONObject>, param4: com.android.volley.Response.ErrorListener);
            public static getBody(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): org.json.JSONObject;
            public static wrapErrorListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): com.android.volley.Response.ErrorListener;
            public static wrapListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener, param1: com.microsoft.windowsazure.messaging.notificationhubs.Installation): com.android.volley.Response.Listener;
            public parseNetworkResponse(param0: com.android.volley.NetworkResponse): com.android.volley.Response<org.json.JSONObject>;
          }
          export class InstallationTemplate {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate>;
            public constructor();
            public removeTag(param0: string): void;
            public clearTags(): void;
            public removeTags(param0: java.util.List<string>): void;
            public addTag(param0: string): void;
            public getTags(): java.lang.Iterable<string>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public setBody(param0: string): void;
            public getBody(): string;
            public getHeaders(): java.util.Map<string, string>;
            public addTags(param0: java.util.List<string>): void;
            public removeHeader(param0: string): void;
            public setHeader(param0: string, param1: string): void;
          }
          export class InstallationVisitor {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor>;
            /**
             * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { visitInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void });
            public constructor();
            public visitInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void;
          }
          export class NetworkStateHelper {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NetworkStateHelper>;
            public static getSharedInstance(param0: globalAndroid.content.Context): com.microsoft.windowsazure.messaging.notificationhubs.NetworkStateHelper;
            public constructor(param0: globalAndroid.content.Context);
            public close(): void;
            public reopen(): void;
            public static unsetInstance(): void;
            public addListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.NetworkStateHelper.Listener): void;
            public isNetworkConnected(): boolean;
            public removeListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.NetworkStateHelper.Listener): void;
          }
          export module NetworkStateHelper {
            export class ConnectivityReceiver {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NetworkStateHelper.ConnectivityReceiver>;
              public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            }
            export class Listener {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NetworkStateHelper.Listener>;
              /**
               * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.NetworkStateHelper$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNetworkStateUpdated(param0: boolean): void });
              public constructor();
              public onNetworkStateUpdated(param0: boolean): void;
            }
          }
          export class NotificationHub {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NotificationHub>;
            public static getPushChannel(): string;
            public removeInstanceTemplate(param0: string): boolean;
            public getInstancePushChannel(): string;
            public setInstanceUserId(param0: string): boolean;
            public getInstanceInstallationId(): string;
            public addInstanceTags(param0: java.util.Collection<any>): boolean;
            public static setInstallationSaveFailureListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): void;
            public static getTemplate(param0: string): com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate;
            public static setInstallationId(param0: string): void;
            public static clearTags(): void;
            public static getInstallationId(): string;
            public static setEnabled(param0: boolean): void;
            public static setInstallationSavedListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener): void;
            public setInstanceListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.NotificationListener): void;
            public removeInstanceTags(param0: java.util.Collection<any>): boolean;
            public setInstanceInstallationSaveFailureListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): void;
            public static removeTags(param0: java.util.Collection<any>): boolean;
            public static setTemplate(param0: string, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate): void;
            public useInstanceVisitor(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor): void;
            public static removeTemplate(param0: string): boolean;
            public static useVisitor(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor): void;
            public removeInstanceTag(param0: string): boolean;
            public getInstanceTemplate(param0: string): com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate;
            public static start(param0: globalAndroid.app.Application, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter): void;
            public addInstanceTag(param0: string): boolean;
            public isInstanceEnabled(): boolean;
            public beginInstanceInstallationUpdate(): void;
            public static getUserId(): string;
            public static getTags(): java.lang.Iterable<string>;
            public static isEnabled(): boolean;
            public setInstanceInstallationId(param0: string): void;
            public static addTag(param0: string): boolean;
            public getInstanceTags(): java.lang.Iterable<string>;
            public setInstanceTemplate(param0: string, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate): void;
            public static setListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.NotificationListener): void;
            public setInstanceInstallationSavedListener(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener): void;
            public clearInstanceTags(): void;
            public setInstanceEnabled(param0: boolean): void;
            public static setUserId(param0: string): boolean;
            public static addTags(param0: java.util.Collection<any>): boolean;
            public static removeTag(param0: string): boolean;
            public static getInstance(): com.microsoft.windowsazure.messaging.notificationhubs.NotificationHub;
            public static beginInstallationUpdate(): void;
            public static start(param0: globalAndroid.app.Application, param1: string, param2: string): void;
            public getInstanceUserId(): string;
          }
          export class NotificationHubException {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubException>;
            public getStatusCode(): number;
            public getResponseBody(): string;
            public getResponseHeaders(): java.util.Map<string, string>;
          }
          export class NotificationHubExtension {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubExtension>;
            public static fetchPushChannel(param0: com.microsoft.windowsazure.messaging.notificationhubs.NotificationHub): void;
          }
          export class NotificationHubInstallationAdapter extends com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubInstallationAdapter>;
            public saveInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener, param2: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): void;
            public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
          }
          export module NotificationHubInstallationAdapter {
            export class RetrySession extends java.lang.Object {
              public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubInstallationAdapter.RetrySession>;
              public onResponse(param0: org.json.JSONObject): void;
              public onErrorResponse(param0: com.android.volley.VolleyError): void;
              public constructor(param0: com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubInstallationAdapter, param1: com.microsoft.windowsazure.messaging.notificationhubs.Installation, param2: number, param3: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener, param4: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener);
            }
          }
          export class NotificationListener {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NotificationListener>;
            /**
             * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.NotificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onPushNotificationReceived(param0: globalAndroid.content.Context, param1: com.microsoft.windowsazure.messaging.notificationhubs.NotificationMessage): void });
            public constructor();
            public onPushNotificationReceived(param0: globalAndroid.content.Context, param1: com.microsoft.windowsazure.messaging.notificationhubs.NotificationMessage): void;
          }
          export class NotificationMessage {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.NotificationMessage>;
            /**
             * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.NotificationMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getTitle(): string; getBody(): string; getData(): java.util.Map<string, string> });
            public constructor();
            public getBody(): string;
            public getData(): java.util.Map<string, string>;
            public getTitle(): string;
          }
          export class PushChannelValidationAdapter extends com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.PushChannelValidationAdapter>;
            public static DEFAULT_MAX_RETRIES: number;
            public saveInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.Listener, param2: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter.ErrorListener): void;
            public constructor(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter, param1: number);
            public constructor(param0: com.microsoft.windowsazure.messaging.notificationhubs.InstallationAdapter);
          }
          export class PushChannelVisitor extends com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.PushChannelVisitor>;
            public constructor(param0: globalAndroid.content.Context);
            public setPushChannel(param0: string): void;
            public getPushChannel(): string;
            public visitInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void;
          }
          export class ServerException extends com.microsoft.windowsazure.messaging.notificationhubs.NotificationHubException {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.ServerException>;
          }
          export class TagVisitor implements com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor, com.microsoft.windowsazure.messaging.notificationhubs.Taggable {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.TagVisitor>;
            public addTag(param0: string): boolean;
            public addTags(param0: java.util.Collection<any>): boolean;
            public constructor(param0: globalAndroid.content.Context);
            public clearTags(): void;
            public removeTags(param0: java.util.Collection<any>): boolean;
            public getTags(): java.lang.Iterable<string>;
            public removeTag(param0: string): boolean;
            public visitInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void;
          }
          export class Taggable {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.Taggable>;
            /**
             * Constructs a new instance of the com.microsoft.windowsazure.messaging.notificationhubs.Taggable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { addTag(param0: string): boolean; addTags(param0: java.util.Collection<any>): boolean; removeTag(param0: string): boolean; removeTags(param0: java.util.Collection<any>): boolean; getTags(): java.lang.Iterable<string>; clearTags(): void });
            public constructor();
            public addTag(param0: string): boolean;
            public addTags(param0: java.util.Collection<any>): boolean;
            public clearTags(): void;
            public removeTags(param0: java.util.Collection<any>): boolean;
            public getTags(): java.lang.Iterable<string>;
            public removeTag(param0: string): boolean;
          }
          export class TemplateVisitor extends com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.TemplateVisitor>;
            public removeTemplate(param0: string): boolean;
            public clearTemplates(): void;
            public constructor(param0: globalAndroid.content.Context, param1: java.util.Map<string, com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate>);
            public setTemplates(param0: java.util.Map<string, com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate>): void;
            public constructor(param0: globalAndroid.content.Context);
            public setTemplate(param0: string, param1: com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate): void;
            public removeTemplates(param0: java.util.List<string>): boolean;
            public getTemplate(param0: string): com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate;
            public visitInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void;
            public getTemplates(): java.lang.Iterable<java.util.Map.Entry<string, com.microsoft.windowsazure.messaging.notificationhubs.InstallationTemplate>>;
          }
          export class UserIdVisitor extends com.microsoft.windowsazure.messaging.notificationhubs.InstallationVisitor {
            public static class: java.lang.Class<com.microsoft.windowsazure.messaging.notificationhubs.UserIdVisitor>;
            public setUserId(param0: string): boolean;
            public getUserId(): string;
            public constructor(param0: globalAndroid.content.Context);
            public visitInstallation(param0: com.microsoft.windowsazure.messaging.notificationhubs.Installation): void;
          }
        }
      }
    }
  }
}

//Generics information:
