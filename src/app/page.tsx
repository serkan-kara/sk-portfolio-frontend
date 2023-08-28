import Image from "next/image";

export default function Home() {
	return (
		<div className='flex flex-col'>
			<div className='relative'>
				<Image
					src={"/profile-image.jpeg"}
					alt='Picture of the author'
					className='relative rounded-full border-8 border-white object-cover'
					objectFit="cover"
					fill
				/>
			</div>
			<div className='w-[200px] h-[200px]'></div>
			<div>
				I am <span>Serkan KARA</span>, a passionate software engineer on a mission to turn ideas into elegant lines of
				code. Whether you are here to explore my projects, learn about the latest tech trends, or just curious about the
				world of software development, you haveve come to the right place. Join me on this journey through the
				ever-evolving realm of technology, where innovation knows no bounds. Lets build the future, one keystroke at a
				time.
			</div>
		</div>
	);
}
