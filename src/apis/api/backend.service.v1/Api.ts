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

import type { Apibackendresourcev1PingResp, RpcStatus } from "./data-contracts";
import { HttpClient, type RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SrvSaasBackendV1
   * @name SrvSaasBackendV1Ping
   * @summary Ping ping
   * @request GET:/api/v1/saas-backend/ping
   */
  srvSaasBackendV1Ping = (
    query?: {
      /** 请求消息 */
      message?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Apibackendresourcev1PingResp, RpcStatus>({
      path: `/api/v1/saas-backend/ping`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}

export const ApiClient = new Api();
