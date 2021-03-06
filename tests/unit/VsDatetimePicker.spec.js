import { mount } from '@vue/test-utils'
import VsDatetimePicker from '@/packages/vs-datetime-picker/src/index.vue'

const later = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

describe('VsDatetimePicker.vue', () => {
  const wrapper = mount(VsDatetimePicker)
  const dateType = ['date', 'year-month', 'month-day', 'year', 'month', 'quarterly', 'week-end', 'week-segment', 'just-show']

  it('shonld render vs-datetime-picker-template class', () => {
    expect(wrapper.attributes().class).toMatch('vs-datetime-picker-template')
  })

  it('shonld render vs-datetime-picker-title span.default text', async () => {
    const startTime0 = '2020/01/06'
    const endTime0 = '2020/12/26'
    const currentDate0 = '2020/11/06'
    const wrapperMap0 = mount(VsDatetimePicker, {
      propsData: {
        currentDate: currentDate0, 
        startTime: startTime0,
        endTime: endTime0
      }
    })
    await later()
    // console.log('text === ', wrapperMap0.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap0.find('.vs-datetime-picker-title span.default').text()).toBe('2020.11.06')
    
    const startTime1 = '2020/01'
    const endTime1 = '2020/12'
    const currentDate1 = '2020/11'
    const wrapperMap1 = mount(VsDatetimePicker, {
      propsData: {
        type: dateType[1], 
        currentDate: currentDate1, 
        startTime: startTime1,
        endTime: endTime1
      }
    })
    await later()
    // console.log('text === ', wrapperMap1.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap1.find('.vs-datetime-picker-title span.default').text()).toBe('2020.11')
    
    const startTime2 = '01/06'
    const endTime2 = '12/26'
    const currentDate2 = '11/06'
    const wrapperMap2 = mount(VsDatetimePicker, {
      propsData: {
        type: dateType[2], 
        currentDate: currentDate2, 
        startTime: startTime2,
        endTime: endTime2
      }
    })
    await later()
    // console.log('text === ', wrapperMap2.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap2.find('.vs-datetime-picker-title span.default').text()).toBe('11.06')
    
    const startTime3 = '2010'
    const endTime3 = '2020'
    const currentDate3 = '2015'
    const wrapperMap3 = mount(VsDatetimePicker, {
      propsData: {
        type: dateType[3], 
        currentDate: currentDate3, 
        startTime: startTime3,
        endTime: endTime3
      }
    })
    await later()
    // console.log('text === ', wrapperMap3.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap3.find('.vs-datetime-picker-title span.default').text()).toBe('2015')
    
    const startTime4 = '02'
    const endTime4 = '11'
    const currentDate4 = '06'
    const wrapperMap4 = mount(VsDatetimePicker, {
      propsData: {
        type: dateType[4], 
        currentDate: currentDate4, 
        startTime: startTime4,
        endTime: endTime4
      }
    })
    await later()
    // console.log('text === ', wrapperMap4.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap4.find('.vs-datetime-picker-title span.default').text()).toBe('06月')

    const startTime5 = '202001'
    const endTime5 = '202011'
    const currentDate5 = '202005'
    const wrapperMap5 = mount(VsDatetimePicker, {
      propsData: {
        type: dateType[5], 
        currentDate: currentDate5, 
        startTime: startTime5,
        endTime: endTime5
      }
    })
    await later()
    // console.log('text === ', wrapperMap5.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap5.find('.vs-datetime-picker-title span.default').text()).toBe('2020年Q2')

    const sundayArray6 = ['0823', '0607', '0531', '0517', '0510']
    const currentDate6 = '0607'
    const wrapperMap6 = mount(VsDatetimePicker, {
      propsData: {
        type: dateType[6], 
        currentDate: currentDate6, 
        sundayArray: sundayArray6
      }
    })
    await later()
    // console.log('text === ', wrapperMap6.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap6.find('.vs-datetime-picker-title span.default').text()).toBe('截止至06.07')
    
    const currentDate7 = '20200607'
    const validDate7 = ['2020.08.17-2020.08.23', '2020.06.01-2020.06.07', '2020.05.25-2020.05.31', '2020.05.18-2020.05.24', '2020.05.11-2020.05.17']
    const wrapperMap7 = mount(VsDatetimePicker, {
      propsData: {
        type: dateType[7], 
        currentDate: currentDate7, 
        validDate: validDate7
      }
    })
    await later()
    // console.log('text === ', wrapperMap7.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap7.find('.vs-datetime-picker-title span.default').text()).toBe('2020.06.01-06.07')
    
    const startTime8 = '2020/01/06'
    const endTime8 = '2020/12/26'
    const currentDate8 = '2020/11/06'
    const wrapperMap8 = mount(VsDatetimePicker, {
      propsData: {
        currentDate: currentDate8, 
        startTime: startTime8,
        endTime: endTime8
      }
    })
    await later()
    // console.log('text === ', wrapperMap8.find('.vs-datetime-picker-title span.default').text())
    expect(wrapperMap8.find('.vs-datetime-picker-title span.default').text()).toBe('2020.11.06')
  })
  
  it('change currentDate to is startTime after confirm value', async () => {
    // const wrapper = mount(VsDatetimePicker)
    const currentDate = '2020/11/06'
    const startTime = '2020/01/06'
    const endTime = '2020/12/26'
    await wrapper.setProps({ currentDate, startTime, endTime })
    
    await wrapper.find('.vs-datetime-picker-title').trigger('click')
    const columnLen = wrapper.findAll('.van-picker-column').length
    for (let colI = 0; colI < columnLen; colI += 1) {
      wrapper.findAll('.van-picker-column').at(colI).findAll('.van-picker-column__item').at(0).trigger('click')
    }
    await wrapper.find('.van-picker__confirm').trigger('click')
    // wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.myCurrentDate.getTime()).toBe((new Date(startTime)).getTime())
    // })
    
    // wrapper.destroy()
  })

  it('change currentDate to is endTime after confirm value', async () => {
    // const wrapper = mount(VsDatetimePicker)
    const currentDate = '2020/11/06'
    const startTime = '2020/01/06'
    const endTime = '2020/12/26'
    await wrapper.setProps({ currentDate, startTime, endTime })
    await wrapper.find('.vs-datetime-picker-title').trigger('click')
    const columnLen = wrapper.findAll('.van-picker-column').length
    for (let colI = 0; colI < columnLen; colI += 1) {
      const colItem = wrapper.findAll('.van-picker-column').at(colI).findAll('.van-picker-column__item')
      const colItemLen = colItem.length - 1
      colItem.at(colItemLen).trigger('click')
    }
    await wrapper.find('.van-picker__confirm').trigger('click')
    // wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.myCurrentDate).toEqual((new Date(endTime)))
    // expect(wrapper).toMatchSnapshot()
    // })
    
    wrapper.destroy()
  })
  
  it('change currentDate to is quarterly after confirm value', async () => {
    const wrapperQuarterly = mount(VsDatetimePicker)
    const currentDate = '2020/05'
    const startTime = '2020/01'
    const endTime = '2020/11'
    const type = 'quarterly'
    await wrapperQuarterly.setProps({ currentDate, startTime, endTime, type })
    await wrapperQuarterly.find('.vs-datetime-picker-title').trigger('click')
    const columnLen = wrapperQuarterly.findAll('.van-picker-column').length
    for (let colI = 0; colI < columnLen; colI += 1) {
      const colItem = wrapperQuarterly.findAll('.van-picker-column').at(colI).findAll('.van-picker-column__item')
      const colItemLen = colItem.length - 1
      colItem.at(colItemLen).trigger('click')
    }
    await wrapperQuarterly.find('.van-picker__confirm').trigger('click')
    expect(wrapperQuarterly.vm.$data.myCurrentDate).toEqual((new Date('2020/11/31')))
    wrapperQuarterly.destroy()
  })

  it('change currentDate to is validDate after confirm value', async () => {
    const wrapperValidDate = mount(VsDatetimePicker)
    const currentDate = '2020/06/05'
    const validDate = ['2020/06/05', '2020/06/06', '2020/07/06', '2020/08/09', '2020/08/11', '2020/08/12']
    await wrapperValidDate.setProps({ currentDate, validDate })
    await wrapperValidDate.find('.vs-datetime-picker-title').trigger('click')
    const colItem0 = wrapperValidDate.findAll('.van-picker-column').at(0).findAll('.van-picker-column__item')
    await colItem0.at(colItem0.length - 1).trigger('click')
    const colItem1 = wrapperValidDate.findAll('.van-picker-column').at(1).findAll('.van-picker-column__item')
    await colItem1.at(colItem1.length - 1).trigger('click')
    await wrapperValidDate.find('.van-picker__confirm').trigger('click')
    expect(wrapperValidDate.vm.$data.myCurrentDate).toEqual((new Date('2020/08/12')))
    // wrapperValidDate.destroy()
  })

  it('cancel or click-overlay event', async () => {
    const startTime0 = '2020/01/06'
    const endTime0 = '2020/12/26'
    const currentDate0 = '2020/11/06'
    const wrapperMap9 = mount(VsDatetimePicker, {
      propsData: {
        currentDate: currentDate0, 
        startTime: startTime0,
        endTime: endTime0
      }
    })
    await later()
    await wrapperMap9.find('.vs-datetime-picker-title').trigger('click')
    wrapperMap9.find('.van-picker__confirm').trigger('click')
    wrapperMap9.find('.van-picker__cancel').trigger('click')
    expect(wrapperMap9.emitted('cancel')).toBeTruthy()
    wrapperMap9.find('.van-picker__confirm').trigger('click')
    wrapperMap9.find('.van-overlay').trigger('click')
    expect(wrapperMap9.emitted('click-overlay')).toBeTruthy()
  })
})
