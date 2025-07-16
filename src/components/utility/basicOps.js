export default function basicOps(products,searchTerm,currCategory,sortDir,pageNum,pageSize){
     /* Filtering -> Hiding the elements*/

let filteredArr = products;
if(searchTerm != ''){
    filteredArr = filteredArr.filter((product) => {
        let lowerSearchTerm = searchTerm.toLowerCase();
        let lowerTitle = product.title.toLowerCase();
        return lowerTitle.includes(lowerSearchTerm);
    })
}

/* Sorting -> rearranging */ 
let filteredSortedArr = filteredArr;
if (sortDir!=0){
    //inreasion
    if(sortDir == 1){
        filteredSortedArr = filteredSortedArr.sort(inComparator);
    }
    else{
        filteredSortedArr = filteredSortedArr.sort(deComparator)
    }
}
/*Categorization */
let filteredSortedGroupByArr = filteredSortedArr
if(currCategory!= "All Categories"){
    
    filteredSortedGroupByArr = filteredSortedGroupByArr.filter((product)=>{
        return product.category == currCategory;
    })
}


let totalPages = Math.ceil(filteredSortedGroupByArr.length/ pageSize);

/**********Pagination*********/
let startidx = (pageNum-1) * pageSize;//(1-1)*4 = 0, (2-1)*4 = 4, (3-1)*4 = 8, (4-1)*4 = 12
let endidx = startidx + pageSize; // 0+4 = 4, 4+4 = 8, 8+4 = 12, 12+4 = 16

filteredSortedGroupByArr = filteredSortedGroupByArr.slice(startidx, endidx);

return {filteredSortedGroupByArr, totalPages}
}

function inComparator(product1,product2){
    if(product1.price >product2.price){
        return 1
    }
    else{
        return -1
    }
}


function deComparator(product1,product2){
    if(product1.price < product2.price){
        return 1
    }
    else{
        return -1
    }
}

/*rendering 4 products per page
 [0,3],
[4,7],
[8,11],
[12,15],
[16,20] */