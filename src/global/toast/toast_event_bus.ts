import {type ToastType, type ToastOptions} from "@src/global/toast/toast_provider.tsx";

export type ToastEvenFn = (options: ToastOptions) => void

// 1. 事件总线：用于非React环境与React组件通信
class EventBus {
  private listeners: Record<string, ToastEvenFn> = {};

  // 注册事件监听
  on(event: ToastType, callback: ToastEvenFn) {
    this.listeners[event] = callback;
  }

  // 触发事件
  emit(event: ToastType, options: ToastOptions) {
    if (this.listeners[event]) {
      this.listeners[event](options);
    }
  }

  // 移除事件监听
  remove(event: ToastType) {
    this.listeners[event] = (options: ToastOptions) => {
      void options;
    };
  }
}

// 实例化事件总线（全局唯一）
export const toastEventBus = new EventBus();
