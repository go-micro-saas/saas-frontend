import {type ToastType, type ToastOptions} from "@src/global/toast/global_toast.tsx";


export interface ToastEvent {
  type: ToastType;
  trigger: (options: ToastOptions) => void
}

// 1. 事件总线：用于非React环境与React组件通信
class EventBus {
  private listeners: Record<string, Function[]> = {};

  // 注册事件监听
  on(event: ToastType, callback: Function) {
    console.log("on: ", event);
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  // 触发事件
  emit(event: ToastType, ...args: ToastOptions[]) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(...args));
    }
  }
}

// 实例化事件总线（全局唯一）
export const toastEventBus = new EventBus();
