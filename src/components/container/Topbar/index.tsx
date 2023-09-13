import { MainMenu } from "@/components/container/MainMenu";
import { Logo } from "@/components/container/Logo";

const Topbar = () => {
	return (
		<div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between mb-16'>
			<Logo />
			<MainMenu />
		</div>
	);
};

export { Topbar };
