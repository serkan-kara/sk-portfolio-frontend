import Link from "next/link";

const MainMenu = () => {
	return (
		<nav>
			<ul className='flex space-x-4'>
				<Link href='/'>About Me</Link>
				<Link href='/'>Background</Link>
				<Link href='/'>Contact</Link>
			</ul>
		</nav>
	);
};

export { MainMenu };
