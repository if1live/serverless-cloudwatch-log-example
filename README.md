# serverless-cloudwatch-log-example

## example

`filter: 'MYLOG'`

```
{
    "messageType": "DATA_MESSAGE",
    "owner": "798290317353",
    "logGroup": "/aws/lambda/serverless-cloudwatch-log-example-dev-hello",
    "logStream": "2020/03/26/[$LATEST]a16fc6c771a14dceb0f3cc2efbf9aa98",
    "subscriptionFilters": [
        "serverless-cloudwatch-log-example-dev-SubscribeLogsSubscriptionFilterCloudWatchLog1-1OFW2PCXBCRS2"
    ],
    "logEvents": [
        {
            "id": "35351288443121634676401659481314491486751287506108940291",
            "timestamp": 1585206598632,
            "message": "2020-03-26T07:09:58.632Z\tfcdd3c0f-645e-42e3-a1c9-6c5a88ebcff4\tINFO\t{ foo: 2, bar: 'b', now: 2020-03-26T07:09:58.611Z, ty: 'MYLOG' }\n"
        },
        {
            "id": "35351288443523048089975210697862134415658958013216587780",
            "timestamp": 1585206598650,
            "message": "2020-03-26T07:09:58.632Z\tfcdd3c0f-645e-42e3-a1c9-6c5a88ebcff4\tINFO\tMYLOG [info] { foo: 3, bar: 'c' }\n"
        },
        {
            "id": "35351288443523048089975210697862134415658958013216587781",
            "timestamp": 1585206598650,
            "message": "2020-03-26T07:09:58.650Z\tfcdd3c0f-645e-42e3-a1c9-6c5a88ebcff4\tWARN\tMYLOG [warn] { foo: 4, bar: 'd' }\n"
        },
        {
            "id": "35351288443523048089975210697862134415658958013216587782",
            "timestamp": 1585206598650,
            "message": "2020-03-26T07:09:58.650Z\tfcdd3c0f-645e-42e3-a1c9-6c5a88ebcff4\tERROR\tMYLOG [error] { foo: 5, bar: 'e' }\n"
        },
        {
            "id": "35351288443523048089975210697862134415658958013216587783",
            "timestamp": 1585206598650,
            "message": "2020-03-26T07:09:58.650Z\tfcdd3c0f-645e-42e3-a1c9-6c5a88ebcff4\tINFO\t{\"foo\":6,\"bar\":\"f\",\"now\":\"2020-03-26T07:09:58.611Z\",\"ty\":\"MYLOG\"}\n"
        },
        {
            "id": "35351288443523048089975210697862134415658958013216587784",
            "timestamp": 1585206598650,
            "message": "2020-03-26T07:09:58.650Z\tfcdd3c0f-645e-42e3-a1c9-6c5a88ebcff4\tINFO\t{\n  \"foo\": 7,\n  \"bar\": \"g\",\n  \"now\": \"2020-03-26T07:09:58.611Z\",\n  \"ty\": \"MYLOG\"\n}\n"
        }
    ]
}
```
