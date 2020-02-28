<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <a-collapse v-model="activeKey">
            <a-collapse-panel header="搜索条件" key="1">
              <a-form layout="inline" :form="form" @submit="handleSubmit">
                <a-form-item label="渠道" :label-col="{ span: 10 }" :wrapper-col="{ span: 12 }">
                  <a-select style="width: 120px"
                            v-decorator="['channel', { rules: [{ required: false}] }]"
                  >
                    <a-select-option value="market">卖场</a-select-option>
                    <a-select-option value="school">高校</a-select-option>
                    <a-select-option value="department">青年公寓/老年公寓</a-select-option>
                    <a-select-option value="other" disabled>其他</a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="活动形式" :label-col="{ span: 10 }" :wrapper-col="{ span: 12 }">
                  <a-select style="width: 120px"
                            v-decorator="['shape', { rules: [{ required: false}] }]"
                  >
                    <a-select-option value="test">试饮/卖赠</a-select-option>
                    <a-select-option value="miniShow">MINI秀</a-select-option>
                    <a-select-option value="roadShow">RoadShow</a-select-option>
                    <a-select-option value="sponsor">异业联动/赞助</a-select-option>
                    <a-select-option value="book">订货会</a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item>
                  <a-date-picker @change="onChange" placeholder="开始时间"
                                 v-decorator="['startDate', { rules: [{ required: false}] }]"/>
                </a-form-item>
                <a-form-item>
                  <a-date-picker @change="onChange" placeholder="结束时间"
                                 v-decorator="['endDate', { rules: [{ required: false }] }]"/>
                </a-form-item>
                <a-form-item>
                  <a-button type="primary" html-type="submit">
                    查询
                  </a-button>
                </a-form-item>
                <a-form-item>
                  <a-button type="primary" html-type="reset">
                    重置
                  </a-button>
                </a-form-item>
              </a-form>
            </a-collapse-panel>
            <a-collapse-panel header="查询结果" key="2" :disabled="false">
              <div class="searchTable">
                <div class="search-toolbar">
                  <a-button @click="downloadModel"><a-icon type="download"/>下载模板</a-button>
                  <a-upload
                    name="file"
                    action="upload"
                    :multiple="false"
                    :headers="headers"
                    @change="uploadExcel"
                  >
                    <a-button> <a-icon type="upload" />导入文件</a-button>
                  </a-upload>
                </div>
                <div class="search-table">
                  <a-table
                    :scroll="{ x: 1600, y: 300 }"
                    :columns="columns"
                    :rowKey="record => record.id"
                    :dataSource="data"
                    :pagination="pagination"
                    :loading="loading"
                    @change="handleTableChange"
                  >
                  </a-table>
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
  import {Layout} from 'ant-design-vue'
  import AFormItem from "ant-design-vue/es/form/FormItem";
  import {download, pageActivityPlan} from  '@/network/request/salesone/activity'
  import {handleDownloadFile} from '@/common/common'
  export default {
    name: "activityPlanExport",
    components: {AFormItem, Layout},
    data() {
      return {
        collapsed: false,
        form: this.$form.createForm(this, { name: 'coordinated' }),
        activeKey: ['1', '2'],
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        loading: false,
        data: [],
        pagination: {},
        columns
      };
    },
    mounted() {
      this.columns.forEach(v => {
        v.width  = "30px"
      })
      this.fetch()
    },
    methods: {
      handleTableChange(pagination, filters, sorter){
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },
      fetch(params = {}) {
        console.log('params:', params);
        this.loading = true;
        pageActivityPlan().then(res => {
          const pagination = { ...this.pagination };
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 200;
          this.loading = false;
          this.data.push(...res.data.results);
          this.pagination = pagination;
          console.log(this.data)
        }).catch(err => {
          console.log(err)
        });
      },
      uploadExcel(){
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          this.$message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          this.$message.error(`${info.file.name} file upload failed.`);
        }
      },
      downloadModel(){
        download('POPSS.xls').then(res => {
          handleDownloadFile(res.data, 'POPSS.xls')
        }).catch(err => {
          console.log(err)
        })
      },
      handleSubmit(e){
        console.log(this.form)
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }else{
            // 请求后台模糊查询
          }
        });
      },
      onChange(date, dateString){
        console.log(date, dateString)
      }
    }
  }

  const columns = [
    {
      title: '编号',
      dataIndex: 'id'
    },
    {
      title: '活动日期',
      dataIndex: 'activityNumber',
    },
    {
      title: '门店id',
      dataIndex: 'shop'
    },
    {
      title: '活动地点名称',
      dataIndex: 'address'
    },
    {
      title: '渠道',
      dataIndex: 'channel'
    },
    {
      title: '活动类型',
      dataIndex: 'activityType'
    },
    {
      title: '品牌',
      dataIndex: 'brand'
    },
    {
      title: '活动形式',
      dataIndex: 'shape'
    },
    {
      title: '执行人员',
      dataIndex: 'applier'
    },
    {
      title: 'POPSS 330ML（罐）',
      dataIndex: ''
    },
    {
      title: 'POPSS四联包（组）',
      dataIndex: ''
    },
    {
      title: '是否促销',
      dataIndex: 'isDiscount'
    },
    {
      title: '促销产品',
      dataIndex: 'discountProduct'
    },
    {
      title: '产品规格',
      dataIndex: 'unit'
    },
    {
      title: '促销价格（元） ',
      dataIndex: 'discountPrice'
    },
    {
      title: '是否店庆',
      dataIndex: 'isAnniversary'
    },
    {
      title: '是否有特陈',
      dataIndex: 'isSpecialList'
    },
    {
      title: '特陈规格',
      dataIndex: 'listUnit'
    },
    {
      title: '特陈陈列产品',
      dataIndex: 'listProduct'
    },
    {
      title: '特陈产品规格',
      dataIndex: 'listProductUnit'
    },
    {
      title: '特陈陈列位置',
      dataIndex: 'listProductPos'
    },
    {
      title: '是否缺少SKU数 ',
      dataIndex: 'isLeekSKU'
    }
  ];

</script>

<style>
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>

