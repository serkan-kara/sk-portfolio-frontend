import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Lato, Poppins } from "next/font/google";
import { PageLayout } from "@/components/layout/PageLayout";

const raleway = Raleway({ subsets: ["latin"], variable: "--header-font" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600", "700", "900"] });

export const metadata: Metadata = {
	title: "Serkan Kara - Software Engineer",
	description: "This is a personal portfolio page for Serkan Kara",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='bg-darkGunmetal text-platinum text-sm'>
			<body className={`${raleway.variable} ${poppins.className}`}>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
