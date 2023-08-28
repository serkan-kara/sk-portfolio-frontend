import { Topbar } from "@/components/container/Topbar";

interface IPageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
	return (
		<>
			<div className='md:container pt-6'>
				<Topbar />
				<main className='py-4'>{children}</main>
			</div>
			<footer className="md:container">Footer will be here</footer>
		</>
	);
};

export { PageLayout };
