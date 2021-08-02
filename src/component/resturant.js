import React, { useState } from 'react'
import data from './data'
import Menu from './menu'
import Navbar from './navbar'


const uniqueValue = [ "All" ,
    ...new Set(data.map((category) => {
        // console.log(category.category);
        return category.category
    }))]

console.log(uniqueValue)

const Resturant = () => {
    // console.log(data)  // this will return al array
    const [menudata, setmenudata] = useState(data)
    const [menulist, setmenulist] = useState(uniqueValue)
    // console.lo   g(menulist)

    const filter = (category) => {
        if(category === "All"){
            setmenudata(data);
            return; 
        }
        const updatedValue = data.filter((currentElm) => {
            return currentElm.category === category
        })
        console.log(updatedValue)
        setmenudata(updatedValue);

    }
    return (
        <>
            <Navbar filter={filter} menulist={menulist} />
            <Menu menudata={menudata} />
        </>
    )
}
// }


export default Resturant