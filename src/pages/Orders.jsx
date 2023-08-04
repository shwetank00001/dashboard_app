import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
 
import { ordersData, contecxtMenuItems, ordersGrid } from '../data/dummy'

import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10  p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Orders" category="Page" />
      <GridComponent>
        <ColumnsDirective>
        {
          ordersGrid.map(( index, item ) => (
              <ColumnDirective key={index} {...item} />
            ))
        }
        </ColumnsDirective>

      </GridComponent>
    </div>
  )
}

export default Orders