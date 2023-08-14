import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageLayout } from "@/components/layout/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Serkan Kara - Software Engineer",
	description: "This is a personal portfolio page for Serkan Kara",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='bg-darkGunmetal text-platinum text-sm'>
			<body className={inter.className}>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
