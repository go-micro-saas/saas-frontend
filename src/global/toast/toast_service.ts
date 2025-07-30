import {toastEventBus} from '@src/global/toast/toast_event_bus.ts';
import {type ToastOptions} from "@src/global/toast/toast_provider.tsx";

// 非钩子环境调用的toast工具函数
export const toast = {
  success: (options: ToastOptions) => {
    toastEventBus.emit('success', options);
  },
  error: (options: ToastOptions) => {
    toastEventBus.emit('error', options);
  },
  info: (options: ToastOptions) => {
    toastEventBus.emit('info', options);
  },
  warning: (options: ToastOptions) => {
    toastEventBus.emit('warning', options);
  }
};
