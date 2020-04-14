import {
  APIGatewayProxyHandler,
  CloudWatchLogsHandler,
  CloudWatchLogsDecodedData,
} from 'aws-lambda';
import 'source-map-support/register';
import { promisify } from 'util';
import * as zlib from 'zlib';

const gunzip = promisify(zlib.gunzip);

export const foo: APIGatewayProxyHandler = async (event, _context) => {
  return await hello(event, _context);
};

export const bar: APIGatewayProxyHandler = async (event, _context) => {
  return await hello(event, _context);
};

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const now = new Date();

  // TODO: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html
  // 특정 로그만 잡아내려면 console.log, serverless.yml을 어떻게 설정하는게 좋을까
  console.log('Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!');
  console.log({ foo: 1, bar: 'a', now });
  console.log({ foo: 2, bar: 'b', now, ty: 'MYLOG' });
  console.log('MYLOG [info]', { foo: 3, bar: 'c' });
  console.warn('MYLOG [warn]', { foo: 4, bar: 'd' });
  console.error('MYLOG [error]', { foo: 5, bar: 'e' });
  console.log(JSON.stringify({ foo: 6, bar: 'f', now, ty: 'MYLOG' }));
  console.log(JSON.stringify({ foo: 7, bar: 'g', now, ty: 'MYLOG' }, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify(event, null, 2),
  };
}

export const subscribe: CloudWatchLogsHandler = async (event, _context) => {
  const payload = Buffer.from(event.awslogs.data, 'base64');
  try {
    const buf = (await gunzip(payload)) as Buffer;
    const text = buf.toString('utf8');
    const data: CloudWatchLogsDecodedData = JSON.parse(text);
    console.log(JSON.stringify(data, null, 2));

  } catch (e) {
    console.error(e);
  }
};