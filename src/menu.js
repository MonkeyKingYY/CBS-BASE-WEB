export let data = {
    "code": 0,
    "data": {
        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
        "children": [{
                "absoluteUrl": "http://oa.bacic5i5j.com/",
                "children": [

                ],
                "code": "system.help",
                "icon": "fa-dashboard",
                "id": "8aaaccb0730d7cd401732d816a8f07f7",
                "menuName": "V+系统答疑",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "SELF",
                "targetApp": {
                    "appCname": "生产环境oa",
                    "appKey": "oa-prd",
                    "appName": "oa-prd",
                    "appSecret": "oa-prd",
                    "domain": "bacic5i5j.com",
                    "host": "oa.bacic5i5j.com",
                    "id": "8aaaccac732c6a2b01732c90131a0000",
                    "orderby": "",
                    "port": 80,
                    "schemas": "http",
                    "webContext": "/"
                },
                "targetAppId": "8aaaccac732c6a2b01732c90131a0000",
                "type": "MEN",
                "url": "/wiwj/ai/action/wiwjAiAuthAction.do?method=redirect&source=OAV"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/uam-mgr",
                "children": [

                ],
                "code": "SALES.UAM.PORTAL",
                "icon": "star",
                "id": "1339111896",
                "isOutlink": "0",
                "menuName": "UAM管理后台",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "_BLANK",
                "targetApp": {
                    "appCname": "UAM管理后台",
                    "appKey": "uam-mgr",
                    "appName": "uam-mgr",
                    "appSecret": "uam-mgr",
                    "domain": "bacic5i5j.com",
                    "host": "sit.tianjin.cbsv.bacic5i5j.com",
                    "id": "1006897802",
                    "port": 80,
                    "schemas": "http",
                    "webContext": "/uam-mgr"
                },
                "targetAppId": "1006897802",
                "type": "MEN",
                "url": "/index"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trans-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trans-web",
                        "children": [

                        ],
                        "code": "SALES.TRANSMNG.MYDISMISS",
                        "id": "1000000036976",
                        "isOutlink": "0",
                        "menuName": "我的人员离职任务",
                        "orderby": "0101",
                        "parentId": "8aaaeb0271c68bb10171c8f327780006",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaaeb0271c68bb10171c8f327780006,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "appCname": "异动管理",
                            "appKey": "trans-web",
                            "appName": "trans-web",
                            "appSecret": "trans-web",
                            "domain": "bacic5i5j.com",
                            "host": "sit.tianjin.cbsv.bacic5i5j.com",
                            "id": "8aaa981771c126e40171c46e6f920004",
                            "orderby": "",
                            "port": 80,
                            "schemas": "http",
                            "webContext": "/trans-web"
                        },
                        "targetAppId": "8aaa981771c126e40171c46e6f920004",
                        "type": "MEN",
                        "url": "/transManage/myDismiss"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trans-web",
                        "children": [

                        ],
                        "code": "SALES.TRANSMNG.MYEMPCHG",
                        "id": "1000000036979",
                        "isOutlink": "0",
                        "menuName": "我的人员异动任务",
                        "orderby": "0202",
                        "parentId": "8aaaeb0271c68bb10171c8f327780006",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaaeb0271c68bb10171c8f327780006,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[2].children[0].targetApp"
                        },
                        "targetAppId": "8aaa981771c126e40171c46e6f920004",
                        "type": "MEN",
                        "url": "/transManage/myEmployeeChange"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trans-web",
                        "children": [

                        ],
                        "code": "SALES.TRANSMNG.MYDEPCHG",
                        "id": "1000000036982",
                        "isOutlink": "0",
                        "menuName": "我的部门异动任务",
                        "orderby": "0303",
                        "parentId": "8aaaeb0271c68bb10171c8f327780006",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaaeb0271c68bb10171c8f327780006,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[2].children[0].targetApp"
                        },
                        "targetAppId": "8aaa981771c126e40171c46e6f920004",
                        "type": "MEN",
                        "url": "/transManage/myDepartmentChange"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trans-web",
                        "children": [

                        ],
                        "code": "SALES.TRANSMNG.MYCHGLOG",
                        "id": "1000000036985",
                        "isOutlink": "0",
                        "menuName": "我的异动资源日志",
                        "orderby": "0404",
                        "parentId": "8aaaeb0271c68bb10171c8f327780006",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaaeb0271c68bb10171c8f327780006,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[2].children[0].targetApp"
                        },
                        "targetAppId": "8aaa981771c126e40171c46e6f920004",
                        "type": "MEN",
                        "url": "/transManage/myChangeLog"
                    }
                ],
                "code": "SALES.TRANSMNG",
                "icon": "fa-user",
                "id": "8aaaeb0271c68bb10171c8f327780006",
                "menuName": "异动管理",
                "orderby": "",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[2].children[0].targetApp"
                },
                "targetAppId": "8aaa981771c126e40171c46e6f920004",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TradeMenu.workspace",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dc4b5ed0808",
                        "menuName": "个人工作台",
                        "orderby": "1",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "appCname": "交易管理",
                            "appKey": "trade-web",
                            "appName": "trade-web",
                            "appSecret": "trade-web",
                            "domain": "bacic5i5j.com",
                            "host": "sit.tianjin.cbsv.bacic5i5j.com",
                            "id": "ff8080814f3edc13014f45b0985a00bc",
                            "orderby": "",
                            "port": 80,
                            "schemas": "http",
                            "webContext": "/trade-web"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/workspace/dashboard"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "TRADE.PROPERTYCHECK.APPLY",
                        "id": "11000000042320",
                        "isOutlink": "0",
                        "menuName": "物业交验申请",
                        "orderby": "1",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "appCname": "V+销售系统",
                            "appKey": "sales-web",
                            "appName": "sales-web",
                            "appSecret": "sales-web",
                            "domain": "bacic5i5j.com",
                            "host": "sit.tianjin.cbsv.bacic5i5j.com",
                            "id": "8ae884da6cfb2764016cfbbf48440000",
                            "orderby": "",
                            "port": 80,
                            "schemas": "http",
                            "webContext": "/sales-web"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TRADE.CASE.PROPERTYCHECK",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dd0fc950823",
                        "menuName": "物业交验",
                        "orderby": "10",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/propertycheck/list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TradeMenu.MyCase.UnlocatedTasks",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732def334f0826",
                        "menuName": "无主任务",
                        "orderby": "11",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/unlocatedTasks"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TradeMenu.MyCase.UnlocatedCases",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732defbc260829",
                        "menuName": "无主案件",
                        "orderby": "12",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/case/unlocatedCase"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALSE.TradeMenu.MyCase.CaseTracking",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732df02d18082c",
                        "menuName": "案件追踪",
                        "orderby": "13",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/case/tracking"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.Trade.SysSetting.Reminder",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732df0ba86082f",
                        "menuName": "提醒清单配置",
                        "orderby": "14",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/setting/reminderListSet"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.Trade.SysSetting.Lamp",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732df11f5b0832",
                        "menuName": "红绿灯规则配置",
                        "orderby": "15",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/setting/taskPlanSet"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.Trade.SysSetting.DocuList",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732df1aa410835",
                        "menuName": "备件配置",
                        "orderby": "16",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/setting/prefileListSet"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.Trade.SysSetting.Sup",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732df219380838",
                        "menuName": "供应商配置",
                        "orderby": "17",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/setting/supplierSet"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.Trade.SysSetting.CaseDispatch",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732df28ba1083b",
                        "menuName": "分单规则配置",
                        "orderby": "18",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/setting/teamScope"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TRADE.SysSetting.TEAMORGRELATION",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732df33291083e",
                        "menuName": "职能内部组别关系对应",
                        "orderby": "19",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/setting/teamOrgRelation"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TradeMenu.MyCase.CaseOverview",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dcc3410080b",
                        "menuName": "案件总览",
                        "orderby": "2",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/case/myCaseList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TradeMenu.MyCase.TodoTask",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dccc8ec080e",
                        "menuName": "待办任务",
                        "orderby": "3",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/task/myTaskList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALSE.TRADE.CASE.TASKDONE",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dcd97ca0811",
                        "menuName": "已办任务",
                        "orderby": "4",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/task/taskDoneList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALSE.TradeMenu.MyCase.CaseDistribute",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dce254d0814",
                        "menuName": "待分配案件",
                        "orderby": "5",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/case/caseDistribute"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALSE.TradeMenu.MyCase.CASEMORTGAGE",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dcea59f0817",
                        "menuName": "贷款信息列表",
                        "orderby": "6",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/mortgageInfo/list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALES.TradeMenu.MyCase.TaskOfGroup",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dcf1e6b081a",
                        "menuName": "本组待办列表",
                        "orderby": "7",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/task/toTaskOfGroupList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALSE.TRADE.CASE.TASK",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dcff6d2081d",
                        "menuName": "待办转移",
                        "orderby": "8",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/case/handler/taskTransfer"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/trade-web",
                        "children": [

                        ],
                        "code": "SALSE.TRADE.CASE.SERVTRANSFER",
                        "icon": "",
                        "id": "8aaaccb0730d7cd401732dd06afb0820",
                        "menuName": "服务归属转移",
                        "orderby": "9",
                        "parentId": "4028847b6ecfa0ae016ed5490d280017",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,4028847b6ecfa0ae016ed5490d280017,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[0].targetApp"
                        },
                        "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                        "type": "MEN",
                        "url": "/case/handler/servTransfer"
                    }
                ],
                "code": "SALES.TRADEMGR",
                "icon": "fa-credit-card",
                "id": "4028847b6ecfa0ae016ed5490d280017",
                "menuName": "交易管理",
                "orderby": "",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[0].targetApp"
                },
                "targetAppId": "ff8080814f3edc13014f45b0985a00bc",
                "type": "MDL",
                "url": ""
            },
            {
                "children": [

                ],
                "code": "tutc",
                "icon": "",
                "id": "8aaacc8f707786c50170d19015d305f8",
                "menuName": "cbs测试1",
                "orderby": "",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "type": "MEN"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "TEST-URL",
                        "id": "11000000057301",
                        "isOutlink": "0",
                        "menuName": "测试url",
                        "orderby": "1",
                        "parentId": "8aaacc8f707786c50170a8e9aea30280",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,8aaacc8f707786c50170a8e9aea30280,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": ""
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "ECS:COMPLAINT_INPUT",
                        "id": "8aaacc8f707786c50170a8ea3d720283",
                        "menuName": "工单录入",
                        "orderby": "10",
                        "parentId": "8aaacc8f707786c50170a8e9aea30280",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaacc8f707786c50170a8e9aea30280,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=ecs&url=/complaint/toAddComplaint.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "ECS:COMPLAINT_QUERY",
                        "icon": "",
                        "id": "8aaacc8f707786c50170a8f4d20c0293",
                        "menuName": "工单查询",
                        "orderby": "20",
                        "parentId": "8aaacc8f707786c50170a8e9aea30280",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaacc8f707786c50170a8e9aea30280,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=ecs&url=/complaint/toSelectComplaint.htm"
                    }
                ],
                "code": "WBTS",
                "icon": "icon-bookmark",
                "id": "8aaacc8f707786c50170a8e9aea30280",
                "menuName": "外部投诉",
                "orderby": "",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:SET",
                        "icon": "",
                        "id": "8aaac34370700b750170762c32ce0005",
                        "menuName": "系统默认分单比例设置",
                        "orderby": "10",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/perf/setRuleDetail/shareratio"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:LIMIT",
                        "id": "11000000032551",
                        "isOutlink": "0",
                        "menuName": "业绩调整申请限制管理",
                        "orderby": "11",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/perf/applyManage/to_cycle"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:REASON",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a28a3a1001c",
                        "menuName": "业绩调整原因管理",
                        "orderby": "20",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/perf/reason/toReason"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:TASK",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a29c56f001f",
                        "menuName": "公司平台补业绩",
                        "orderby": "30",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/perf/applyTask/toCompensate"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:INCOME",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a2a86880022",
                        "menuName": "收益业绩总额调整管理",
                        "orderby": "40",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/performanceIncome/list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:AUTH",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a2b313b0025",
                        "menuName": "业绩调整申请单管理",
                        "orderby": "50",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/perf/authorize/perfoEpowManage"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:PERSON",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a2c14690028",
                        "menuName": "业绩查询（经纪人）",
                        "orderby": "60",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/perf/applyMyRelated/myperformancelist"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a2e799f002e",
                        "menuName": "业绩查询（管理者）",
                        "orderby": "80",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/perf/applyMyRelated/myperformanceAdmin"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PERF:BATCH",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a2f76ac0031",
                        "menuName": "收益分单批量调整管理",
                        "orderby": "90",
                        "parentId": "8aaac34370700b7501707628cd0e0002",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac34370700b7501707628cd0e0002,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=perf&url=/performance/prorateImportList"
                    }
                ],
                "code": "SYSTEM:PERF",
                "icon": "iconxiaoshouguanli",
                "id": "8aaac34370700b7501707628cd0e0002",
                "menuName": "业绩管理",
                "orderby": "",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "_BLANK",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:INVOICE:LIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707baef510012c",
                        "menuName": "发票管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/invoice/list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:RECEIPT:LIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707bae86420129",
                        "menuName": "收据查询",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/receipt/list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:PAYFAILED:LIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707bad8a440126",
                        "menuName": "付款信息变更管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/payfailedlist.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:CASHIER:LIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707bad1b0e0123",
                        "menuName": "付款单管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/listbycashier.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:CASH:LIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707baabf540117",
                        "menuName": "付款提醒（现金）",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/cash/list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE_FUND_CONFIG_MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707baa1a9f0114",
                        "menuName": "款项配置",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/fund/config/manager"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE_FUND_MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707ba97e060111",
                        "menuName": "款项管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/fund/manager"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINNACE:RECOVERY:LIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707ba73f7d010e",
                        "menuName": "回收管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/recovery/list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:TODOLIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b5e3c3e00c3",
                        "menuName": "我的待办",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/todo/list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:UMSCHECK:LIST",
                        "icon": "",
                        "id": "8aaac35c7158a0d401715d4151e00053",
                        "menuName": "银联支付账单管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/audit/china-pay-audit-accounts"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:EBS:REPORTDOWNLOAD",
                        "icon": "",
                        "id": "8aaac35570593cd501705c0bc6f70010",
                        "menuName": "业财报表下载",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/ebs/villageReport"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:COLLECTBATCH:NEW",
                        "icon": "",
                        "id": "8aaac35570593cd501705c0b3ab9000d",
                        "menuName": "租赁多合同收款",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/receivables/create"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:COLLECTBATCH:LIST",
                        "icon": "",
                        "id": "8aaac35570593cd501705c0aa79b000a",
                        "menuName": "收款批次查询",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/collect/batchList.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:COLLECTAUDIT:LIST",
                        "icon": "",
                        "id": "8aaac35570593cd501705b6891c50003",
                        "menuName": "查账管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/audit/list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:NONCASH:REPAY:LIST",
                        "icon": "",
                        "id": "8aaaf02170e9342e0170eda78bc60043",
                        "menuName": "付款失败后重新付款（非现金）",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/noncash/remindlist.htm?isNormal=0"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:BATCHINVOICE",
                        "icon": "",
                        "id": "8aaaf03173b7a1cf0173bea6f417005a",
                        "menuName": "批量开发票",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/batchInvoice/batch-invoice.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:INVOICE:MAKEOUT",
                        "icon": "",
                        "id": "8aaacc8f707786c501707baf9bed012f",
                        "menuName": "开发票",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/invoice/choosecontract.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:COLLECT:PAY:TYPE:CONFIG",
                        "icon": "",
                        "id": "8aaaf02170e9342e0171108a385d00e2",
                        "menuName": "收款方式设置",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/receivables/payment-method-config"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:INTENTION:LIST",
                        "icon": "",
                        "id": "8aaaf02170e9342e01711070588800d7",
                        "menuName": "意向金查询",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/intention/intention-list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:NONCASH:CONFIRM:LIST",
                        "icon": "",
                        "id": "8aaaf02170e9342e0170eda6b81b0040",
                        "menuName": "付款确认（非现金）",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/noncash/confirmlist.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:NONCASH:REMIND:LIST",
                        "icon": "",
                        "id": "8aaaf02170e9342e0170eda52971003d",
                        "menuName": "付款提醒（非现金）",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/noncash/remindlist.htm?isNormal=1"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:FINANCE:PAYMENT:BATCH:EXPORT",
                        "icon": "",
                        "id": "8aaaf02170e9342e0170ec9c9d58000c",
                        "menuName": "付款结果明细表导出",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/noncash/remindlist.htm?isNormal=1"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:APPLY:LIST",
                        "icon": "",
                        "id": "8aaacc8f707786c501707bb1f839013b",
                        "menuName": "付、退款申请管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/payment/apply/list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCE:PAYMENT:APPLY:PUBLICADD",
                        "icon": "",
                        "id": "8aaacc8f707786c501707bb094ad0132",
                        "menuName": "公共合同申请",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/commoncontract/commonapply.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCECOLLECTSUPPLEMENTARYLIST",
                        "id": "11000000038501",
                        "isOutlink": "0",
                        "menuName": "补录收款数据",
                        "orderby": "1",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/collect/supple-entry-receivables-list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "FINANCEPAYMENTAPPLYASSESSMENTINSERT",
                        "id": "11000000039535",
                        "isOutlink": "0",
                        "menuName": "评估费批量申请",
                        "orderby": "1",
                        "parentId": "8aaac35570593cd501705b60ba6b0000",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705b60ba6b0000,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=finance&url=/finance/assessment/insert"
                    }
                ],
                "code": "SYSTEM:FINANCE",
                "icon": "icon-money",
                "id": "8aaac35570593cd501705b60ba6b0000",
                "menuName": "财务管理",
                "orderby": "",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:LTC:FORMALCONT:MANAGER",
                        "icon": "",
                        "id": "8aaaccb0730d7cd40173193470330787",
                        "menuName": "限递正式合同管理",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/ltc-sign-list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "WRIT_CONFIG",
                        "icon": "",
                        "id": "2c9e811873523a7c0173569143da0005",
                        "menuName": "文书配置",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/writ-config-list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "WRIT_PRINT",
                        "icon": "",
                        "id": "2c9e811873523a7c0173568ff75c0000",
                        "menuName": "文书打印",
                        "orderby": "",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/writ-print-list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:SALES:DRAFTCONT:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a5fbb230056",
                        "menuName": "买卖草签合同管理",
                        "orderby": "10",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,8aaacc8f707786c501707a5f19bb0053,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/buy-sign-list.htm?isDraft=true"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:LEASE:DRAFTCONT:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707a611246005c",
                        "menuName": "租赁草签合同管理",
                        "orderby": "10",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,8aaacc8f707786c501707a602d240059,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/lease-sign-list.htm?isDraft=true"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "PRINT_CONFIG",
                        "icon": "",
                        "id": "2c9e81d77362afc0017369bd1290002e",
                        "menuName": "补打角色上限配置",
                        "orderby": "100",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/print-config-list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALESMASTERCONTRACT",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b03acca00a8",
                        "menuName": "模板管理",
                        "orderby": "100",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/contract-template-management.html"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:DISCOUNT:CONFIG:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b04412100ab",
                        "menuName": "折扣审核校验节点配置",
                        "orderby": "110",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/discount-approval-checkpoint"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:LTC:DRAFTCONT:MANAGER",
                        "icon": "",
                        "id": "8aaaccb0730d7cd40173193391e60784",
                        "menuName": "限递草签合同管理",
                        "orderby": "120",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/ltc-sign-list?isDraft=true"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:SALES:FORMALCONT:MANAGER",
                        "icon": "",
                        "id": "8aaac35570593cd501705c98539f002a",
                        "menuName": "买卖正式合同管理",
                        "orderby": "20",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/buy-sign-list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:SALES:BLKCONT:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707afed8ec0093",
                        "menuName": "买卖空白合同打印管理",
                        "orderby": "30",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/blank-list.htm?contractTypeBuyLease=1"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:LEASE:FORMALCONT:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b00160d0099",
                        "menuName": "租赁正式合同管理",
                        "orderby": "50",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/lease-sign-list.htm"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:LEASE:BLKCONT:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b00dee0009c",
                        "menuName": "租赁空白合同打印管理",
                        "orderby": "60",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/blank-list.htm?contractTypeBuyLease=3"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:INTERFACE:TOTMS:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b01c13f009f",
                        "menuName": "推送交易异常处理",
                        "orderby": "70",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/sign-failure-list.html"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SCM:ATTACHMENT:CONFIG:MANAGER",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b02818400a2",
                        "menuName": "附件配置管理",
                        "orderby": "80",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/accessory-config-list.html"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALESSYSTYPE",
                        "icon": "",
                        "id": "8aaacc8f707786c501707b03156f00a5",
                        "menuName": "编码规则设置",
                        "orderby": "90",
                        "parentId": "8aaac35570593cd501705c97eb100027",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaac35570593cd501705c97eb100027,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=sign&url=/sign-new/system-type-coding-settings.html"
                    }
                ],
                "code": "SYSTEM:SIGN",
                "icon": "fa-book",
                "id": "8aaac35570593cd501705c97eb100027",
                "menuName": "签约管理",
                "orderby": "",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/task-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/task-web",
                        "children": [

                        ],
                        "code": "SALES.TASK.CENTRE",
                        "icon": "fa-envelope",
                        "id": "8aaa18067114eb2a017116e0588d000d",
                        "isOutlink": "0",
                        "menuName": "我的待办",
                        "orderby": "",
                        "parentId": "11000000039798",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000039798,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "appCname": "待办",
                            "appKey": "task-web",
                            "appName": "task-web",
                            "appSecret": "task-web",
                            "domain": "bacic5i5j.com",
                            "host": "sit.tianjin.cbsv.bacic5i5j.com",
                            "id": "8aaaf02170e9342e01710fab477300d3",
                            "orderby": "",
                            "port": 80,
                            "schemas": "http",
                            "webContext": "/task-web"
                        },
                        "targetAppId": "8aaaf02170e9342e01710fab477300d3",
                        "type": "MEN",
                        "url": "/flow/flowList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/task-web",
                        "children": [

                        ],
                        "code": "SALES.TASK.LOOKUP",
                        "id": "11000000039801",
                        "isOutlink": "0",
                        "menuName": "待办总览",
                        "orderby": "1",
                        "parentId": "11000000039798",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000039798,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[9].children[0].targetApp"
                        },
                        "targetAppId": "8aaaf02170e9342e01710fab477300d3",
                        "type": "MEN",
                        "url": "/flow/flowLookupList"
                    }
                ],
                "code": "SALES.TASK",
                "icon": "fa-envelope",
                "id": "11000000039798",
                "isOutlink": "0",
                "menuName": "待办中心",
                "orderby": "0",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "targetApp": {
                    "$ref": "$.data.children[9].children[0].targetApp"
                },
                "targetAppId": "8aaaf02170e9342e01710fab477300d3",
                "type": "MDL"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.WORKSPACE.DASHBOARD",
                        "icon": "icon-user",
                        "id": "F4591D00CFB446039B56C1538684C9E4",
                        "menuName": "个人工作台",
                        "orderby": "0010",
                        "parentId": "254987279844426098A928E8E92BF128",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,254987279844426098A928E8E92BF128,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/workspace/dashboard"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.WORKSPACE.WELCOME",
                        "icon": "icon-user",
                        "id": "A9AE1E6083D54F3FA6B0695D63134F90",
                        "menuName": "欢迎页面",
                        "orderby": "0010",
                        "parentId": "254987279844426098A928E8E92BF128",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,254987279844426098A928E8E92BF128,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/workspace/welcome"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.SHOWLIST",
                        "icon": "icon-user",
                        "id": "EBCEA3C028694727A143F6446333D6CC",
                        "menuName": "我的签赔",
                        "orderby": "0100",
                        "parentId": "254987279844426098A928E8E92BF128",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,254987279844426098A928E8E92BF128,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houexc/myHouseExclusiveList"
                    }
                ],
                "code": "sales.personals.WORKBENCH",
                "icon": "icongerengongzuotai",
                "id": "254987279844426098A928E8E92BF128",
                "menuName": "个人工作台",
                "orderby": "0010",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MEN",
                "url": "/workspace/dashboard"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.EXPL.PHOTOLIMIT",
                        "icon": "",
                        "id": "8aaae3e871823e36017186f7845d0054",
                        "menuName": "小黑屋管理",
                        "orderby": "",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houExplHouPhoto/houPhotoLimitList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales-web/houExplInvt/houPhotoList",
                        "icon": "",
                        "id": "8aaae3e871823e36017186f717fd0051",
                        "menuName": "摄影师配置",
                        "orderby": "",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houExplHouPhoto/houPhotoList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES:EXPL:HOUSECONF",
                        "icon": "",
                        "id": "8aaae3e871823e36017186f6a77d004e",
                        "menuName": "邀约实勘例外楼盘配置",
                        "orderby": "",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houExplHouPhoto/houHouseList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales-web/houExplInvt/houExplInvtMngList",
                        "icon": "",
                        "id": "8aaae3e871823e36017186f4e5df004b",
                        "menuName": "邀约单管理",
                        "orderby": "",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houExplInvt/houExplInvtMngList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.HOUDELADD",
                        "icon": "icon-folder-open",
                        "id": "962827517A504AF79ED6369F044AC0BC",
                        "menuName": "新建房源",
                        "orderby": "0005",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/toHouDelAddNew"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.ADDLIANJIE",
                        "icon": "",
                        "id": "86E9DA8E510D4BB78E305CA5833D3366",
                        "menuName": "新增框架",
                        "orderby": "0006",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/frameNewhouses"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.SHOUADVLIST",
                        "id": "11000000054206",
                        "isOutlink": "0",
                        "menuName": "买卖有效房源",
                        "orderby": "002",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/toSaleHouseList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.OPPTHOU",
                        "icon": "icon-home",
                        "id": "C2071769F3834DF8BED51DA5D26AEACD",
                        "menuName": "潜房列表",
                        "orderby": "0021",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/potentialHouseList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.ZHOUADVLIST",
                        "id": "11000000054203",
                        "isOutlink": "0",
                        "menuName": "租赁有效房源",
                        "orderby": "003",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/toRentHouseList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.MYAREAHOUSE",
                        "icon": "icon-home",
                        "id": "71F223B3185A4941B445C64FDABAA27B",
                        "menuName": "区域房源",
                        "orderby": "0032",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/hourole/houRoleQYList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.ZHOUADVLISTALL",
                        "id": "11000000054217",
                        "isOutlink": "0",
                        "menuName": "租赁全市房源查询",
                        "orderby": "004",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/toRentHouseListAll"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.SHOWLIST",
                        "icon": "icon-key",
                        "id": "BD2FF83B4E03485686A445C9CB3A7D64",
                        "menuName": "我的钥匙",
                        "orderby": "0040",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houkey/myhoukeyList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.HOUKEYLIST2",
                        "icon": "icon-key",
                        "id": "2CB9F2D9E5A7464FBDD14491663C046B",
                        "menuName": "本店钥匙",
                        "orderby": "0041",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houkey/houKeyList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.AREAKEYLIST",
                        "icon": "fa-user",
                        "id": "54CE20E79BD641D78F201D1961F27183",
                        "menuName": "组团钥匙",
                        "orderby": "0042",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houkey/areaKeyList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.SWZKEYLIST",
                        "icon": "fa-user",
                        "id": "4F5507EDDF554ACDBA2302F7A92791B2",
                        "menuName": "区域钥匙",
                        "orderby": "0043",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houkey/swzKeyList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUBORROWKEYLIST",
                        "icon": "fa-user",
                        "id": "64C249B172BC43E99C3E46A6D1C61B36",
                        "menuName": "钥匙借用列表",
                        "orderby": "0044",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houkey/houBorrowKeyList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.SHOUADVLISTALL",
                        "id": "11000000054220",
                        "isOutlink": "0",
                        "menuName": "买卖全市房源查询",
                        "orderby": "005",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/toSaleHouseListAll"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.",
                        "icon": "icon-home",
                        "id": "2D15B8112BE844488E871DD7B4687127",
                        "menuName": "收藏房源",
                        "orderby": "0060",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/houFavorList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.SHOWLIST",
                        "icon": "icon-home",
                        "id": "5738DE228A9A4C1481ED15A42DECE0CE",
                        "menuName": "我的推荐",
                        "orderby": "0080",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/hourecom/HourecomShow/myhourecomList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.MENU.HOUREG.MYREG:LIST",
                        "icon": "icon-home",
                        "id": "B32308B6C13A4466993A04349CCD2863",
                        "menuName": "我的备案",
                        "orderby": "0090",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houreg/myhouregList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUREG.GRPREG:LIST",
                        "icon": "icon-home",
                        "id": "610D0D26786A4304BEE2D9EA8496DEC1",
                        "menuName": "店组备案",
                        "orderby": "0091",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houreg/myhouregList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.MENU.HOUREG.AREAREG:LIST",
                        "icon": "icon-home",
                        "id": "862AD40986BA481AA15F067018F1A232",
                        "menuName": "区域备案",
                        "orderby": "0092",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houreg/myhouregList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.HOUGRPSEE",
                        "icon": "icon-home",
                        "id": "BE691D9F976A4D4FBCEDD0C18CCE385C",
                        "menuName": "我的集中带看",
                        "orderby": "0100",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/hougrpsee/hougrpsee/hougrpseeList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.HIDDENROOM",
                        "icon": "",
                        "id": "F8A1CED425B74BD99298E9D8A0ADDFA7",
                        "menuName": "房屋隐藏列表",
                        "orderby": "0100",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/houHiddenRoomList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUTRACK.MYTRACK:LIST",
                        "icon": "",
                        "id": "712AEAB29119447DB28F889F10BDFA1B",
                        "menuName": "我的房源跟进",
                        "orderby": "0110",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houtrack/myHouTrackList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUTRK.SWZTRK",
                        "icon": "icon-home",
                        "id": "CD637F0A35894960908DBACE247A9228",
                        "menuName": "区域房源跟进",
                        "orderby": "0113",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houtrack/swzHouTrackList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "salse.MYFREEDISK.GOURP",
                        "icon": "icon-home",
                        "id": "65F9C3B4C10B4CF0A450C1B2AF1A8DDD",
                        "menuName": "区域免扰盘",
                        "orderby": "0121",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/myfreeDisk"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.HOUADVLIST",
                        "icon": "icon-home",
                        "id": "AF2D59B0EC32417ABF3353D070E29939",
                        "menuName": "历史房源",
                        "orderby": "0300",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/houHisList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.HOUDCPLIST",
                        "icon": "fa-home",
                        "id": "7589456B45A84635ACB1017AC109AB22",
                        "menuName": "定金成交房源",
                        "orderby": "0301",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/depositdealHouList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUNORMAL.QUERYLIST",
                        "icon": "fa-user",
                        "id": "449B1B4F1845459EAA032688DF151DF1",
                        "menuName": "普通委托列表",
                        "orderby": "0502",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/hounormalqry/toHouNormalQueryList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.HIDDEN.ROOMNUMBER.LIST",
                        "id": "11000000131923",
                        "isOutlink": "0",
                        "menuName": "室号隐藏列表",
                        "orderby": "1",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/toRoomNoHiddenList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.MYHOUSOLE",
                        "id": "11000000042314",
                        "isOutlink": "0",
                        "menuName": "我的独家委托",
                        "orderby": "1",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/housole/toMyHouSoleQueryList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.PROXY.MYNORMAL",
                        "id": "11000000042843",
                        "isOutlink": "0",
                        "menuName": "我的普通委托",
                        "orderby": "1",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/hounormalqry/myNormalQueryList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "CStest",
                        "id": "11000000036126",
                        "isOutlink": "1",
                        "menuName": "测试菜单",
                        "orderby": "1",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "http://www.baidu.com"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.EVIDENCE.MANAGE",
                        "icon": "",
                        "id": "8aaa84866f978c6c016f9e3971bd0048",
                        "menuName": "佐证管理",
                        "orderby": "100",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/fileMng/fileList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.HideHouseSearch",
                        "icon": "",
                        "id": "8aaaf03173b7a1cf0173bd69a8d70042",
                        "menuName": "潜房查询",
                        "orderby": "2",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/HideHouseListSearch"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.HOUHIDDENLIST",
                        "icon": "",
                        "id": "F9E788C0C3774F51BEA5758D142C086C",
                        "menuName": "业主电话隐藏列表",
                        "orderby": "300",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/house/toPhoneHiddenList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUREG.WATING.LIST",
                        "icon": "",
                        "id": "4272F789C12544019D94A580560C25C6",
                        "menuName": "待备案列表",
                        "orderby": "997",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houreg/houregWaitingList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUREG.AlREADY.LIST",
                        "icon": "",
                        "id": "9D7724402FB24C3E941E5C84A42F2855",
                        "menuName": "已备案列表",
                        "orderby": "998",
                        "parentId": "CB3B6A787940490792EEC82046DEA922",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,CB3B6A787940490792EEC82046DEA922,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houreg/houregAlreadyList"
                    }
                ],
                "code": "SALES.HOUMGR",
                "icon": "iconfangyuanguanli",
                "id": "CB3B6A787940490792EEC82046DEA922",
                "menuName": "房源管理",
                "orderby": "0020",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "customer.PublicCustomer",
                        "icon": "",
                        "id": "8aaaf03173b7a1cf0173bda1d1b60052",
                        "menuName": "公客查询",
                        "orderby": "",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/customer/PublicCustomer"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "sales.CUSTDELADD",
                        "icon": "icon-user",
                        "id": "577A93DBB1314705A8CDB78F75B1EE55",
                        "menuName": "新建客户",
                        "orderby": "0000",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "appCname": "CRM-管理平台",
                            "appKey": "crm-web",
                            "appName": "crm-web",
                            "appSecret": "crm-web",
                            "domain": "bacic5i5j.com",
                            "host": "sit.tianjin.cbsv.bacic5i5j.com",
                            "id": "2c978083647d981401647df6d7300000",
                            "orderby": "09",
                            "port": 80,
                            "schemas": "http",
                            "webContext": "/crm-web"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/toCustDelAdd"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "sales.CMCUSTLIST",
                        "icon": "fa-bus",
                        "id": "ACF8954C08FA41B2B01FEB4F69A2CF53",
                        "menuName": "公客列表（旧）",
                        "orderby": "0003",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custpool/toShowCustpool"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTOMER.WZCUST:LIST",
                        "icon": "icon-user",
                        "id": "CD6CB94B16F146B683B22D35188E0BA9",
                        "menuName": "区域客户（旧）",
                        "orderby": "0005",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myJQYDSCustList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTOMER.ARCUST:LIST",
                        "icon": "icon-user",
                        "id": "DF5B23BEBDDE48E9AB575DBB715EF577",
                        "menuName": "组团客户",
                        "orderby": "0030",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myJQYJLCustList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "CRM.CUST.MENU.MYCUSTLIST",
                        "id": "11000000039257",
                        "isOutlink": "0",
                        "menuName": "我的客户",
                        "orderby": "0070",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myCustListNew"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "sales.MYCUST",
                        "icon": "icon-user",
                        "id": "2F2CF78B18C94C4BB1B0281E7D827E1C",
                        "menuName": "我的客户（旧）",
                        "orderby": "0070",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myCustList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTTRACK.BATRACK",
                        "icon": "icon-user",
                        "id": "88362C807A8749168C549124C212D0F6",
                        "menuName": "区域客户跟进（旧）",
                        "orderby": "0100",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custtrack/swzCrmTrackList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTTRACK.ARTRACK",
                        "icon": "fa-user",
                        "id": "BC26675AA3E846A5A093CC7442055F55",
                        "menuName": "组团客户跟进",
                        "orderby": "0110",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custtrack/areaCrmTrackList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "GRPCUSTTRACK",
                        "icon": "icon-user",
                        "id": "5A506D9A4F274C05B669F8388A657B31",
                        "menuName": "店组客户跟进",
                        "orderby": "0120",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custtrack/groupCrmTrackList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "MYCUSTTRACK",
                        "icon": "icon-user",
                        "id": "5C85CD88ACE7405C881ED0C66F9EDC6F",
                        "menuName": "我的客户跟进（旧）",
                        "orderby": "0130",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custtrack/myCrmTrackList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.CUSTLOOKPLAN",
                        "icon": "icon-user",
                        "id": "C0F6261ABDC44943AB4E8443D14136B6",
                        "menuName": "我的约看",
                        "orderby": "0180",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custlook/custLookPlan/tocustLookPlan"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.menu.mycustlook",
                        "icon": "",
                        "id": "0703F02F3221494CA31745C8451A0042",
                        "menuName": "我的带看（旧1）",
                        "orderby": "0181",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custlook/custShow/toMyCustlookList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.menu.mycustlookNew2",
                        "icon": "",
                        "id": "8aaa843573ebb7820173ec9e3bf50017",
                        "menuName": "我的带看（旧2）",
                        "orderby": "0182",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custlook/custShow/toMyCustlookListNew"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTIMPORT.MYCUSTIMPORT",
                        "icon": "icon-signin",
                        "id": "AB2A6311E5654AA8951B47EAF266FC95",
                        "menuName": "我的导入客",
                        "orderby": "0190",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custimport/custimport/mycust"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTIMPORT.GRPCUST",
                        "icon": "",
                        "id": "7E8289052EA742B9B689D3EA01EAEF51",
                        "menuName": "店组导入客",
                        "orderby": "0191",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custimport/custimport/mgrcust"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTIMPORT.ARCUST",
                        "icon": "",
                        "id": "C32486EFE7354F438AC489427B2A1918",
                        "menuName": "组团导入客",
                        "orderby": "0192",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custimport/custimport/mgrcust"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTIMPORT.WZCUST:LIST",
                        "icon": "",
                        "id": "B1796F0112124D029797DA9794AF0D2B",
                        "menuName": "大区导入客",
                        "orderby": "0194",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custimport/custimport/mgrcust"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "SALES.CUSTSUCCESS:QALIST",
                        "icon": "fa-user",
                        "id": "E99B640DF568498CA6E3F8D23ED72ECE",
                        "menuName": "设置已成交",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myQualityCustList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "customer.OurCustomer",
                        "icon": "",
                        "id": "8aaaf03173b7a1cf0173bda08cce004f",
                        "menuName": "私客查询",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/customer/OurCustomer"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "CRM.CUST.MENU.ZONECUSTYTRACKLIST",
                        "id": "11000000039774",
                        "isOutlink": "0",
                        "menuName": "区域客户跟进",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custtrack/myZoneCrmTrackList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "CRM.CUST.MENU.MYCUSTTRACKLIST",
                        "id": "11000000039768",
                        "isOutlink": "0",
                        "menuName": "我的客户跟进",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custtrack/myCrmTrackListNew"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "CRM.CUST.MENU.SHOWALLCUTSTPOOL",
                        "id": "11000000039762",
                        "isOutlink": "0",
                        "menuName": "公客列表",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/custpool/toShowAllCustpool"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "CRM.CUST.MENU.ZONECUSTLIST",
                        "id": "11000000039263",
                        "isOutlink": "0",
                        "menuName": "区域客户",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myZoneCustList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.CUST.MENU.ZONECUSTLOOKLIST",
                        "id": "11000000039124",
                        "isOutlink": "0",
                        "menuName": "区域带看",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custlook/custShow/myZoneCustLookList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "CRM.CUST.MENU.MYCUSTSUCCLIST",
                        "id": "11000000039780",
                        "isOutlink": "0",
                        "menuName": "我的成交客户",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myCustSuccessList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "KHtest",
                        "id": "11000000036130",
                        "isOutlink": "1",
                        "menuName": "客户测试菜单",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "http://www.baidu.com"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "CRM.CUST.MENU.ZONECUSTSUCCLIST",
                        "id": "11000000039786",
                        "isOutlink": "0",
                        "menuName": "区域成交客户",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myZoneCustSuccList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.CUST.MENU.MYCUSTLOOKLIST",
                        "id": "11000000039792",
                        "isOutlink": "0",
                        "menuName": "我的带看",
                        "orderby": "1",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/custlook/custShow/myCustomerLookList"
                    },
                    {
                        "children": [

                        ],
                        "code": "sales.menu.custlook.wzcustlook",
                        "icon": "",
                        "id": "DBACAD1FD36545B7831213505E20BD2B",
                        "menuName": "区域带看（旧）",
                        "orderby": "182",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "type": "MEN",
                        "url": "/custlook/custShow/toWZCustlookList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "sales.MYCUSTDEAL",
                        "icon": "fa-cog",
                        "id": "83D5BF2031464E7D9C164B35FCF5E135",
                        "menuName": "成交客户",
                        "orderby": "9999",
                        "parentId": "FB82CDC7F57B44B784BBD08A6448CC9B",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,FB82CDC7F57B44B784BBD08A6448CC9B,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/customer/myCustSuccList"
                    }
                ],
                "code": "SALES.CUSTMGR",
                "icon": "iconkehuguanli",
                "id": "FB82CDC7F57B44B784BBD08A6448CC9B",
                "menuName": "客户管理",
                "orderby": "0030",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "children": [{
                        "children": [

                        ],
                        "code": "sales.estatedictionary",
                        "icon": "icon-book",
                        "id": "D9A4EB881B5A4E9B89E8273C9DDF6705",
                        "menuName": "楼盘字典",
                        "orderby": "",
                        "parentId": "2D9BAF588769498182BE7C896D9E4CA9",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,2D9BAF588769498182BE7C896D9E4CA9,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "type": "MEN"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.WORKAREA",
                        "icon": "icon-user",
                        "id": "B7915D2D53CB465E9496FC2F55D68B04",
                        "menuName": "子盘列表",
                        "orderby": "1",
                        "parentId": "2D9BAF588769498182BE7C896D9E4CA9",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,2D9BAF588769498182BE7C896D9E4CA9,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/workarea/buildsetList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.SUBGRPBOX",
                        "icon": "icon-user",
                        "id": "F623B48B111F4BD79BEC446036CD6A46",
                        "menuName": "组织权限分配",
                        "orderby": "3",
                        "parentId": "2D9BAF588769498182BE7C896D9E4CA9",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,2D9BAF588769498182BE7C896D9E4CA9,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/workarea/org2buildsetMgr.html"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.employee.workReport",
                        "icon": "fa-pie-chart",
                        "id": "5F46C1B3FA9146D68BBFF27A82171F10",
                        "menuName": "员工工作量报表",
                        "orderby": "7",
                        "parentId": "2D9BAF588769498182BE7C896D9E4CA9",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,2D9BAF588769498182BE7C896D9E4CA9,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/report/empWorkload/workReport"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.TSMWORKLOADSETTINGS",
                        "icon": "icon-user",
                        "id": "608FB725198A4835A613468603CE182A",
                        "menuName": "工作量设置",
                        "orderby": "8",
                        "parentId": "2D9BAF588769498182BE7C896D9E4CA9",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,2D9BAF588769498182BE7C896D9E4CA9,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/report/workloadSetting/toWorkLoadList"
                    }
                ],
                "code": "SALES.SALESMGR",
                "icon": "fa-pie-chart",
                "id": "2D9BAF588769498182BE7C896D9E4CA9",
                "menuName": "销售管理",
                "orderby": "0050",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "type": "MDL"
            },
            {
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.ESTATE",
                        "icon": "icon-dashboard",
                        "id": "41778026A50544AFA8657B7306FCF9DF",
                        "menuName": "楼盘管理",
                        "orderby": "0010",
                        "parentId": "B6CAA6E4FA1645A0AB8F4F4A24D23EA0",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,B6CAA6E4FA1645A0AB8F4F4A24D23EA0,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/frame/frameEstate"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.FRAME.CENTELINEAREA",
                        "icon": "",
                        "id": "A16E83FB3E514D29B9857448B9C69851",
                        "menuName": "片区管理",
                        "orderby": "0020",
                        "parentId": "B6CAA6E4FA1645A0AB8F4F4A24D23EA0",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,B6CAA6E4FA1645A0AB8F4F4A24D23EA0,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/frameChanjueArea/toChanjueAreaList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.ORG.SAVEORG",
                        "icon": "",
                        "id": "944CAE3E567E488A86547D868852D91D",
                        "menuName": "新增子组",
                        "orderby": "0050",
                        "parentId": "B6CAA6E4FA1645A0AB8F4F4A24D23EA0",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,B6CAA6E4FA1645A0AB8F4F4A24D23EA0,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/Org/frameOrgSub"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.ORG.frameOrgBuildset",
                        "icon": "",
                        "id": "F175F3A010CF4D708847BCFCF6BBBDFC",
                        "menuName": "子组关联子盘",
                        "orderby": "0060",
                        "parentId": "B6CAA6E4FA1645A0AB8F4F4A24D23EA0",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,B6CAA6E4FA1645A0AB8F4F4A24D23EA0,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/Org/frameOrgBuildset"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.VIEW.Planning",
                        "icon": "fa-cog",
                        "id": "042089F722894B90919AA8F2758FFFC4",
                        "menuName": "划盘权限详情",
                        "orderby": "0070",
                        "parentId": "B6CAA6E4FA1645A0AB8F4F4A24D23EA0",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,B6CAA6E4FA1645A0AB8F4F4A24D23EA0,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/Planning/ViewPlanningEstate"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.GROUP.BUILDSET",
                        "icon": "",
                        "id": "8A39E586DA5F44C8A02B4E14989C4D2A",
                        "menuName": "子组查看子盘详情",
                        "orderby": "0080",
                        "parentId": "B6CAA6E4FA1645A0AB8F4F4A24D23EA0",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,B6CAA6E4FA1645A0AB8F4F4A24D23EA0,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/GroupBuild/OrgGroupBuildset"
                    }
                ],
                "code": "SALES.FRAME",
                "icon": "iconkuangjiaguanli",
                "id": "B6CAA6E4FA1645A0AB8F4F4A24D23EA0",
                "menuName": "框架管理",
                "orderby": "0070",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "type": "MDL"
            },
            {
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "sales.estatedictionary",
                        "icon": "icon-book",
                        "id": "ADE44A8BF574483E83E544319B4F652F",
                        "menuName": "楼盘字典",
                        "orderby": "",
                        "parentId": "4B051DABF8AE496992417072586C3863",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,4B051DABF8AE496992417072586C3863,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/estateDic/estateDicListResut"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUNOEXPLPICBRAND.LIST",
                        "icon": "",
                        "id": "40D9F3E0C36842AD8909B56618DBA409",
                        "menuName": "非标准户型",
                        "orderby": "",
                        "parentId": "4B051DABF8AE496992417072586C3863",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,4B051DABF8AE496992417072586C3863,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houExplBrand/houNoExplPicBrandList"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUEXPLBRAND.LIST",
                        "icon": "",
                        "id": "23FC8F931B654ABD9DE0ED65DEA07C79",
                        "menuName": "户型图修改",
                        "orderby": "",
                        "parentId": "4B051DABF8AE496992417072586C3863",
                        "parentIds": "FA3CE269853E4E0AB8674BE02FB74D0E,4B051DABF8AE496992417072586C3863,",
                        "rootNode": false,
                        "show": 0,
                        "target": "",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/houExplBrand/houExplBrandList"
                    }
                ],
                "code": "SALES.dictionary",
                "icon": "iconloupanzidian",
                "id": "4B051DABF8AE496992417072586C3863",
                "menuName": "楼盘字典",
                "orderby": "0080",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "type": "MDL"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                    "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                    "children": [

                    ],
                    "code": "ATTACT:ATTACH_MANAGER_SELECT",
                    "icon": "",
                    "id": "8aaaf02170e9342e0170f72416070081",
                    "menuName": "备件列表管理",
                    "orderby": "0201",
                    "parentId": "8aaaf02170e9342e0170f72238af007e",
                    "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,8aaaf02170e9342e0170f72238af007e,",
                    "rootNode": false,
                    "show": 0,
                    "target": "",
                    "targetApp": {
                        "$ref": "$.data.children[3].children[1].targetApp"
                    },
                    "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                    "type": "MEN",
                    "url": "/cbs/menu?appName=attach&url=/tmsBeijianList/toList.htm"
                }],
                "code": "ATTACH.ATTACH_MANAGER",
                "icon": "icon-file",
                "id": "8aaaf02170e9342e0170f72238af007e",
                "menuName": "备件管理",
                "orderby": "0201",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/house-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.MANAGEMENT.MYCUSTLOOKLIST",
                        "id": "11000000171699",
                        "isOutlink": "0",
                        "menuName": "我的带看",
                        "orderby": "1",
                        "parentId": "11000000171696",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000171696,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=house-web&url=/house-show-web/my-look"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.HOUSE.MANAGEMENT.HELP",
                        "id": "11000000171705",
                        "isOutlink": "0",
                        "menuName": "帮带管理",
                        "orderby": "2",
                        "parentId": "11000000171696",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000171696,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=house-web&url=/house-show-web/help-look"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "SALES.CUST.MANAGEMENT.ZONECUSTLOOKLIST",
                        "id": "11000000171708",
                        "isOutlink": "0",
                        "menuName": "区域带看",
                        "orderby": "3",
                        "parentId": "11000000171696",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000171696,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=house-web&url=/house-show-web/area-look"
                    }
                ],
                "code": "SALES.HOUSE.MANAGEMENT",
                "icon": "dict",
                "id": "11000000171696",
                "isOutlink": "0",
                "menuName": "带看管理",
                "orderby": "1",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "targetApp": {
                    "appCname": "V+房客源",
                    "appKey": "house-web",
                    "appName": "house-web",
                    "appSecret": "house-web",
                    "domain": "bacic5i5j.com",
                    "host": "sit.tianjin.cbsv.bacic5i5j.com",
                    "id": "11000000160650",
                    "port": 80,
                    "schemas": "http",
                    "webContext": "/house-web"
                },
                "targetAppId": "11000000160650",
                "type": "MDL"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "BDIR.DUTY.FLAG",
                        "id": "11000000154757",
                        "isOutlink": "0",
                        "menuName": "责任盘标记",
                        "orderby": "1",
                        "parentId": "11000000154747",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000154747,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=vplus-bdir-web&url=/duty-web/sign"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "BDIR.DUTY.ASSIGN",
                        "id": "11000000154762",
                        "isOutlink": "0",
                        "menuName": "责任盘分配",
                        "orderby": "2",
                        "parentId": "11000000154747",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000154747,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=vplus-bdir-web&url=/duty-web/dist"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "BDIR.DUTY.ASSIGN.LOG",
                        "id": "11000000154768",
                        "isOutlink": "0",
                        "menuName": "责任盘操作日志",
                        "orderby": "3",
                        "parentId": "11000000154747",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000154747,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=vplus-bdir-web&url=/duty-web/config-log"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "BDIR.DUTY.SELECT",
                        "id": "11000000154771",
                        "isOutlink": "0",
                        "menuName": "责任盘查询",
                        "orderby": "4",
                        "parentId": "11000000154747",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000154747,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=vplus-bdir-web&url=/duty-web/list"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "DUTY_STATIS_LOAD",
                        "id": "11000000154774",
                        "isOutlink": "0",
                        "menuName": "责任盘统计",
                        "orderby": "5",
                        "parentId": "11000000154747",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000154747,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=vplus-bdir-web&url=/duty-web/statistics"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                        "children": [

                        ],
                        "code": "BDIR.DUTY.RULE",
                        "id": "11000000154777",
                        "isOutlink": "0",
                        "menuName": "责任盘配置管理",
                        "orderby": "6",
                        "parentId": "11000000154747",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000154747,",
                        "rootNode": false,
                        "show": 0,
                        "target": "_BLANK",
                        "targetApp": {
                            "$ref": "$.data.children[3].children[1].targetApp"
                        },
                        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                        "type": "MEN",
                        "url": "/cbs/menu?appName=vplus-bdir-web&url=/duty-web/config-view"
                    }
                ],
                "code": "zrpgl",
                "id": "11000000154747",
                "isOutlink": "0",
                "menuName": "责任盘管理",
                "orderby": "1",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [{
                    "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                    "children": [

                    ],
                    "code": "SALES.HOUEXPLDRAWMAP",
                    "id": "7384503713",
                    "isOutlink": "0",
                    "menuName": "绘制户型图",
                    "orderby": "1",
                    "parentId": "7060345465",
                    "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,FA3CE269853E4E0AB8674BE02FB74D0E,7060345465,",
                    "rootNode": false,
                    "show": 0,
                    "targetApp": {
                        "$ref": "$.data.children[3].children[1].targetApp"
                    },
                    "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                    "type": "MEN",
                    "url": "/houExplInvt/explPhotoDetail"
                }],
                "code": "SALES.TOOLS",
                "icon": "fa-wrench",
                "id": "7060345465",
                "isOutlink": "0",
                "menuName": "我的工具",
                "orderby": "1",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MDL",
                "url": ""
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/sales-web",
                "children": [

                ],
                "code": "Newhousesystem",
                "icon": "dict",
                "id": "11000000098690",
                "isOutlink": "1",
                "menuName": "新房分销系统",
                "orderby": "1",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "target": "_BLANK",
                "targetApp": {
                    "$ref": "$.data.children[3].children[1].targetApp"
                },
                "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
                "type": "MEN",
                "url": "sit.tianjin.cbsv.bacic5i5j.com/nhcbs/"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/nhcbs",
                "children": [{
                    "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                    "children": [

                    ],
                    "code": "Projectlist",
                    "id": "11000000046045",
                    "isOutlink": "0",
                    "menuName": "项目列表",
                    "orderby": "1",
                    "parentId": "11000000046033",
                    "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000046033,",
                    "rootNode": false,
                    "show": 0,
                    "target": "SELF",
                    "targetApp": {
                        "$ref": "$.data.children[12].children[1].targetApp"
                    },
                    "targetAppId": "2c978083647d981401647df6d7300000",
                    "type": "MEN",
                    "url": "/nhcbs/menu?appName=nhcbs-vue&url=/NH/projectManagement/projList?source=cbsv"
                }],
                "code": "xfproject",
                "id": "11000000046033",
                "isOutlink": "0",
                "menuName": "新房项目",
                "orderby": "1",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "targetApp": {
                    "appCname": "新房业务系统",
                    "appKey": "nhcbs-vue",
                    "appName": "nhcbs-vue",
                    "appSecret": "nhcbs-vue",
                    "domain": "bacic5i5j.com",
                    "host": "sit.tianjin.cbsv.bacic5i5j.com",
                    "id": "297e7a3772045d490172078860000000",
                    "orderby": "1",
                    "port": 80,
                    "schemas": "http",
                    "webContext": "/nhcbs"
                },
                "targetAppId": "297e7a3772045d490172078860000000",
                "type": "MDL"
            },
            {
                "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/nhcbs",
                "children": [{
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "XFadjustNewCustomer",
                        "id": "11000000040177",
                        "isOutlink": "0",
                        "menuName": "新房客源录入",
                        "orderby": "1",
                        "parentId": "11000000040169",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000040169,",
                        "rootNode": false,
                        "show": 0,
                        "target": "SELF",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/nhcbs/menu?appName=nhcbs-vue&url=/NH/customerManagements/adjustNewCustomer?source=cbsv"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "XFmyCustomerList",
                        "id": "11000000040172",
                        "isOutlink": "0",
                        "menuName": "新房客源查询",
                        "orderby": "2",
                        "parentId": "11000000040169",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000040169,",
                        "rootNode": false,
                        "show": 0,
                        "target": "SELF",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/nhcbs/menu?appName=nhcbs-vue&url=/NH/customerManagements/myCustomerList?source=cbsv"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "XFdealCustomerList",
                        "id": "11000000040191",
                        "isOutlink": "0",
                        "menuName": "成交客源查询",
                        "orderby": "3",
                        "parentId": "11000000040169",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000040169,",
                        "rootNode": false,
                        "show": 0,
                        "target": "SELF",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/nhcbs/menu?appName=nhcbs-vue&url=/NH/customerManagements/dealCustomerList?source=cbsv"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "XFreferralsCustomerList",
                        "id": "11000000040188",
                        "isOutlink": "0",
                        "menuName": "转介客源查询",
                        "orderby": "4",
                        "parentId": "11000000040169",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000040169,",
                        "rootNode": false,
                        "show": 0,
                        "target": "SELF",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/nhcbs/menu?appName=nhcbs-vue&url=/NH/customerManagements/referralsCustomerList?source=cbsv"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "XForganizeCustomerList",
                        "id": "11000000040185",
                        "isOutlink": "0",
                        "menuName": "客源调配管理",
                        "orderby": "5",
                        "parentId": "11000000040169",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000040169,",
                        "rootNode": false,
                        "show": 0,
                        "target": "SELF",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/nhcbs/menu?appName=nhcbs-vue&url=/NH/customerManagements/organizeCustomerList?source=cbsv"
                    },
                    {
                        "absoluteUrl": "http://sit.tianjin.cbsv.bacic5i5j.com/crm-web",
                        "children": [

                        ],
                        "code": "XFcustomerDeploymentList",
                        "id": "11000000040182",
                        "isOutlink": "0",
                        "menuName": "客源调配日志",
                        "orderby": "6",
                        "parentId": "11000000040169",
                        "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,11000000040169,",
                        "rootNode": false,
                        "show": 0,
                        "target": "SELF",
                        "targetApp": {
                            "$ref": "$.data.children[12].children[1].targetApp"
                        },
                        "targetAppId": "2c978083647d981401647df6d7300000",
                        "type": "MEN",
                        "url": "/nhcbs/menu?appName=nhcbs-vue&url=/NH/customerManagements/customerDeploymentList?source=cbsv"
                    }
                ],
                "code": "xfcustomer",
                "id": "11000000040169",
                "isOutlink": "0",
                "menuName": "新房客户管理",
                "orderby": "1",
                "parentId": "FA3CE269853E4E0AB8674BE02FB74D0E",
                "parentIds": "00C9379756584DCD890A9D9B66666666,FA3CE269853E4E0AB8674BE02FB74D0E,",
                "rootNode": false,
                "show": 0,
                "targetApp": {
                    "$ref": "$.data.children[21].targetApp"
                },
                "targetAppId": "297e7a3772045d490172078860000000",
                "type": "MDL"
            }
        ],
        "code": "SALES",
        "icon": "icon-user",
        "id": "FA3CE269853E4E0AB8674BE02FB74D0E",
        "menuName": "sales-web",
        "orderby": "0100",
        "parentId": "00C9379756584DCD890A9D9B66666666",
        "parentIds": "00C9379756584DCD890A9D9B66666666,",
        "rootNode": false,
        "show": 0,
        "target": "",
        "targetApp": {
            "$ref": "$.data.children[3].children[1].targetApp"
        },
        "targetAppId": "8ae884da6cfb2764016cfbbf48440000",
        "type": "APP",
        "url": ""
    },
    "message": "成功"
}

export let userInfo = [{
        "cityCode": "310100",
        "compId": "2",
        "id": "USER_ORG_JOB_585055_1",
        "userId": "585055",
        "username": "585055",
        "isLock": null,
        "isDeleted": null,
        "available": null,
        "realName": "赵亮",
        "employeeCode": null,
        "mobile": null,
        "orgId": "134070",
        "orgCode": "10002_1000008517",
        "orgName": "品管与楼盘字典部",
        "jobId": "1690",
        "jobCode": "JPKZY",
        "jobCodeAlias": "SH:RECALL-AGENT",
        "adminOrg": "134070",
        "isLeader": 0,
        "jobName": "信息稽核专员",
        "orgAvailable": "1",
        "ismain": "1",
        "belongerBizDepId": null,
        "belongerBizDepName": null,
        "lastHireDt": 1383494400000,
        "effectiveDate": null,
        "expiredDate": null,
        "sourceType": null,
        "parentId": null
    }];