import Footer from "@/app/_components/footer";

import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={cn(
					inter.className,
					" bg-light-background dark:bg-dark-background dark:text-slate-400"
				)}
			>
				<ThemeSwitcher />
				<div className="min-h-screen">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
