import { CppIconSVG } from "@/common/icons/CppIconSVG";
import { NextJSIconSVG } from "@/common/icons/NextJSIconSVG";
import { PythonIconSVG } from "@/common/icons/PythonIconSVG";
import { ReactJSIconSVG } from "@/common/icons/ReactJSIconSVG";
import { TypescriptIconSVG } from "@/common/icons/TypescriptIconSVG";
import { IIconGroupItem, ISVGProps } from "@/common/types";
import { IconGroup } from "@/components/container/IconGroup";
import { ProjectCard } from "@/components/container/ProjectCard";
import { IProject } from "@/components/container/ProjectCard/types";
import { Skillset } from "@/components/container/Skillset";
import { Text } from "@/components/ui/Text";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
	const contactItems: IIconGroupItem<ISVGProps>[] = [
		{
			id: "0",
			name: "Linkedin",
			icon: AiOutlineLinkedin,
			link: "https://www.linkedin.com/in/srkn-kara/",
			target: "_blank",
		},
		{
			id: "1",
			name: "Github",
			icon: AiFillGithub,
			link: "https://github.com/serkan-kara",
			target: "_blank",
		},
	];

	const primarySkills: IIconGroupItem<ISVGProps>[] = [
		{
			id: "1",
			name: "NextJS",
			icon: NextJSIconSVG,
			target: "_blank",
		},
		{
			id: "2",
			name: "Typescript",
			icon: TypescriptIconSVG,
			target: "_blank",
		},
		{
			id: "0",
			name: "ReactJS",
			icon: ReactJSIconSVG,
			target: "_blank",
		},
	];

	const activeProjects: IProject[] = [
		{
			id: "1",
			name: "Hardware Inventory Collection",
			description:
				"I am currently engaged in a project focused on the acquisition of hardware information from computer systems. This project operates as a Windows service, with its core functionality implemented in C++. The primary objective of this service is to gather comprehensive hardware-related data, which is subsequently utilized by the frontend layer. The frontend is being developed using React and TypeScript.",
			image: "/hardware-inventory.jpeg",
			techUsed: [
				{
					id: "1",
					name: "C++",
					icon: CppIconSVG,
				},
			],
		},
		{
			id: "2",
			name: "Fintech Project",
			description:
				"I am actively engaged in a significant fintech endeavor, where our strategic technological choices underscore our commitment to delivering cutting-edge solutions in the financial industry. Within this context, we have judiciously selected Next.js, a high-performance web framework, TypeScript for its robust type-checking capabilities, and Redux Toolkit to ensure efficient state management.",
			image: "/fintech-project.jpeg",
			techUsed: [
				{
					id: "1",
					name: "NextJS",
					icon: NextJSIconSVG,
				},
				{
					id: "2",
					name: "Typescript",
					icon: TypescriptIconSVG,
				},
			],
		},
		{
			id: "3",
			name: "Learning Python",
			description:
				"I am on an exciting journey of learning Python and Django, two powerful tools that empower me to create dynamic web applications and bring my coding ideas to life. Starting with the fundamentals of Python, I've honed my skills in data manipulation and analysis. Now, I'm delving into Django, where I'm mastering the art of web development, database management, and user authentication. Through this learning process, I'm not only expanding my technical repertoire but also gaining the ability to craft innovative web solutions.",
			image: "/python-learning.jpeg",
			techUsed: [
				{
					id: "1",
					name: "Python",
					icon: PythonIconSVG,
				},
			],
		},
	];

	return (
		<>
			<div className='flex flex-col space-y-6 md:flex-row-reverse md:space-x-reverse md:space-x-16 md:space-y-0'>
				{/* <div className='relative image-container w-full xl:w-2/3'>
					<Image
						src={"/profile-image.jpeg"}
						alt='Picture of the author'
						className='image-prof rounded-full border-8 border-white'
						fill={true}
						sizes={"(max-width: 768px) 100vw, 700px"}
					/>
				</div> */}
				<div className='relative bg-profile-image w-full md:w-2/3 h-[300px] md:h-[500px] bg-cover bg-center xl:bg-top-center shadow-lg rounded-xl md:rounded-md'></div>
				<div className='flex flex-col space-y-6 justify-center'>
					<Text type='h1' className='text-6xl font-header font-bold text-white'>
						Hi, I am <span className='font-bold text-folly'>Serkan KARA</span>
					</Text>
					<Text type='p' className='font-light border-white border-b border-opacity-10 pb-4'>
						I am a passionate software engineer on a mission to turn ideas into elegant lines of code. Join me on this
						journey through the ever-evolving realm of technology, where innovation knows no bounds. Lets build the
						future, one keystroke at a time.
					</Text>
					<div className='flex flex-col justify-between md:flex-row space-y-4 md:space-y-0'>
						<IconGroup header={"LET'S MEET"} items={contactItems} />
						<IconGroup header={"MOST USED SKILLS"} items={primarySkills} />
					</div>
				</div>
			</div>
			<article>
				<Skillset />
			</article>
			<div className='flex flex-col py-10 mt-10 space-y-6'>
				<Text type='h1' className='text-2xl text-folly font-bold border-white border-b border-opacity-10 pb-4'>
					Ongoing projects
				</Text>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{activeProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</>
	);
}
