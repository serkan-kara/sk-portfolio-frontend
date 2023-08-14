import { Topbar } from "@/components/container/Topbar";

interface IPageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
	return (
		<div className='md:container bg-red-500'>
			<Topbar />
			<div>{children}</div>
		</div>
	);
};

export { PageLayout };
