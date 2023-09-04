import { ReactElement } from "react";

interface ISkillProps {
	name: string;
	description: string;
	rating: number;
	experience: number;
	icon: ReactElement;
}

const Skill: React.FC<ISkillProps> = ({ icon, rating, experience, name, description }) => {
	return (
		<div className='flex'>
			<div className='w-10 h-10'>{icon}</div>
			{rating}
			{`${experience} years of experience`}
			{description}
		</div>
	);
};

export { Skill };
