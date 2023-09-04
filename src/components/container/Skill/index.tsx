import { ISVGProps } from "@/common/types";
import { ComponentType } from "react";

interface ISkillProps {
	name: string;
	description: string;
	rating: number;
	experience: number;
	skillIcon: ComponentType<ISVGProps>;
}

const Skill: React.FC<ISkillProps> = (props) => {
	return (
		<div className='flex'>
			<div className='w-10 h-10'>{<props.skillIcon />}</div> {"--->"} {props.rating} star /{" "}
			{`${props.experience} years of experience`} / {props.name}
			{props.description}
		</div>
	);
};

export { Skill };
