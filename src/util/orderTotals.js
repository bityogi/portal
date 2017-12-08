import _ from 'lodash'

export const computeSheetTotals = (order) => {
  let sheets = 0

  _.map(order.orderDetail, (od) => {
    _.map(od.products, (p) => {
      if (p.product.type === 'Sheet') {
        sheets += p.quantity
      }
    })
  })

  return sheets;
}

export const computePillowCaseTotals = (order) => {
  let pillows = 0

  _.map(order.orderDetail, (od) => {
    _.map(od.products, (p) => {
      if (p.product.type === 'PillowCase') {
        pillows += p.quantity
      }
    })
  })

  return pillows;
}
