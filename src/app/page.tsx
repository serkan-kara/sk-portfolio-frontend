import { IIconGroupItem, ISVGProps } from "@/common/types";
import { IconGroup } from "@/components/container/IconGroup";
import { ProjectCard } from "@/components/container/ProjectCard";
import { Skillset } from "@/components/container/Skillset";
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
	const contactItems: IIconGroupItem<ISVGProps>[] = [
		{
			id: "0",
			icon: AiOutlineLinkedin,
			link: "https://www.linkedin.com/in/srkn-kara/",
			target: "_blank",
		},
		{
			id: "1",
			icon: AiFillGithub,
			link: "https://github.com/serkan-kara",
			target: "_blank",
		},
	];

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
				<div className='flex flex-col space-y-6 md:pr-10'>
					<Text type='h1' className='text-6xl font-header font-bold text-white'>
						Hi, I am <span className='font-bold text-folly'>Serkan KARA</span>
					</Text>
					<Text type='p' className='font-light border-white border-b border-opacity-10 pb-4'>
						A passionate software engineer on a mission to turn ideas into elegant lines of code. Join me on this
						journey through the ever-evolving realm of technology, where innovation knows no bounds. Lets build the
						future, one keystroke at a time.
					</Text>
					<div className='flex justify-between'>
						<IconGroup header={"Let's meet"} items={contactItems} />
						<IconGroup header={"Primary skills"} items={contactItems} />
					</div>
				</div>
			</div>
			<article>
				<Skillset />
			</article>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</>
	);
}
