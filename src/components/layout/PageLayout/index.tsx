import { Topbar } from "@/components/container/Topbar";

interface IPageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
	return (
		<>
			<div className='xl:container pt-6 px-4'>
				<Topbar />
				<main className="text-sm md:text-base">{children}</main>
			</div>
			<footer className="xl:container px-4">Footer will be here</footer>
		</>
	);
};

export { PageLayout };
