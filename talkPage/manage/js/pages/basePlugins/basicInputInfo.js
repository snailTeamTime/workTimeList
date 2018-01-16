// ================================================================
//  author:王燕欣
//  createDate: 2018/01/18
//  description: 基础信息录入
//  ===============================================================
define(function (require) {
    "use strict";
    var tpl = require('text!tpl/basePlugins/basicInputInfo.html'),
        template = _.template(tpl), _this;
    var MyValidate = require('validate');
    require('bootstrapdatepicker');
    require('daterangepicker_cn');
    return Backbone.View.extend({
      	className:"page-content",//如果不添加会document中多一级div
        initialize: function () {
            _this = this;
            this.render();
        },
        render: function () {
            this.$el.html(template(this.model));
            return this;
        },
        afterRender:function(){
        	this.validator=this.validateForm();
            //如要初始化当前View中的全部单选按钮，使用下面的代码
            BasePluginsUTIL.initCheck();
            //如要初始化当前View中的全部DatePicker，使用下面的代码
            BasePluginsUTIL.initDatePicker();
        },
        events: {
            "click #btnSaveData": "saveFormData",
        },
        saveFormData:function(){
        	var me=this;
        	//执行验证
            if (!$("#myForm1").valid()) {
            	me.validator.focusInvalid();
                return;
            }
            BasePluginsUTIL.toastrAlert('success', '提示', "验证成功，可以提交表单了");
        },
        //验证表单
        validateForm: function () {
            var me = this;
            var formId = "myForm1";
            var opration = {
                rules: {
                    titleName: {
                        required: true,
                        stringCheck: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    regionName: {
                        required: true,
                        stringCheck: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    schoolName: {
                        required: true,
                        stringCheck: true,
                        minlength: 2,
                        maxlength: 30
                    },
                    studentNum: {
                        required: true,
                        isIntGteZero:true,
                        minlength: 1,
                        maxlength: 50
                    },
                    backgroundInfo: {
                        required: true,
                        stringCheck: true,
                        minlength: 1,
                        maxlength: 5000
                    }
                },
                messages: {
                    titleName: {
                        required: "请输入标题",
                        isRightfulString: "只能输入中文英文和下划线等字符",
                        minlength: "标题最少2个字",
                        maxlength: "标题最多50个字"
                    },
                    regionName: {
                        required: "请输入地区名称",
                        stringCheck: "只能输入中文英文和下划线等字符",
                        minlength: "地区最少2个字",
                        maxlength: "地区最多50个字"
                    },
                    schoolName: {
                        required: "请输入学校名称",
                        stringCheck: "只能输入中文英文和下划线等字符",
                        minlength: "学校名称最少2个字",
                        maxlength: "学校名称最多50个字"
                    },
                    studentNum: {
                        required: "请输入学校人数",
                        isIntGteZero: "整数必须大于或等于0",
                        minlength: "学校人数最少1个字",
                        maxlength: "学校人数最多50个字"
                    },
                    backgroundInfo: {
                        required: "请输入背景介绍",
                        stringCheck: "只能输入中文英文和下划线等字符",
                        minlength: "背景介绍最少1个字",
                        maxlength: "背景介绍最多5000个字"
                    }
                }
            };
            return BasePluginsUTIL.ValidateForm(me, formId, opration);
        }
    });
});