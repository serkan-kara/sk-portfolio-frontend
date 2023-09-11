import { IProject } from "@/components/container/ProjectCard/types";
import { Text } from "@/components/ui/Text";
import Image from "next/image";

interface IProjectCardProps {
	project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
	return (
		<div className='flex flex-col p-6 rounded-xl bg-gradient-to-r from-gunmetal to-darkGunmetalBlue shadow-md'>
			<Text type='h1' className='text-2xl text-folly mb-4'>
				{project.name}
			</Text>
			{project.image && (
				<div style={{ backgroundImage: `url(${project.image})` }} className={`h-[150px] bg-cover bg-center mb-4`}></div>
			)}
			<div className='mb-auto'>{project.description}</div>
			<div className='flex space-x-4 mt-4'>
				{project.techUsed.map((tech) => (
					<div
						key={tech.id}
						className='p-4 rounded-xl bg-gradient-to-r from-gunmetal to-darkGunmetalBlue shadow-md text-white'
						title={tech.name}
					>
						<tech.icon className='w-12 h-12' />
					</div>
				))}
			</div>
		</div>
	);
};

export { ProjectCard };
