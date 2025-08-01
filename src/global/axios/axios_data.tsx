import {AxiosError} from "axios";
import type {ReactNode} from "react";
import Alert from "react-bootstrap/Alert";


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

export interface ReplyHeader {
  code?: number | unknown;
  reason?: string | unknown;
  message?: string | unknown;
  metadata?: Record<string, string> | unknown;
}

export const GetReasonCodeFromReplyData = (replyData: ReplyHeader) => {
  const reasonCode = (replyData.metadata as Record<string, string>)?.reason || "0";
  return Number.parseInt(reasonCode) || replyData.code as number || 0;
}

export const GetReplyHeaderFromResponseData = (data: unknown): ReplyHeader => {
  const dataObj = typeof data === 'object' && data !== null ? data : {};
  return {
    code: (dataObj as Record<string, unknown>)?.code,
    reason: (dataObj as Record<string, unknown>)?.reason,
    message: (dataObj as Record<string, unknown>)?.message,
    metadata: (dataObj as Record<string, unknown>)?.metadata,
  }
}

export const GetTipMessage = (status: Status, replyHeader: ReplyHeader): string | ReactNode => {
  const reasonCode = GetReasonCodeFromReplyData(replyHeader);

  return (
    <Alert variant={"primary"}>
      {
        reasonCode > 0 ? (
          <p>
            {status.requestId && <>id：{status.requestId}<br/></>}
            code：{reasonCode}<br/>
            message：{(replyHeader.message as string)}
          </p>
        ) : (
          <p>
            {status.requestId && <>id：{status.requestId}<br/></>}
            code：{status.status}<br/>
            message：{status.statusText}
          </p>
        )
      }
    </Alert>
  );
}

