import { ITextWin32Props, IViewWin32Props } from '@office-iss/react-native-win32';
import { ImageProps } from 'react-native';
import { IFilterMask } from './filter.types';

// export core interface types
export type ITextProps = ITextWin32Props;
export type IViewProps = IViewWin32Props;
export type IImageProps = ImageProps;

const _viewMask: IFilterMask<IViewProps> = {
  children: true,
  acceptsKeyboardFocus: true,
  accessible: true,
  accessibilityActions: true,
  accessibilityAnnotation: true,
  accessibilityLabel: true,
  accessibilityLevel: true,
  accessibilityPositionInSet: true,
  accessibilityRole: true,
  accessibilitySetSize: true,
  accessibilityState: true,
  accessibilityStates: true,
  accessibilityHint: true,
  animationClass: true,
  hitSlop: true,
  onLayout: true,
  pointerEvents: true,
  removeClippedSubviews: true,
  style: true,
  testID: true,
  nativeID: true,
  keyDownEvents: true,
  keyUpEvents: true,
  onBlur: true,
  onBlurCapture: true,
  onFocus: true,
  onFocusCapture: true,
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onResponderEnd: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onAccessibilityAction: true,
  onAccessibilityTap: true,
  onResponderRelease: true,
  onResponderStart: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchStart: true,
  tooltip: true,
  type: true
};

const _textMask: IFilterMask<ITextProps> = {
  children: true,
  accessibilityActions: true,
  accessibilityHint: true,
  accessibilityLabel: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityStates: true,
  accessible: true,
  onAccessibilityAction: true,
  onAccessibilityTap: true,
  testID: true,
  allowFontScaling: true,
  ellipsizeMode: true,
  lineBreakMode: true,
  numberOfLines: true,
  onLayout: true,
  onLongPress: true,
  onPress: true,
  style: true,
  nativeID: true,
  maxFontSizeMultiplier: true,
  textStyle: true,
  tooltip: true
};

const _imageMask: IFilterMask<IImageProps> = {
  children: true,
  accessibilityActions: true,
  accessibilityComponentType: true,
  accessibilityElementsHidden: true,
  accessibilityHint: true,
  accessibilityIgnoresInvertColors: true,
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityStates: true,
  accessibilityTraits: true,
  accessibilityViewIsModal: true,
  accessible: true,
  onAccessibilityAction: true,
  onAccessibilityTap: true,
  importantForAccessibility: true,
  style: true,
  onError: true,
  onLayout: true,
  onLoad: true,
  onLoadEnd: true,
  onLoadStart: true,
  onMagicTap: true,
  onPartialLoad: true,
  onProgress: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  progressiveRenderingEnabled: true,
  source: true,
  resizeMethod: true,
  resizeMode: true,
  loadingIndicatorSource: true,
  testID: true,
  defaultSource: true,
  blurRadius: true,
  capInsets: true,
  width: true,
  height: true,
  fadeDuration: true
};

export function filterViewProps(propName: string): boolean {
  return _viewMask[propName];
}

export function filterTextProps(propName: string): boolean {
  return _textMask[propName];
}

export function filterImageProps(propName: string): boolean {
  return _imageMask[propName];
}
