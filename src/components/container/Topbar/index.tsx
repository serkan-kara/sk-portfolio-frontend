import { MainMenu } from "@/components/container/MainMenu";
import { Logo } from "@/components/container/Logo";

const Topbar = () => {
	return (
		<div className='flex items-center justify-between'>
			<Logo />
			<MainMenu />
		</div>
	);
};

export { Topbar };
