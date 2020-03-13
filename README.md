# serverless-cloudwatch-log-example

## example

`filter: 'MYLOG'`

```
2020-03-13T14:31:58.330Z	b5a64b93-276c-4f1b-912c-ba488cc620ea	INFO	
{
    "messageType": "DATA_MESSAGE",
    "owner": "xxxxxx",
    "logGroup": "/aws/lambda/serverless-cloudwatch-log-example-dev-hello",
    "logStream": "2020/03/13/[$LATEST]eeb531091a104635967787dccf6d5ddc",
    "subscriptionFilters": [
        "serverless-cloudwatch-log-example-dev-SubscribeLogsSubscriptionFilterCloudWatchLog1-xxxxxx"
    ],
    "logEvents": [
        {
            "id": "35326831613596196757794675170110569719331259181555384322",
            "timestamp": 1584109916467,
            "message": "2020-03-13T14:31:56.413Z\t84198568-a5fd-4a24-a569-deda2786a05d\tINFO\t{ foo: 2, bar: 'b', now: 2020-03-13T14:31:56.411Z, ty: 'MYLOG' }\n"
        },
        {
            "id": "35326831613596196757794675170110569719331259181555384323",
            "timestamp": 1584109916467,
            "message": "2020-03-13T14:31:56.414Z\t84198568-a5fd-4a24-a569-deda2786a05d\tINFO\tMYLOG [info] { foo: 3, bar: 'c' }\n"
        },
        {
            "id": "35326831613596196757794675170110569719331259181555384324",
            "timestamp": 1584109916467,
            "message": "2020-03-13T14:31:56.414Z\t84198568-a5fd-4a24-a569-deda2786a05d\tWARN\tMYLOG [warn] { foo: 4, bar: 'd' }\n"
        },
        {
            "id": "35326831613596196757794675170110569719331259181555384325",
            "timestamp": 1584109916467,
            "message": "2020-03-13T14:31:56.414Z\t84198568-a5fd-4a24-a569-deda2786a05d\tERROR\tMYLOG [error] { foo: 5, bar: 'e' }\n"
        }
    ]
}
```