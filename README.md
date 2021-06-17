# good-wiki
Use React+SpringBoot to build a simple blog/wiki website

* The program is a semi-finished product and will continue to be updated *

# introduce
website code written with Reat

API interface code has not been uploaded yet.the API interface specifications are listed as follows：

GET：http://localhost:8080/showWikiList
RETURN：
```JSON
[
    {
        "title": "新增作者信息录入",
        "pageInfo": "<p>留下作者信息的创作题！</p>",
        "username": "nicolas",
        "description": "作者主题信息"
    },
    {
        "title": "finally test",
        "pageInfo": "<p>开始创作吧！<strong>hava a good time!</strong></p><p><strong>success</strong></p>",
        "username": "nicolas",
        "description": "请务必成功"
    },
    ...
]
```

POST:http://localhost:8080/insertBlog
RETURN:
```JSOn
{
    "result": "success",
    "ok": true
}
```