# good-wiki
Use React+SpringBoot to build a simple blog/wiki website

**The program is a semi-finished product and will continue to be updated**

# introduce
website code written with Reat

To view the API interface code of good-wiki, please click:https://github.com/nikura44/good-wiki-boot

the API interface specifications are listed as follows：

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

#### 2021.06.21 
```text
I found a very serious problem today
I did not design a route, all the jumps are refreshed components in the same page
```
