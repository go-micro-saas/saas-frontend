import React, {createContext, useContext, useState, useEffect, type ReactNode} from 'react';
import {Toast, ToastContainer} from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid';
import RelativeTime from "@src/global/time/RelativeTime.tsx";

// 定义 Toast 类型和选项
export type ToastType = 'success' | 'error' | 'info' | 'warning';
export const GetToastBg = (type: ToastType) => {
  const map = {
    success: 'success',
    error: 'danger',
    info: 'info',
    warning: 'warning'
  };
  return map[type] || 'info';
};
export const GetToastTitle = (type: ToastType) => {
  const map = {
    success: 'SUCCESS',
    error: 'ERROR',
    info: 'INFO',
    warning: 'WARNING'
  };
  return map[type] || 'INFO';
};

// toast 配置
export const defaultToastDuration = 1600

export interface ToastOptions {
  message: string;
  title?: string;
  duration?: number; // 显示时长(ms)，默认 defaultToastDuration
}

export interface ToastItem extends ToastOptions {
  id: string;
  type: ToastType;
  timestamp?: Date;
}

// 定义 Toast 服务接口
export interface ToastService {
  success: (options: ToastOptions) => void;
  error: (options: ToastOptions) => void;
  info: (options: ToastOptions) => void;
  warning: (options: ToastOptions) => void;
  clear: () => void;
}

// 创建上下文
const ToastContext = createContext<ToastService | undefined>(undefined);

// Toast 提供者组件
export const ToastProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  // 添加 Toast
  const addToast = (type: ToastType, options: ToastOptions) => {
    const toast: ToastItem = {
      id: uuidV4(),
      type,
      timestamp: new Date(),
      duration: defaultToastDuration,
      ...options,
    };
    setToasts(prev => [...prev, toast]);
  };

  // 移除单个 Toast
  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // 清除所有 Toast
  const clearAllToasts = () => {
    setToasts([]);
  };

  // 自动关闭 Toast
  useEffect(() => {
    const timers: number[] = [];
    toasts.forEach(toast => {
      const timer = setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
      timers.push(timer);
    });
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [toasts]);

  // 定义 Toast 服务方法
  const toastService: ToastService = {
    success: (options) => addToast('success', options),
    error: (options) => addToast('error', options),
    info: (options) => addToast('info', options),
    warning: (options) => addToast('warning', options),
    clear: clearAllToasts,
  };

  return (
    <ToastContext.Provider value={toastService}>
      {children}
      {/* Toast 容器 - 固定在右上角 */}
      <ToastContainer position="top-center" className="p-3">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            show={true}
            onClose={() => removeToast(toast.id)}
            bg={GetToastBg(toast.type)}
            delay={toast.duration} autohide
          >
            <Toast.Header closeButton>
              <strong className="me-auto">{toast.title || GetToastTitle(toast.type)}</strong>
              <small>
                {toast.timestamp && <RelativeTime date={toast.timestamp}/>}
              </small>
            </Toast.Header>
            <Toast.Body>
              {toast.message}
            </Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

// 自定义 Hook 用于调用 Toast
export const GetGlobalToast = (): ToastService => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
