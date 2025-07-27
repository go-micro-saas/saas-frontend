import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import React, {useState} from "react";
import {type Variant} from "react-bootstrap/types";
import RelativeTime from "@src/components/time/RelativeTime.tsx";

// 定义props类型
export interface ApiToastProps {
  isShow: boolean;
  onClose: () => void;
  message: string; // 自定义提示内容
  variant: Variant;
  timestamp?: Date;
}

// export const ApiAlert = {}

export const ApiToast: React.FC<ApiToastProps> = ({isShow, onClose, message, variant, timestamp}) => {
  return (
    <>
      <ToastContainer
        className="p-3"
        position={"top-center"}
      >
        <Toast
          bg={variant}
          onClose={onClose} show={isShow}
          delay={1600} autohide>
          <Toast.Header>
            <strong className="me-auto">Tips</strong>
            <small>{timestamp && <RelativeTime date={timestamp}/>}</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export const ApiToastExample: React.FC = () => {
  const [toastShow, setToastShow] = useState(false);
  const closeToast = () => {
    setToastShow(false)
  }
  const doShowToast = () => {
    setToastShow(true); // 显示提示
  };

  return (
    <div>
      <button onClick={doShowToast}>触发提示</button>
      <ApiToast
        isShow={toastShow}
        onClose={closeToast}
        message="操作成功！"
        variant="success"
      />
    </div>
  );
};