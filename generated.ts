/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddRoleDto {
  /**
   * E-mail
   * @example 123
   */
  user_id: number;
  /**
   * Desired role to set.
   * @example "admin"
   */
  role: string;
}

export interface BanUserDto {
  /**
   * E-mail
   * @example 123
   */
  user_id: number;
  /**
   * Reason of ban.
   * @example "Rasism."
   */
  badReason: string;
  /**
   * Time of ban.
   * @example "1m 10d"
   */
  timeOfBan: string;
}

export interface User {
  /**
   * Unique identifier
   * @example 1
   */
  user_id: number;
  /**
   * Username
   * @example "Evgenij"
   */
  username: string;
  /**
   * Image path
   * @example "apfasfafasasf.jpg"
   */
  avatarImg: string;
  /**
   * E-mail
   * @example "examplemail@example.com"
   */
  email: string;
  /**
   * Password
   * @example "examplepass123"
   */
  password_hash: string;
  /**
   * Key for activate link.
   * @example "cae20cca-3778-494e-aa21-a9e7134fa798"
   */
  activateKey: string;
  /**
   * Account is activated
   * @example "false"
   */
  isActivated: boolean;
  /**
   * Role
   * @example "user"
   */
  // role: userRoleAdminMediaModeratorSiteModeratorVoiceTeamLeaderVoiceTeamModeratorUser;
  /**
   * Date of Create
   * @format date-time
   * @example "2024-04-22 21:18:42.513+03"
   */
  created_at: string;
  /**
   * Status of account
   * @example "active"
   */
  // status: statusActiveBanned;
  /**
   * Reason of ban
   * @example "Insults and inappropriate behavior in chat"
   */
  badReason: string;
  /**
   * Ban time
   * @format date-time
   * @example "2024-04-22 21:18:42.513+03"
   */
  banned_to: string;
}

export interface AuthUserDto {
  /**
   * E-mail
   * @example "examplemail@example.com"
   */
  email: string;
  /**
   * Password
   * @example "examplepass123"
   */
  password: string;
}

export interface AnimeTitle {
  /**
   * Unique identifier
   * @example 1
   */
  anime_id: number;
  /**
   * Title of anime
   * @example "Englesh title"
   */
  englishTitle: string;
  /**
   * Original title of anime
   * @example "Original title"
   */
  originalTitle: string;
  /**
   * Year of release
   * @example 2024
   */
  releaseYear: number;
  /**
   * genres
   * @example [{"genre_id":1,"name":"genre1","createdAt":"2024-05-06T09:55:10.290Z","updatedAt":"2024-05-06T09:55:10.290Z","AnimeGenre":{"id":1,"anime_id":1,"genre_id":1}},{"genre_id":2,"name":"genre2","createdAt":"2024-05-06T09:55:10.291Z","updatedAt":"2024-05-06T09:55:10.291Z","AnimeGenre":{"id":2,"anime_id":1,"genre_id":2}}]
   */
  genres: string[];
  /**
   * tags
   * @example [{"tag_id":1,"name":"tag1","createdAt":"2024-05-06T09:55:10.274Z","updatedAt":"2024-05-06T09:55:10.274Z","AnimeTag":{"id":1,"anime_id":1,"tag_id":1}},{"tag_id":2,"name":"tag2","createdAt":"2024-05-06T09:55:10.279Z","updatedAt":"2024-05-06T09:55:10.279Z","AnimeTag":{"id":2,"anime_id":1,"tag_id":2}}]
   */
  tags: string[];
  /**
   * Number of current episodes.
   * @example 12
   */
  episodesCurrent: number;
  /**
   * Total number of episodes.
   * @example 12
   */
  episodesTotal: number;
  /**
   * Rating
   * @example 12
   */
  rating: number;
  /**
   * Description.
   * @example "Description for anime title."
   */
  description: string;
  /**
   * Path to the image.
   * @example "sadsd-321wsada312-1231sada.jpg"
   */
  imagePath: string;
  /**
   * Comments.
   * @example "Commnet for title"
   */
  comments: string[];
  /**
   * Author id.
   * @example 1
   */
  user_id: number;
}

export interface CreateAnimeDto {
  /**
   * Unique identifier
   * @example 1
   */
  englishTitle: string;
  /**
   * Original title of anime
   * @example "Original title"
   */
  originalTitle: string;
  /**
   * Year of release
   * @example 2024
   */
  releaseYear: number;
  /**
   * genres
   * @example ["genre1","genre2"]
   */
  genres: string[];
  /**
   * tags
   * @example ["tag1","tag2"]
   */
  tags: string[];
  /**
   * Number of current episodes.
   * @example 12
   */
  episodesCurrent: number;
  /**
   * Total number of episodes.
   * @example 12
   */
  episodesTotal: number;
  /**
   * Description.
   * @example "Description for anime title."
   */
  description: string;
}

export type Tag = object;

export type Genre = object;

export interface CreateCommentDto {
  /**
   * user id
   * @example 1
   */
  user_id: number;
  /**
   * anime id
   * @example 1
   */
  anime_id: number;
  /**
   * Text of comment
   * @example 1
   */
  text: string;
}

export type Comment = object;

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Anime Backend
 * @version 1.0.0
 * @contact
 *
 * Anime Backend system, with using NestJS and REST Api.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerSetRole
     * @summary Give Role for User
     * @request PUT:/users/role
     */
    usersControllerSetRole: (data: AddRoleDto, params: RequestParams = {}) =>
      this.request<AddRoleDto, any>({
        path: `/users/role`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerBan
     * @summary Give Role for User
     * @request PUT:/users/ban
     */
    usersControllerBan: (data: BanUserDto, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/ban`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogin
     * @summary Login user.
     * @request POST:/auth/signin
     */
    authControllerLogin: (data: AuthUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/signin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerRegister
     * @summary Registration new user.
     * @request POST:/auth/signup
     */
    authControllerRegister: (data: AuthUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/signup`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerActivate
     * @summary Activate account.
     * @request GET:/auth/activate/{key}
     */
    authControllerActivate: (key: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/activate/${key}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerRefresh
     * @summary Logout to delete refresh token.
     * @request GET:/auth/refresh
     */
    authControllerRefresh: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/refresh`,
        method: "GET",
        ...params,
      }),
  };
  anime = {
    /**
     * No description
     *
     * @tags Anime
     * @name AnimeControllerGetAnime
     * @summary Create new anime page.
     * @request GET:/anime/{id}
     */
    animeControllerGetAnime: (id: number, params: RequestParams = {}) =>
      this.request<AnimeTitle, any>({
        path: `/anime/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anime
     * @name AnimeControllerCreateAnime
     * @summary Create new anime page.
     * @request POST:/anime/create
     */
    animeControllerCreateAnime: (data: CreateAnimeDto, params: RequestParams = {}) =>
      this.request<AnimeTitle, any>({
        path: `/anime/create`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tag = {
    /**
     * No description
     *
     * @tags Tag
     * @name TagControllerCreateTag
     * @summary Create tag for anime.
     * @request POST:/tag
     */
    tagControllerCreateTag: (params: RequestParams = {}) =>
      this.request<Tag, any>({
        path: `/tag`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  genre = {
    /**
     * No description
     *
     * @tags Genre
     * @name GenreControllerCreateGenre
     * @summary Create genres for anime.
     * @request POST:/genre
     */
    genreControllerCreateGenre: (params: RequestParams = {}) =>
      this.request<Genre, any>({
        path: `/genre`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  comment = {
    /**
     * No description
     *
     * @tags Comment
     * @name CommentControllerSetRole
     * @summary Send comment for anime from users.
     * @request POST:/comment
     */
    commentControllerSetRole: (data: CreateCommentDto, params: RequestParams = {}) =>
      this.request<Comment, any>({
        path: `/comment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
