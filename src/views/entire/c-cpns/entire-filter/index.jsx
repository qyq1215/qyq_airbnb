import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames';


function EntireFilter(props) {

  const [selectItems, setSelectItems] = useState([])

 function itemClickHandle(item) {
    const newItems = [...selectItems]
    if(newItems.includes(item)) {
      console.log(newItems.indexOf(item));
      newItems.splice(newItems.indexOf(item), 1)
    }
    else newItems.push(item)
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map(item => {
          return <div 
          className={classNames("item",{active:selectItems.includes(item) })} 
          key={item}
          onClick={e => itemClickHandle(item)}
          >{item}          
          </div>
        })}
      </div>
    </FilterWrapper>
  )
}

EntireFilter.propTypes = {

}

export default EntireFilter

