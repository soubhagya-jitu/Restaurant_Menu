import React , {useState}from 'react'
import Menu from "./MenuApi"
import MenuCard from "./MenuCard"
import Navbar from "./NavBar"

const uniqueList = [...new Set(Menu.map((curr)=>curr.category)),"All"]

const Restaurant = () => {
    const [menuData,setMenuData] =useState(Menu)
    const [uniqueData,setUniqueData] = useState(uniqueList)
    const filterData = (category)=> {
        if(category==="All") {
            setMenuData(Menu)
            return
        }
        const updatedData = Menu.filter((curr)=>{
            return curr.category == category
        })
        setMenuData(updatedData)
    }
    return (
        <>
        <Navbar  filterData={filterData} uniqueData={uniqueData}/>
        <MenuCard  menuData={menuData}/>
        </>
    )
}

export default Restaurant