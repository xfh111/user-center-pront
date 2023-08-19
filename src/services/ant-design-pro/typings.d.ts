// @ts-ignore
/* eslint-disable */

//在typing中定义全局变量，通过API.变量名 使用
declare namespace API {
  type CurrentUser = {
    id: number;
    idCode: string;
    username: string;
    userAccount: string;
    avatarUrl: string;
    gender: number;
    userPassword: string;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    createTime: Date;

  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };



  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  /**
   * 登录参数
   */
  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };
  /**
   * 注册参数
   */
  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkedPassword?: string;
    idCode?: string;
    type?: string;
  };
  /**
   * 通用返回类
   * 前后端统一协议
   */
  type BaseResponse<T> = {
    code?: number;
    data?: T;
    message?: string;
    description?: string;
  };

  /**
   * 注册获取的返回值
   */
  type RegisterResult = number;

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
