import { StarSVG } from "@/common/icons/StarSVG";
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
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < props.rating; i++) {
			stars.push(<StarSVG className='w-4 h-4' />);
		}

		return <div className='flex space-x-1'>{stars}</div>;
	};

	return (
		<div className='flex items-center'>
			{renderStars()}
			{"--->"}
			<div className='w-10 h-10'>{<props.skillIcon />}</div> {"--->"} {props.rating} star /{" "}
			{`${props.experience} years of experience`} / {props.name}
			{props.description}
		</div>
	);
};

export { Skill };
