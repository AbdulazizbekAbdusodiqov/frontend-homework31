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
            <svg width="184" height="40" viewBox="0 0 184 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0,0) scale(1)">
                    <path d="M92 39L77 25L62 11L66 7L92 29L118 7L122 11L107 25L92 39Z" stroke="#B58E59" stroke-width="2" fill="none" />
                    <path d="M92 33L80 21L68 9L70 7L92 27L114 7L116 9L104 21L92 33Z" stroke="#B58E59" stroke-width="2" fill="none" />
                    <path d="M92 27L83 18L74 9L76 7L92 23L108 7L110 9L101 18L92 27Z" stroke="#B58E59" stroke-width="2" fill="none" />
                    <path d="M92 21L86 15L80 9L82 7L92 17L102 7L104 9L98 15L92 21Z" stroke="#B58E59" stroke-width="2" fill="none" />
                    <circle cx="92" cy="7" r="1" fill="#B58E59" />
                </g>
            </svg>
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