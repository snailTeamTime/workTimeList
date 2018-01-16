// ================================================================
//  author:
//  createDate: 2018/01/16
//  description: 统计图表组件 路由定义
//  ===============================================================
define(function (require) {
    "use strict";
    return Backbone.Router.extend({
        routes: {
            "": "baseDome",
            "baseDome":"baseDome",
            "baseDataTable":"baseDataTable",
            //基本信息录入
            "basicInputInfo":"basicInputInfo",
            // 总体信息录入
            "overallResults":"overallResults"
        },
        goIndex: function (requirePath, operationType, currentId, jsonObject) {
            require([requirePath], function (view) {
                BasePluginsUTIL.initMenu();//根据当前路由修改菜单选中样式
                var viewObj = {model: {_opType: operationType, _currentId: currentId, _jsonObject: jsonObject}};
                var _view = new view(viewObj);
                $('.page-content-wrapper').html(_view.$el);
                Layout.initContent();//用于内容区域的适配，对‘page-content’层定义最小高度

                //设置中间内容区域屏幕的高度,中间内容区域层的class必须是page-content
                _view.afterRender();
            });
        },
        //基础组件--模版使用介绍必读
        baseDome: function () {
            this.goIndex("pages/basePlugins/baseDome");
        },
        //基础组件--数据表
        baseDataTable:function(){
            this.goIndex("pages/basePlugins/baseDataTable");
        },
        //基本信息录入
        basicInputInfo:function(){
            this.goIndex("pages/basePlugins/basicInputInfo");
        },
        //基本信息录入
        overallResults:function(){
            this.goIndex("pages/basePlugins/overallResults");
        }

    })
});