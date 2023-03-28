import { LabelMarqueeCommon, fadeLengthProperty, labelizeProperty } from './common';

export class LabelMarquee extends LabelMarqueeCommon {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  get ios(): MarqueeLabel {
    return this.nativeView;
  }

  createNativeView() {
    return MarqueeLabel.alloc().init();
  }

  initNativeView() {
    const nativeView = <MarqueeLabel>this.nativeView;
    nativeView.fadeLength = 10;
    nativeView.scrollDuration = 8;
  }

  [fadeLengthProperty.setNative](value: number) {
    this.ios.fadeLength = value;
  }

  [labelizeProperty.setNative](value: boolean) {
    this.ios.labelize = value;
  }
}
