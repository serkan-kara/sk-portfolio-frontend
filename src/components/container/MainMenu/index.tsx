import { Button } from "@/components/ui/Button";
import Link from "next/link";

const MainMenu = () => {
	return (
		<nav className="flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-4 items-center">
			<ul className='flex space-x-4'>
				<Link href='/about'>About Me</Link>
				<Link href='/'>Background</Link>
				<Link href='/'>Contact</Link>
			</ul>
			<Button className="rounded-full bg-folly px-4 py-2">Download My CV</Button>
		</nav>
	);
};

export { MainMenu };
