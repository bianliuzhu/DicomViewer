# DicomViewer

DicomViewer be based on [DWV](https://github.com/ivmartel/dwv) (DICOM Web Viewer) and [Vue.js](https://vuejs.org/).

## 使用方法

``` bash
# 安装依赖
yarn install

# 启动项目 在本地主机上热加载:8080
yarn run start

# 将项目打包 用生产环境 (服务器)
yarn run build

# 构建用于生产和查看bundle analyzer报告
yarn run build --report

# 运行测试单元
yarn run unit

# 运行 e2e 测试
yarn run e2e

# 运行所有测试
yarn run test
```

* 1.将项目 download 至本地

* 2.在项目最外层 目录 打开 命令行 输入 yarn install 安装依赖后

* 3.启动项目 yarn run start
  ![示例图片](https://raw.githubusercontent.com/bianliuzhu/Image/master/DicomViewer0.jpg)

* 4.项目 跑起来后 将本地的 Dicom File 拖入 页面的虚线框就可以看到图像了
  ![示例图片](https://raw.githubusercontent.com/bianliuzhu/Image/master/DicomViewer1.jpg)

* 5.这是最终效果
  ![示例图片](https://raw.githubusercontent.com/bianliuzhu/Image/master/DicomViewer.jpg)

# 想添加什么 tools 自己研究吧

* 另外 推荐大家一个非常好的网站 [cornerstone](https://docs.cornerstonejs.org/);

