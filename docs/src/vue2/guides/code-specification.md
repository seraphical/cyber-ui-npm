# 太长不看系列

- 目录文件夹统一小写加中划线
- router 中的 name 和 path
  - path 必须以/开头, children 中也要以/开头
  - name 使用大驼峰
- components 目录, 一个组件必须一个目录, 组件的入口必须是 index.vue

```md
-views
	- list
		- compoennts
			- dialog-cmp
				- index.vue
			- table-cmp
				- index.vue
		-list-manage.vue
```

- constants 目录
  - 使用 xxx-const 命名文件夹
  - 使用 PILLAR_OPTIONS, TYPE_ENUM 来进行变量命名

类名规范
魔法字符串和魔法数字问题(vuex)



# 基础规范

项目,目录,文件均以小写中划线方式分割

```js
正例：`/head-search/`、`/shopping-car/`、`smart-logo.png`、`role-form.vue`
反例：`/headSearch/`、 `smartLogo.png`、 `RoleForm.vue`
```

# vue3代码书写规范

将相关的 变量和代码 写到一起，并使用 行注释 进行分块

- 比如两个模块

```js
<script setup>
  import { ref, reactive } from 'vue';
  import { message } from 'ant-design-vue';
  import { SmartLoading } from '/@/components/framework/smart-loading';
  import _ from 'lodash';
  import { categoryApi } from '/@/api/business/category/category-api';
  import { smartSentry } from '/@/lib/smart-sentry';

  // emit
  const emit = defineEmits('reloadList');

  //  组件
  const formRef = ref();

  // ------------------------------ 显示 、隐藏操作的 变量和方法------------------------------

  // 是否展示抽屉
  const visible = ref(false);
  // 显示
  function showModal(categoryType, parentId, rowData) {
    Object.assign(form, formDefault);
    form.categoryType = categoryType;
    form.parentId = parentId;
    if (rowData && !_.isEmpty(rowData)) {
      Object.assign(form, rowData);
    }
    visible.value = true;
  }
  // 隐藏
  function onClose() {
    Object.assign(form, formDefault);
    visible.value = false;
  }

  // ------------------------------ 表单的  变量和方法 ------------------------------
  // 查询表单默认值
  const formDefault = {
    categoryId: undefined, //分类id
    categoryName: '', //分类名字
    categoryType: 1, // 分类类型
    parentId: undefined, // 父级id
    disabledFlag: false, //是否禁用
  };
  // 查询表单
  let form = reactive({ ...formDefault });
  // 表单校验规则
  const rules = {
    categoryName: [{ required: true, message: '请输入分类名称' }],
  };

  function onSubmit() {
    formRef.value
      .validate()
      .then(async () => {
        SmartLoading.show();
        try {
          if (form.categoryId) {
            await categoryApi.updateCategory(form);
          } else {
            await categoryApi.addCategory(form);
          }
          message.success(`${form.categoryId ? '修改' : '添加'}成功`);
          emit('reloadList', form.parentId);
          onClose();
        } catch (error) {
          smartSentry.captureError(error);
        } finally {
          SmartLoading.hide();
        }
      })
      .catch((error) => {
        console.log('error', error);
        message.error('参数验证错误，请仔细填写表单数据!');
      });
  }

  defineExpose({
    showModal,
  });
</script>
```

# 组件规范

## 父子组件文件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名

```js
components
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue （完整单词）
```

# 项目规范

## 目录规范

```js
src                               源码目录
|-- api                              所有api接口
|-- assets                           静态资源，images, icons, styles等
|-- components                       公用组件
|-- config                           配置信息
|-- constants                        常量信息，项目所有Enum, 全局常量等
|-- directives                       自定义指令
|-- i18n                             国际化
|-- lib                              外部引用的插件存放及修改文件
|-- mock                             模拟接口，临时存放
|-- plugins                          插件，全局使用
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- theme                            自定义样式主题
|-- utils                            工具类
|-- views                            视图目录
|   |-- role                             role模块名
|   |-- |-- role-list.vue                    role列表页面
|   |-- |-- role-add.vue                     role新建页面
|   |-- |-- role-update.vue                  role更新页面
|   |-- |-- index.less                      role模块样式
|   |-- |-- components                      role模块通用组件文件夹
|   |-- employee                         employee模块
```

## api 目录

api 文件要以 api 为结尾，比如 employee-api.js、login-api.js，方便查找

## assets 目录

```js
|assets
|-- icons
|-- images
|   |-- background-color.png
|   |-- upload-header.png
|-- styles
```

## components 目录

```js
|components
|-- error-log
|   |-- index.vue
|   |-- index.less
|-- markdown-editor
|   |-- index.vue
|   |-- index.js
|-- kebab-case
```

一个组件一个目录是为了将来组件的扩展，组件入口必须为 index.vue.
而页面子组件也采取相应的规则

## constants

此目录存放项目所有常量和枚举，如果常量在 vue 中使用，请使用 src/plugin/smart-enums-plugin.js 插件，也可以使用我们写的第三方库： vue-enum 插件 ，但是还不支持 vue3，等待更新吧

- 常量文件要以 const 为结尾，比如 login-const.js、file-const.js
- 变量要：大写下划线，比如 LOGIN_RESULT_ENUM、LOGIN_SUCCESS、LOGIN_FAIL
- 如果是 枚举，变量必须以 ENUM 为结尾，如：LOGIN_RESULT_ENUM、CODE_FRONT_COMPONENT_ENUM

```js
|constants
|-- index-const.js
|-- role-const.js
|-- employee-const.js
```

例子

```js
export const EMPLOYEE_STATUS = {
  NORMAL: {
    value: 1,
    desc: '正常',
  },
  DISABLED: {
    value: 1,
    desc: '禁用',
  },
  DELETED: {
    value: 2,
    desc: '已删除',
  },
};

export const EMPLOYEE_ACCOUNT_TYPE = {
  QQ: {
    value: 1,
    desc: 'QQ登录',
  },
  WECHAT: {
    value: 2,
    desc: '微信登录',
  },
  DINGDING: {
    value: 3,
    desc: '钉钉登录',
  },
  USERNAME: {
    value: 4,
    desc: '用户名密码登录',
  },
};

export default {
  EMPLOYEE_STATUS,
  EMPLOYEE_ACCOUNT_TYPE,
};
```

## router 与 store 目录

这两个目录一定要将业务进行拆分，不能放到一个 js 文件里。

router 尽量按照 views 中的结构保持一致

store 按照业务进行拆分不同的 js 文件

## views 目录

目录要求，按照模块划分，其中具体文件名要求如下：

如果是列表页面，要以 list 为结尾，如 role-list.vue、cache-list.vue
如果是 表单页面，要以 form 为结尾，如 role-form.vue、notice-add-form.vue
如果是 modal 弹窗，要以 modal 为结尾，如 表单弹窗 role-form-modal.vue，详情 role-detail-modal.vue
如果是 drawer 抽屉页面，要同上以 Drawer 为结尾

```js

|-- views                                        视图目录
|   |-- role                                     role模块名
|   |   |-- role-list.vue                        role列表页面
|   |   |-- role-add-form.vue                    role新建页面
|   |   |-- role-update-form-modal.vue           role更新页面
|   |   |-- index.less                           role模块样式
|   |   |-- components                           role模块通用组件文件夹
|   |   |   |-- role-title-modal.vue             role弹出框组件
|   |-- employee                                 employee模块
|   |-- behavior-log                             行为日志log模块
|   |-- code-generator                           代码生成器模块
```

# Css

block

- 直接使用.命名

element

- 表示的目的, 块与元素之间 .father_son 表示一个被父包裹的子

修饰符

- modifier
- .father_son-first

双击无法全选的问题通过编辑器的设置就可以解决的，如果你用的是 vscode，设置里面搜索 editor.wordSeparators 这个配置，把 - 从里面去掉，就可以双击选中
