//getimg element from the HTML Page 
    let id = document.getElementById('id_dish')
    let dish = document.getElementById('dish_name')
    let des = document.getElementById('description')
    let price = document.getElementById('dish_price')
    let url = document.getElementById('dish_url')
    let menu_table = document.getElementById('menu_table')


//add click button 
function add_click(){
    let idv = parseInt(id_dish.value)
    let dishv = dish_name.value
    let desv = description.value
    let pricev = parseInt(dish_price.value)
    let urlv = dish_url.value
     add_row(idv,dishv,desv,pricev,urlv)
}
//adding a new row to the table  
function add_row(idv,dishv,desv,pricev,urlv){
    let new_row = menu_table.insertRow(-1)

    let cell_ID= new_row.inserCell(0)
    let cell_Item_Name= new_row.inserCell(1)
    let cell_Descriptio= new_row.inserCell(2)
    let cell_Price= new_row.inserCell(3)
    let cell_Picture_URL= new_row.inserCell(4)
    
    cell_ID.innerHTML = idv
    cell_Item_Name.innerHTML = dishv
    cell_Descriptio.innerHTML = desv
    cell_Price.innerHTML = pricev
    cell_Picture_URL.innerHTML = urlv
    
    clear_txt()
}
// clear data from inputs 
function clear_txt(){
    id_dish.value = ''
    dish_name.value = ''
    description.value = ''
    dish_price.value = ''
    dish_url.value = ''
    id_dish.focus()
}