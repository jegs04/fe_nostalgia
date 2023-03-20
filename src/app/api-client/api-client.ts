//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root'
})
export class ApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    createUser(body: UserProfileModel | undefined): Observable<ActionResponseModel> {
        let url_ = this.baseUrl + "/api/Account/createUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateUser(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateUser(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ActionResponseModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ActionResponseModel>;
        }));
    }

    protected processCreateUser(response: HttpResponseBase): Observable<ActionResponseModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ActionResponseModel>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    userLogin(body: LoginModel | undefined): Observable<LoginResponseModel> {
        let url_ = this.baseUrl + "/api/Auth/userLogin";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUserLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUserLogin(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<LoginResponseModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<LoginResponseModel>;
        }));
    }

    protected processUserLogin(response: HttpResponseBase): Observable<LoginResponseModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as LoginResponseModel;
            return _observableOf(result200);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<LoginResponseModel>(null as any);
    }

    /**
     * @param email (optional) 
     * @return Success
     */
    forgotPassword(email: string | undefined): Observable<PasswordResponseModel> {
        let url_ = this.baseUrl + "/api/Auth/forgotPassword?";
        if (email === null)
            throw new Error("The parameter 'email' cannot be null.");
        else if (email !== undefined)
            url_ += "email=" + encodeURIComponent("" + email) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processForgotPassword(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processForgotPassword(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<PasswordResponseModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<PasswordResponseModel>;
        }));
    }

    protected processForgotPassword(response: HttpResponseBase): Observable<PasswordResponseModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as PasswordResponseModel;
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result404: any = null;
            result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<PasswordResponseModel>(null as any);
    }

    /**
     * @param token (optional) 
     * @param password (optional) 
     * @return Success
     */
    resetPassword(token: string | undefined, password: string | undefined): Observable<ActionResponseModel> {
        let url_ = this.baseUrl + "/api/Auth/resetPassword?";
        if (token === null)
            throw new Error("The parameter 'token' cannot be null.");
        else if (token !== undefined)
            url_ += "token=" + encodeURIComponent("" + token) + "&";
        if (password === null)
            throw new Error("The parameter 'password' cannot be null.");
        else if (password !== undefined)
            url_ += "password=" + encodeURIComponent("" + password) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processResetPassword(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processResetPassword(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ActionResponseModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ActionResponseModel>;
        }));
    }

    protected processResetPassword(response: HttpResponseBase): Observable<ActionResponseModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("Bad Request", status, _responseText, _headers, result400);
            }));
        } else if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return _observableOf(result200);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ActionResponseModel>(null as any);
    }

    /**
     * @return Success
     */
    information(): Observable<void> {
        let url_ = this.baseUrl + "/api/Home/information";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processInformation(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processInformation(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processInformation(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(null as any);
    }

    /**
     * @return Success
     */
    profileGET(): Observable<ProfileModel> {
        let url_ = this.baseUrl + "/api/Profile";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processProfileGET(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processProfileGET(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ProfileModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ProfileModel>;
        }));
    }

    protected processProfileGET(response: HttpResponseBase): Observable<ProfileModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProfileModel;
            return _observableOf(result200);
            }));
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result401: any = null;
            result401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("Unauthorized", status, _responseText, _headers, result401);
            }));
        } else if (status === 403) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result403: any = null;
            result403 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("Forbidden", status, _responseText, _headers, result403);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result404: any = null;
            result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ProfileModel>(null as any);
    }

    /**
     * @param userName (optional) 
     * @param email (optional) 
     * @param oldPassword (optional) 
     * @param newPassword (optional) 
     * @return Success
     */
    profilePOST(userName: string | undefined, email: string | undefined, oldPassword: string | undefined, newPassword: string | undefined): Observable<ActionResponseModel> {
        let url_ = this.baseUrl + "/api/Profile?";
        if (userName === null)
            throw new Error("The parameter 'userName' cannot be null.");
        else if (userName !== undefined)
            url_ += "userName=" + encodeURIComponent("" + userName) + "&";
        if (email === null)
            throw new Error("The parameter 'email' cannot be null.");
        else if (email !== undefined)
            url_ += "email=" + encodeURIComponent("" + email) + "&";
        if (oldPassword === null)
            throw new Error("The parameter 'oldPassword' cannot be null.");
        else if (oldPassword !== undefined)
            url_ += "oldPassword=" + encodeURIComponent("" + oldPassword) + "&";
        if (newPassword === null)
            throw new Error("The parameter 'newPassword' cannot be null.");
        else if (newPassword !== undefined)
            url_ += "newPassword=" + encodeURIComponent("" + newPassword) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processProfilePOST(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processProfilePOST(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ActionResponseModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ActionResponseModel>;
        }));
    }

    protected processProfilePOST(response: HttpResponseBase): Observable<ActionResponseModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return _observableOf(result200);
            }));
        } else if (status === 404) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result404: any = null;
            result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ActionResponseModel;
            return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ActionResponseModel>(null as any);
    }
}

export interface ActionResponseModel {
    message?: string | undefined;
    statusCode?: number;
    status?: string | undefined;
}

export interface LoginModel {
    userName: string;
    password: string;
}

export interface LoginResponseModel {
    token?: string | undefined;
    success?: boolean;
}

export interface PasswordResponseModel {
    redirectUrl?: string | undefined;
    resetToken?: string | undefined;
    token?: string | undefined;
}

export interface ProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;
}

export interface ProfileModel {
    name?: string | undefined;
    email?: string | undefined;
}

export interface UserProfileModel {
    userId: string;
    userPwd: string;
    userMail: string;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}