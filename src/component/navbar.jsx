import React from 'react'
import './menu.css'


const Navbar = ({ filter, menulist }) => {
    console.log(menulist)
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menulist.map((category) => {
                        console.log(category)
                        return (
                            <>
                                <button
                                    className="btn-group__item"
                                    onClick={() => filter(category)}>
                                    {category}
                                </button>
                            </>
                        )
                    })}
                </div>
            </nav>
        </>

    )
}

export default Navbar
