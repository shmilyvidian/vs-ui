<template>
  <div>
    <el-row class="infinite-doc-demo-block-row" v-for="(item, index) of pickerArr" :key="index">
      <h2 class="infinite-doc-demo-block-title">{{ item.title }}</h2>
      <div class="infinite-doc-demo-block-picker">
        <vs-datetime-picker
          v-model="item.currentDate"
          v-bind="item.itemProp"
          @confirm="fnClassification(arguments, item.confirmMethod)"
        />
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    fnClassification (argumentsArr = [], method) {
      console.log('method, a, b, c ==22 ', ...argumentsArr)
      if (!this[method]) {
        return
      }
      this[method](...argumentsArr)
    },
    confirm (currentDate, value, index) {
      console.log('pickerArr == currentDate', this.pickerArr, currentDate, value, index)
    }
  },
  data () {
    return {
      pickerArr: [
        {
          title: '基础用法',
          currentDate: '20200605',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            startTime: '20190123',
            endTime: '20201103'
          }
        },
        {
          title: '取消时保留选中值',
          currentDate: '20200605',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            startTime: '20190123',
            endTime: '20201103',
            isItSaveSelected: true
          }
        },
        {
          title: '图标类型',
          currentDate: '20200605',
          itemProp: {
            pickerRadius: '5px',
            useDefaultIcon: false,
            startTime: '20190123',
            endTime: '20201103'
          }
        },
        {
          title: '年月类型',
          currentDate: '202006',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'year-month',
            startTime: '201901',
            endTime: '202011'
          }
        },
        {
          title: '月日类型',
          currentDate: '0601',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'month-day',
            startTime: '0101',
            endTime: '1102'
          }
        },
        {
          title: '年类型',
          currentDate: '2015',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'year',
            startTime: '2010',
            endTime: '2020'
          }
        },
        {
          title: '月类型',
          currentDate: '06',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'month',
            startTime: '02',
            endTime: '11'
          }
        },
        {
          title: '季度类型',
          currentDate: '202005',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'quarterly',
            startTime: '202001',
            endTime: '202011'
          }
        },
        {
          title: '周期-不连续类型',
          currentDate: '0607',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'week-end',
            sundayArray: ['0823', '0607', '0531', '0517', '0510']
          }
        },
        {
          title: '周期-连续类型',
          currentDate: '20200607',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'week-segment',
            validDate: ['2020.08.17-2020.08.23', '2020.06.01-2020.06.07', '2020.05.25-2020.05.31', '2020.05.18-2020.05.24', '2020.05.11-2020.05.17']
          }
        },
        {
          title: '周期-连续类型-跨年',
          currentDate: '20200105',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            type: 'week-segment',
            validDate: ['2019.12.30-2020.01.05', '2020.01.06-2020.01.12', '2020.01.13-2020.01.19', '2020.01.20-2020.01.26']
          }
        },
        {
          title: '不规则日期类型',
          currentDate: '20200605',
          confirmMethod: 'confirm',
          itemProp: {
            pickerRadius: '5px',
            showCalendar: false,
            validDate: ['2020/06/05', '2020/06/06', '2020/07/06', '2020/08/09', '2020/08/11', '2020/08/12']
          }
        },
        {
          title: '仅展示类型',
          currentDate: '20200605',
          itemProp: {
            pickerRadius: '5px',
            type: 'just-show',
            startTime: '20190123',
            endTime: '20201103'
          }
        },
        {
          title: '间隔符为-',
          currentDate: '20200605',
          itemProp: {
            pickerRadius: '5px',
            type: 'just-show',
            startTime: '20190123',
            endTime: '20201103',
            diviedTag: '-'
          }
        }
      ]
    }
  }
}
</script>

<style>
</style>
