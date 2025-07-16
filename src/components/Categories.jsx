import React from 'react'
import { usePaginationContext } from '../contexts/PaginationContext.jsx';

function Categories(props) {
    const {categories, setCurrCategory} = props
    const { setPageNum } = usePaginationContext();

  return (
    <>
        <button className='category_option' onClick = {()=>{setCurrCategory("All Categories")
            setPageNum(1) //reset page number to 1 when category changes  
        }}>
          All Categories
          </button>
                    {categories.map((category)=> {
                        return <button className='category_option' 
                        onClick={()=>{
                            setCurrCategory(category);
                            setPageNum(1) //reset page number to 1 when category changes
                           // console.log(category)
                        }}>{category}</button>
                    })}
    </>
  )
}

export default Categories