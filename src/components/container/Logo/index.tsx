import Link from "next/link";

const Logo = () => {
	return (
		<Link href='/'>
			<div className='flex items-center space-x-2'>
				<div className='flex items-center justify-center rounded-full border-2 border-platinum p-2'>SK</div>
				<span className='text-lg'>
					<span className='font-bold'>SERKAN</span> <span className='font-light'>KARA</span>
				</span>
			</div>
		</Link>
	);
};

export { Logo };
