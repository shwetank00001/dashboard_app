import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

import { useStateContext } from '../context/ContextProvider';


import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$21313,1</p>
            </div>
          </div>

          
          <div className='mt-6'>
            <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size="md" />

          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map(function(item){
            return(
              <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                <button 
                  type='button'
                  style={{ color: item.iconColor, backgroundColor: item.iconBg}}
                  className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                  >
                    {item.icon}  
                </button>
                <p className='mt-3'>
                  
                  <span className='font-semibold text-lg'>{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                </p>

                <p className=' text-sm text-gray-400 mt-2'>{item.title}</p>
              </div>
            )
          })}

        </div>
      </div>

            <div>
              
            </div>

    </div>
  )
}

export default Ecommerce