import { Topbar } from "@/components/container/Topbar";

interface IPageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
	return (
		<div className='md:container pt-6'>
			<Topbar />
			<div className="py-4">{children}</div>
		</div>
	);
};

export { PageLayout };
