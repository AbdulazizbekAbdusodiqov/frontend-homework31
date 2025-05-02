import React, { FC } from 'react'
import { MainLayoutWrapper } from './MainLayout.styles'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface MainLayoutProps {
	children: React.ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<MainLayoutWrapper>
			<Sidebar />
			<div className='layout-wrapper'>
				<Navbar />
				{children}
			</div>
		</MainLayoutWrapper>
	)
}

export default MainLayout;