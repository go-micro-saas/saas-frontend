import {AxiosError} from "axios";
import type {ReactNode} from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


export interface Status {
  requestId?: string;
  status?: number;
  statusText?: string;
}

export const GetStatusFromAxiosError = (error: AxiosError) => {
  return {
    requestId: error.response?.headers?.['x-kit-request-id'],
    status: error.response?.status,
    statusText: error.response?.statusText,
  }
}

export interface ReplyData {
  code?: number | unknown;
  reason?: string | unknown;
  message?: string | unknown;
  metadata?: Record<string, string> | unknown;
  data?: unknown;
}

export const GetReasonCodeFromReplyData = (replyData: ReplyData) => {
  const reasonCode = (replyData.metadata as Record<string, string>)?.reason || "0";
  return Number.parseInt(reasonCode) || replyData.code as number || 0;
}

export const GetReplyDataFromResponseData = (data: unknown): ReplyData => {
  const dataObj = typeof data === 'object' && data !== null ? data : {};
  return {
    code: (dataObj as Record<string, unknown>)?.code,
    reason: (dataObj as Record<string, unknown>)?.reason,
    message: (dataObj as Record<string, unknown>)?.message,
    metadata: (dataObj as Record<string, unknown>)?.metadata,
    data: (dataObj as Record<string, unknown>)?.data,
  }
}

export const GetTipMessage = (status: Status, replyData: ReplyData): string | ReactNode => {
  const reasonCode = GetReasonCodeFromReplyData(replyData);
  // 复制逻辑
  const handleCopy = (e: unknown) => {
    try {
      console.log("==> xxxx:", e)
      // 方法1：使用 Clipboard API（现代浏览器推荐）
      // await navigator.clipboard.writeText(value);
    } catch (err) {
      void err;
    }
  };

  return (

    <>
      {/* requestID */}
      {
        status.requestId && (
          <FloatingLabel
            controlId="statusRequestID"
            label="RequestID"
          >
            <Form.Control type="text" disabled={true}
                          onClick={(e) => handleCopy(e)}
                          value={status.requestId}/>
          </FloatingLabel>
        )
      }
      {/* status */}
      <FloatingLabel
        controlId="statusCodeText"
        label="Status"
      >
        <Form.Control type="text" disabled={true}
                      onClick={(e) => handleCopy(e)}
                      value={(status.status || "UNKNOWN") + " - " + (status.statusText || "NOT_CONTENT")}/>
      </FloatingLabel>
      {/* response */}
      {
        reasonCode > 0 && (
          <>
            <FloatingLabel
              controlId="replyDataCode"
              label="Code"
            >
              <Form.Control type="text" disabled={true}
                            onClick={(e) => handleCopy(e)}
                            value={reasonCode}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="replyDataMessage"
              label="Message"
            >
              <Form.Control as="textarea" disabled={true}
                            onClick={(e) => handleCopy(e)}
                            value={replyData.message as string}/>
            </FloatingLabel>
          </>
        )
      }
    </>
  );
}

