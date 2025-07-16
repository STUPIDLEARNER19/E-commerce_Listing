import React, { useState,useEffect} from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import basicOps from "../components/utility/basicOps";

import { usePaginationContext } from '../contexts/PaginationContext';

function Home() {
    /*state - term with which we want to filter the productList */
    const [searchTerm, setSearchTerm] = useState("");
    /*single source of truth for all products */
    const [products, setProducts] = useState([]);
    /*sort:0, unsorted, 1: increasing order, -1: decreasing order */
    const [sortDir, setSortDir] = useState(0);
    /*all the categories -> product */
    const [categories, setCategories] = useState([]);
    /*currCategory : category group by your result */
    const [currCategory, setCurrCategory] = useState("All Categories");

    const { pageSize, pageNum, setPageNum, setPageSize } = usePaginationContext();

    /*this is used to fetch the products*/
    useEffect(() => {
    (async function () {
    const resp = await fetch("https://fakestoreapi.com/products/");
    const productData = await resp.json();
    console.log(productData);
    setProducts(productData);
  })();
}, []); 
/*Used to fetch the categories*/
//fetch the categories -> api-> dynamic
useEffect(()=>{
    (async function () {
        const resp = await fetch("https://fakestoreapi.com/products/categories");
        const categoriesData = await resp.json();
        console.log(categoriesData);
        setCategories(categoriesData);
    })();
}, []);

    const object = basicOps(products,searchTerm,currCategory,sortDir,pageNum,pageSize);
    const filteredSortedGroupByArr = object.filteredSortedGroupByArr;
    const totalPages = object.totalPages;
    return (
        <>
            <header className="nav_wrapper">
                <div className='search_sortWrapper'>
                <input className="search-input" type= "text" value={searchTerm} onChange= {(e)=>{ setSearchTerm(e.target.value)
                    setPageNum(1) //reset page number to 1 when search term changes
                }}
                />
                <div className="icons_container">
                    <FaArrowAltCircleUp  style={{color:"white"}} fontSize="large" onClick={()=>{setSortDir(1)
                        setPageNum(1) //reset page number to 1 when sort direction changes  
                    }}/>
                    <FaArrowAltCircleDown   style ={{color:"white"}} fontSize="large" onClick={()=>{setSortDir(-1)
                        setPageNum(1) //reset page number to 1 when sort direction changes
                    }}/>
                </div>
                </div>
                <div className="categories_wrapper">
                    <Categories categories = {categories} setCurrCategory = {setCurrCategory}
                    ></Categories>
                </div>
            </header>
            <main className="product_wrapper">
                <ProductList productList = {filteredSortedGroupByArr}></ProductList>
            </main>
            
            {/*Pagination*/}
            <div className='pagination'>
                <button onClick={()=>{
                    if(pageNum > 1)
                        return  setPageNum(pageNum - 1);
                    }}
                    disabled={pageNum == 1}> 
                    <MdKeyboardArrowLeft fontSize="large" />

                </button>
                <div className='pagenum'>
                    {pageNum}
                </div>
                <button onClick={()=>{
                    if(pageNum < totalPages)
                        return setPageNum(pageNum + 1)
                    
                }}
                    disabled={pageNum == totalPages}>
                    <MdKeyboardArrowRight fontSize="large" />
                </button>

            </div>
        </>
    
  )
}

export default Home