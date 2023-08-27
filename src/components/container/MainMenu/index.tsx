import Link from "next/link";

const MainMenu = () => {
	return (
		<>
			<ul className='flex space-x-4'>
				<Link href='/'>About Me</Link>
				<Link href='/'>Projects</Link>
				<Link href='/'>Contact</Link>
			</ul>
		</>
	);
};

export { MainMenu };
