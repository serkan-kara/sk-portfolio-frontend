import Image from "next/image";

export default function Home() {
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='relative image-container w-full'>
				<Image
					src={"/profile-image.jpeg"}
					alt='Picture of the author'
					className='image-prof rounded-full border-8 border-white'
					fill={true}
				/>
			</div>
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
