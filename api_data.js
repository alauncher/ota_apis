define({ "api": [
  {
    "type": "Get",
    "url": "/version",
    "title": "DescribeVersion",
    "version": "1.0.0",
    "name": "getVersion",
    "group": "OTA",
    "description": "<p>获取当前有无软件更新;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DeviceId",
            "description": "<p>设备ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "VersionId",
            "description": "<p>版本号.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数",
          "content": "?DeviceId=1234&VersionId=22",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>状态码0：无新版本，1：发现新版本.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "VersionId",
            "description": "<p>版本号.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "VersionName",
            "description": "<p>版本信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Md5",
            "description": "<p>升级包Md5值.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DownloadUrl",
            "description": "<p>升级包下载路径.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Size",
            "description": "<p>升级包大小.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Modify",
            "description": "<p>升级包发布时间.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"Status\":1,\n   \"Msg\":\"发现新版本\",\n   \"VersionId\":\"23\",\n   \"VersionName\":\"新版本\",\n   \"Md5\":\"345adsff2094asas2345et3\",\n   \"DownloadUrl\":\"https://47.98.58.40:8089/upload/file.bin\",\n   \"Size\":\"12234523\",\n   \"Modify\":\"2018-04-24 12:23:45\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"Status\": 0,\n    \"Msg\": \"当前已是最新版本\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/device.js",
    "groupTitle": "OTA"
  }
] });
