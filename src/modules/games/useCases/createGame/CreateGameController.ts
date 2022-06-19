import Logger from '@shared/logger';

interface IHttpRequest {
  body?: any;
}

interface IHttpResponse {
  statusCode: number;
  body: any;
}
class CreateGameController {
  handle(httpRequest: IHttpRequest): IHttpResponse {
    Logger.info(httpRequest);
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    };
  }
}

export { CreateGameController };
