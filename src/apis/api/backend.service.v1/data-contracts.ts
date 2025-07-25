/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** PingResp 响应 */
export interface Apibackendresourcev1PingResp {
  /** @format int32 */
  code?: number;
  reason?: string;
  message?: string;
  metadata?: Record<string, string>;
  data?: Apibackendresourcev1PingRespData;
}

export interface Apibackendresourcev1PingRespData {
  message?: string;
}

export interface ProtobufAny {
  "@type"?: string;
  [key: string]: any;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}
