import { mount } from '@vue/test-utils'
import InfiniteTable from '@/packages/infinite-table/src/index.vue'

describe('InfiniteTable.vue', () => {
  it('shonld render vs-table class', () => {
    const wrapper = mount(InfiniteTable)
    expect(wrapper.attributes().class).toMatch('vs-table')
  })
  
  it('shonld setData after vs-table in BasicUsage', async () => {
    const wrapper = mount(InfiniteTable)
    const tableData = {
      data: [
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0000-0000-0000-0000',
          '2585-2314-2501-0000': '可乐',
          '2585-2314-2501-0001': '0.01',
          '2585-2314-2501-0002': '0.02',
          '2585-2314-2501-0003': '0.03',
          children: [
            {
              '2585-2314-2501-0000': '无糖可乐1号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0001-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐2号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0002-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐号这里是二级纯中文字符凑字数用来校验数据超长问题',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0003-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐4号ThisIsTheOthersMakeUpTheWordCountIInLevel2',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0004-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐5号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0005-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐6号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0006-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐7号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0007-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐8号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0008-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐9号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0009-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐10号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0010-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐11号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0011-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐12号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0012-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐13号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0013-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐14号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0014-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐15号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0000-0000-0000-0000',
              key: '0000-0015-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐16号',
              '2585-2314-2501-0001': '-',
              '2585-2314-2501-0002': '-',
              '2585-2314-2501-0003': '-',
              pKey: '0000-0000-0000-0000',
              key: '0000-0016-0000-0000'
            }
          ]
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0001-0000-0000-0000',
          '2585-2314-2501-0000': '无百事不可乐的百事可乐',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          children: [
            {
              '2585-2314-2501-0000': '百事无糖1号',
              '2585-2314-2501-0001': '1.11',
              '2585-2314-2501-0002': '1.12',
              '2585-2314-2501-0003': '1.13',
              pKey: '0001-0000-0000-0000',
              key: '0001-0001-0000-0000'
            },
            {
              '2585-2314-2501-0000': '百事无糖2号',
              '2585-2314-2501-0001': '1.11',
              '2585-2314-2501-0002': '1.12',
              '2585-2314-2501-0003': '1.13',
              pKey: '0001-0000-0000-0000',
              key: '0001-0002-0000-0000'
            }
          ]
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0002-0000-0000-0000',
          // '2585-2314-2501-0000': '可乐junThisIsTheFirstLevelAndrequiresALotOfCharacters',
          '2585-2314-2501-0000': '可乐junThisIsThe',
          '2585-2314-2501-0001': '0.01',
          '2585-2314-2501-0002': '0.02',
          '2585-2314-2501-0003': '0.03',
          children: [
            {
              '2585-2314-2501-0000': '无糖可乐1号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0002-0000-0000-0000',
              key: '0002-0001-0000-0000'
            },
            {
              '2585-2314-2501-0000': '无糖可乐2号',
              '2585-2314-2501-0001': '0.11',
              '2585-2314-2501-0002': '0.12',
              '2585-2314-2501-0003': '0.13',
              pKey: '0002-0000-0000-0000',
              key: '0002-0002-0000-0000'
            }
          ]
        }
      ],
      columns: [
        {
          fixed: true,
          isSort: false,
          key: '2585-2314-2501-0000',
          name: '产品名称',
          sort: '0',
          style: {},
          unit: ''
        },
        {
          fixed: false,
          isSort: true,
          key: '2585-2314-2501-0001',
          name: '当年收入',
          sort: '1',
          style: {},
          unit: '亿'
        },
        {
          fixed: false,
          isSort: true,
          key: '2585-2314-2501-0002',
          name: '当月收入',
          sort: '0',
          style: {},
          unit: '亿'
        },
        {
          fixed: false,
          isSort: true,
          key: '2585-2314-2501-0003',
          name: '当日收入',
          sort: '0',
          style: {},
          unit: '亿'
        }
      ]
    }
   
    await wrapper.setProps({ tableData })
 
    // 父级表格是否出现
    const CardContainerTable = wrapper.findComponent({ name: 'CardContainerTable' })
    expect(CardContainerTable.exists()).toBe(true)
    const CardFixedTable = wrapper.findComponent({ name: 'CardFixedTable' })
    expect(CardFixedTable.exists()).toBe(true)
    const CardHeaderTable = wrapper.findComponent({ name: 'CardHeaderTable' })
    expect(CardHeaderTable.exists()).toBe(true)

    const fixedDiv = await wrapper.find('.vs-table-fixed-div')
    const scrollDiv = await wrapper.find('.vs-scroll-div')
    
    // 默认表格（产品名称）无排序--点击无变化
    const p = await scrollDiv
      .find('.vs-p-head-tr')
      .findAll('.vs-p-head-th').at(1)
      .find('.vs-table-sort-div-ab')
    await p.trigger('click')
    expect(p.attributes().style).toBe('display: none;')

    // 默认（当年收入）正序排序
    const h = await scrollDiv
      .find('.vs-p-head-tr')
      .findAll('.vs-p-head-th').at(2)
      .find('.vs-table-sort-div-ab')
    expect(h.attributes().class).toMatch('vs-table-sort-div-ab-bottom')
    await h.trigger('click')

    // 点击之后（当年收入）倒序排序
    expect(h.attributes().class).toMatch('vs-table-sort-div-ab-top')
    
    // 表格（当月收入）正序排序
    const q = await scrollDiv
      .find('.vs-p-head-tr')
      .findAll('.vs-p-head-th').at(3)
      .find('.vs-table-sort-div-ab')
    await q.trigger('click')
    expect(q.attributes().class).toMatch('vs-table-sort-div-ab-bottom')
    await q.trigger('click')

    // 表格点击之后（当月收入）倒序排序
    expect(q.attributes().class).toMatch('vs-table-sort-div-ab-top')

    // 恢复
    await h.trigger('click')

    // 点击展开一级（可乐）
    const e = await fixedDiv.findAll('.vs-p-tr').at(2).findAll('.vs-p-td').at(1)
    expect(e.exists()).toBe(true)
    const j = await e.find('.vs-table-icon-down')
    expect(j.exists()).toBe(true)
    await e.trigger('click')
    const k = await e.find('.vs-table-icon-up')
    expect(k.exists()).toBe(true)
    // expect(e.attributes().class).toMatch('vs-unit-clicked')

    // 点击展开省略符
    const l = await fixedDiv.findAll('.vs-tr-children').at(1).findAll('.vs-label-c-table-c-tr').at(2).findAll('.vs-label-c-table-c-td').at(1)
    await l.trigger('click')
    expect(l.attributes().class).toMatch('vs-unit-clicked')

    // 点击查看更多
    const f = await fixedDiv
      .findAll('.vs-tr-children').at(1)
      .find('.vs-table-fixed-c-more-btn')
    expect(f.exists()).toBe(true)
    await f.trigger('click')

    // 校验弹窗弹出
    const CardChildTable = wrapper.findComponent({ name: 'CardChildTable' })
    expect(CardChildTable.exists()).toBe(true)
    const childFixedDiv = await CardChildTable.find('.vs-table-fixed-div')
    const childScrollDiv = await CardChildTable.find('.vs-scroll-div')

    // 默认子表格（产品名称）无排序--点击无变化
    const o = await childScrollDiv
      .find('.vs-p-head-tr')
      .findAll('.vs-p-head-th').at(1)
      .find('.vs-table-sort-div-ab')
    await o.trigger('click')
    expect(o.attributes().style).toBe('display: none;')

    // 默认子表格（当年收入）正序排序
    const i = await childScrollDiv
      .find('.vs-p-head-tr')
      .findAll('.vs-p-head-th').at(2)
      .find('.vs-table-sort-div-ab')
    // console.log('i == ', i.html())
    expect(i.attributes().class).toMatch('vs-table-sort-div-ab-bottom')
    await i.trigger('click')

    // 子表格点击之后（当年收入）倒序排序
    expect(i.attributes().class).toMatch('vs-table-sort-div-ab-top')

    // 子表格（当月收入）正序排序
    const n = await childScrollDiv
      .find('.vs-p-head-tr')
      .findAll('.vs-p-head-th').at(3)
      .find('.vs-table-sort-div-ab')
    await n.trigger('click')
    expect(n.attributes().class).toMatch('vs-table-sort-div-ab-bottom')
    await n.trigger('click')

    // 子表格点击之后（当月收入）倒序排序
    expect(n.attributes().class).toMatch('vs-table-sort-div-ab-top')

    // 恢复
    await i.trigger('click')

    // 子表格点击展开省略符
    const m = await childFixedDiv.findAll('.vs-p-tr').at(2).findAll('.vs-p-td').at(1)
    await m.trigger('click')
    expect(m.attributes().class).toMatch('vs-unit-clicked')

    // 关闭弹窗 
    const overlayDiv = await wrapper.find('.van-overlay')
    overlayDiv.trigger('click')
  })
  
  it('shonld setData after vs-table in BasicUsage', async () => {
    // const wrapper = mount(InfiniteTable)
    const tableData = {
      data: [
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0000-0000-0000-0000',
          '2585-2314-2501-0000': '红牛20号3箱',
          '2585-2314-2501-0001': '0.01',
          '2585-2314-2501-0002': '0.02',
          '2585-2314-2501-0003': '0.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0001-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林2箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0002-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林3箱凑字数来着TOrNotTisaQButDontWarry',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0003-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林猜有多少箱但多少箱并不重要重要的时这里是中文格式凑字数的',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0004-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林5箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0005-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林6箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0006-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林7箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0007-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林8箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0008-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林9箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0009-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林10箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        },
        {
          query: {
            jumpCode: null,
            jumpValue: null
          },
          key: '0010-0000-0000-0000',
          '2585-2314-2501-0000': '元气森林11箱',
          '2585-2314-2501-0001': '1.01',
          '2585-2314-2501-0002': '1.02',
          '2585-2314-2501-0003': '1.03',
          '2585-2314-2501-0004': '0.03',
          '2585-2314-2501-0005': '0.03',
          '2585-2314-2501-0006': '0.03',
          '2585-2314-2501-0007': '0.03',
          '2585-2314-2501-0008': '0.03',
          '2585-2314-2501-0009': '0.03',
          '2585-2314-2501-0010': '0.03',
          '2585-2314-2501-0011': '0.03',
          children: []
        }
      ],
      columns: [
        {
          fixed: true,
          isSort: false,
          sort: '0',
          key: '2585-2314-2501-0000',
          name: '产品名称',
          style: {
            color: '#6195FF'
          },
          unit: ''
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0001',
          name: '自成立以\n来年化',
          style: {
            color: '#F9BB4C'
          },
          unit: '合同法'
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0002',
          name: '七日\n年化',
          unit: '%'
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0003',
          name: '近一月\n年化',
          unit: '%'
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0004',
          name: '近三月年化',
          unit: '%'
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0005',
          name: '自成立以来年化',
          unit: '市值法'
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0006',
          name: '偏离度',
          unit: '%'
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0007',
          name: '杠杆',
          unit: '%'
        },
        {
          fixed: false,
          isSort: true,
          sort: '0',
          key: '2585-2314-2501-0008',
          name: '直融占比',
          unit: '%'
        },
        {
          fixed: false,
          isSort: false,
          sort: '0',
          key: '2585-2314-2501-0009',
          name: '债券久期',
          unit: '管理口径'
        },
        {
          fixed: false,
          isSort: false,
          sort: '0',
          key: '2585-2314-2501-0010',
          name: '资产组合久期',
          unit: '管理口径'
        },
        {
          fixed: false,
          isSort: false,
          sort: '0',
          key: '2585-2314-2501-0011',
          name: '资产组合久期',
          unit: '监管口径'
        }
      ]
    }
    // await wrapper.setProps({ tableData })
    // const a = await wrapper.find('.vs-table-more-btn')
    // expect(a.html()).toContain('展开更多')
    // await a.trigger('click')
    // expect(a.html()).toContain('收起')
  })
})
