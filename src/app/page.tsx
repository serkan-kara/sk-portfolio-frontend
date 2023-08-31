import { ProjectCard } from "@/components/container/ProjectCard";
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
	return (
		<>
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
					<Text type='h1' className='text-6xl font-header font-bold text-white'>
						Hi I am <span className='font-bold text-folly'>Serkan KARA</span>
					</Text>
					<Text type='p' className='font-light'>
						A passionate software engineer on a mission to turn ideas into elegant lines of code. Join me on this
						journey through the ever-evolving realm of technology, where innovation knows no bounds. Lets build the
						future, one keystroke at a time.
					</Text>
					<div className='flex space-x-4'>
						<Link href={"https://www.linkedin.com/in/srkn-kara/"} target='_blank'>
							<div className='p-4 rounded-xl bg-gradient-to-r from-gunmetal to-darkGunmetalBlue shadow-md'>
								<AiOutlineLinkedin className='w-12 h-12 text-white' />
							</div>
						</Link>
						<Link href={"https://github.com/serkan-kara"} target='_blank'>
							<div className='p-4 rounded-xl bg-gradient-to-r from-gunmetal to-darkGunmetalBlue shadow-md'>
								<AiFillGithub className='w-12 h-12 text-white' />
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</>
	);
}
