import Image from "next/image";

export default function Home() {
	return (
		<div className='flex flex-col items-center space-y-6 md:flex-row-reverse md:space-y-0'>
			<div className='relative image-container w-full xl:w-2/3'>
				<Image
					src={"/profile-image.jpeg"}
					alt='Picture of the author'
					className='image-prof rounded-full border-8 border-white'
					fill={true}
					sizes={"(max-width: 768px) 100vw, 700px"}
				/>
			</div>
			<div className='flex flex-col space-y-4 md:pr-10'>
				<div className='text-6xl font-header font-bold text-center md:text-left'>
					Hi I am <span className='font-bold text-folly'>Serkan KARA</span>
				</div>
				<div className=''>
					A passionate software engineer on a mission to turn ideas into elegant lines of code. Join me on this journey
					through the ever-evolving realm of technology, where innovation knows no bounds. Lets build the future, one
					keystroke at a time.
				</div>
			</div>
		</div>
	);
}
