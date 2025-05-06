import React from 'react'
import { SidebarWrapper } from './Sidebar.styles'
import Link from 'next/link'

const Sidebar = () => {

    const menuItems = [
        {
            title: "Students",
            route: "/students"
        },
        {
            title: "Classes",
            route: "/classes"
        },
        {
            title: "Teachers",
            route: "/teachers"
        }
    ]

    return (
        <SidebarWrapper>
            <div>
                <img src="/logo.svg" alt="logo" />
            </div>
            <div className="menu-items">
                {menuItems.map(mItem => {
                    return (
                        <Link
                            key={mItem.route}
                            href={mItem.route}
                            style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px",
                                borderRadius: "8px",
                                transition: "background-color 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = "#B58E59";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = "inherit";
                            }}
                        >
                            {mItem.title}
                        </Link>
                    )
                })}
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar