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

import {
  Resourcev1LoginByEmailReq,
  Resourcev1LoginByPhoneReq,
  Resourcev1LoginResp,
  RpcStatus,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SrvSaasBackendAuthV1
   * @name SrvSaasBackendAuthV1LoginByEmail
   * @summary 身份验证-Email登录
   * @request POST:/api/v1/saas-backend/auth/login-by-email
   */
  srvSaasBackendAuthV1LoginByEmail = (
    body: Resourcev1LoginByEmailReq,
    params: RequestParams = {},
  ) =>
    this.request<Resourcev1LoginResp, RpcStatus>({
      path: `/api/v1/saas-backend/auth/login-by-email`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SrvSaasBackendAuthV1
   * @name SrvSaasBackendAuthV1LoginByPhone
   * @summary 身份验证-手机登录
   * @request POST:/api/v1/saas-backend/auth/login-by-phone
   */
  srvSaasBackendAuthV1LoginByPhone = (
    body: Resourcev1LoginByPhoneReq,
    params: RequestParams = {},
  ) =>
    this.request<Resourcev1LoginResp, RpcStatus>({
      path: `/api/v1/saas-backend/auth/login-by-phone`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
