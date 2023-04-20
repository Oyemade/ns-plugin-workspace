import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAzureMessaging } from '@demo/shared';
import {} from '@oyemade/azure-messaging';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAzureMessaging {}
