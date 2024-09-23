import '@/app/ui/global.css'
import { inter, roboto } from '@/app/ui/fonts'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<h1>First in body</h1>
				{children}
			</body>
		</html>
	)
}
