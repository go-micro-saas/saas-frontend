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

export interface ProtobufAny {
  "@type"?: string;
  [key: string]: any;
}

export interface Resourcev1LoginByEmailReq {
  email?: string;
  /** md5(密码) */
  password?: string;
  code?: string;
}

export interface Resourcev1LoginByPhoneReq {
  phone?: string;
  /** md5(密码) */
  password?: string;
  code?: string;
}

export interface Resourcev1LoginResp {
  /** @format int32 */
  code?: number;
  reason?: string;
  message?: string;
  metadata?: Record<string, string>;
  data?: Resourcev1LoginRespData;
}

export interface Resourcev1LoginRespData {
  user_info?: Resourcev1UserInfo;
  access_token?: string;
  /**
   * 时间戳，单位：秒
   * @format int64
   */
  access_token_expired_at?: string;
  refresh_token?: string;
  /**
   * 时间戳，单位：秒
   * @format int64
   */
  refresh_token_expired_at?: string;
}

/** UserInfo 用户信息 */
export interface Resourcev1UserInfo {
  /** @format uint64 */
  user_id?: string;
  user_nickname?: string;
  user_avatar?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}
