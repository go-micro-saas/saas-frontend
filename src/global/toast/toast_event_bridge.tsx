import React from 'react';
import {toastEventBus} from '@src/global/toast/toast_event_bus.ts';
import {GetGlobalToast, type ToastOptions} from '@src/global/toast/toast_provider.tsx'; // 原有的hook

// 用于非钩子环境的"桥梁"组件
export const ToastEventBridge: React.FC = () => {
  const toast = GetGlobalToast(); // 在组件中安全调用hook

  // 监听事件总线的toast触发事件
  React.useEffect(() => {
    toastEventBus.on('success', (options: ToastOptions) => {
      toast.success(options);
    });
    toastEventBus.on('error', (options: ToastOptions) => {
      toast.error(options);
    });
    toastEventBus.on('info', (options: ToastOptions) => {
      toast.info(options);
    });
    toastEventBus.on('warning', (options: ToastOptions) => {
      toast.warning(options);
    });

    // 清理函数
    return () => {
      // 实际项目中可根据需要实现off方法
      // toastEventBus.remove('success');
      // toastEventBus.remove('error');
      // toastEventBus.remove('info');
      // toastEventBus.remove('warning');
    };
  }, [toast]);

  return null; // 该组件不渲染任何内容，仅作为事件桥梁
};

