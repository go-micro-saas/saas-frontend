import {AxiosError} from "axios";
import type {ReactNode} from "react";
import {Table} from "react-bootstrap";


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
  return Number.parseInt(reasonCode) || 0;
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
  return (
    <Table responsive>
      <tbody>
      {
        status.requestId && (
          <tr>
            <td>RequestId:</td>
            <td>{status.requestId}</td>
          </tr>
        )
      }
      <tr>
        <td>Status:</td>
        <td>{status.status || "UNKNOWN"} - {status.statusText || "NOT_CONTENT"}</td>
      </tr>
      </tbody>
    </Table>
  );
}

