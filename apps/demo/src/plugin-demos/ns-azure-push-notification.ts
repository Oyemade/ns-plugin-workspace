import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsAzurePushNotification } from '@demo/shared';
import { } from 'ns-azure-push-notification';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsAzurePushNotification {
	
}
