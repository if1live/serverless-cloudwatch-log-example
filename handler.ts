import {
  APIGatewayProxyHandler,
  CloudWatchLogsHandler,
  CloudWatchLogsDecodedData,
} from 'aws-lambda';
import 'source-map-support/register';
import { promisify } from 'util';
import * as zlib from 'zlib';

const gunzip = promisify(zlib.gunzip);

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const now = new Date();

  console.log('Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!');
  console.log({ foo: 1, bar: 'a', now });
  console.log(JSON.stringify({ foo: 2, bar: 'b', now }))
  console.log('CATEGORY', { foo: 3, bar: 'c' });
  console.log('CATEGORY', JSON.stringify({ foo: 4, bar: 'd' }));

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
    console.log('Event Data:', JSON.stringify(data, null, 2));

  } catch (e) {
    console.error(e);
  }
};