import SideNav from '@/app/ui/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
			<h1>Dashboard layaut</h1>
			<div className='w-full flex-none md:w-64'>
				<h1> ___div with sidenav</h1>
				<SideNav />
			</div>
			<div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
				{children} <h1>div inside children</h1>
			</div>
		</div>
	)
}
