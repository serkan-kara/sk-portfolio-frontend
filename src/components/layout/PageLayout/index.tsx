import { Topbar } from "@/components/container/Topbar";

interface IPageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
	return (
		<div className='md:container'>
			<Topbar />
			<div>{children}</div>
		</div>
	);
};

export { PageLayout };
