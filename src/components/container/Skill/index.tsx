import { StarSVG } from "@/common/icons/StarSVG";
import { ISVGProps } from "@/common/types";
import { Text } from "@/components/ui/Text";
import { ComponentType } from "react";

interface ISkillProps {
	name: string;
	description?: string;
	rating: number;
	experience: number;
	skillIcon: ComponentType<ISVGProps>;
	learning?: boolean;
	obsolete?: boolean;
}

const Skill: React.FC<ISkillProps> = (props) => {
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < props.rating; i++) {
			stars.push(<StarSVG className='w-4 h-4 fill-star' />);
		}
		for (let i = 0; i < 5 - props.rating; i++) {
			stars.push(<StarSVG className='w-4 h-4 fill-gray-500' />);
		}

		return <div className='flex space-x-1'>{stars}</div>;
	};

	return (
		<div className='flex flex-col space-y-2 p-4 rounded-xl bg-darkGunmetalBlue shadow-md text-white'>
			<div className='flex justify-between items-center'>
				<Text type='h1'>{props.name}</Text>
				{props.learning && (
					<Text type='span' className='text-xs text-star'>
						Learning stage
					</Text>
				)}
				{props.obsolete && (
					<Text type='span' className='text-xs text-folly'>
						Obsolete
					</Text>
				)}
			</div>
			<div className='flex items-center space-x-2'>
				<div className='w-12 h-12'>{<props.skillIcon />}</div>
				<div className='flex flex-col space-y-2'>
					{renderStars()}
					<div className='text-xs text-platinum'>{`${props.experience} years of experience`}</div>
				</div>
			</div>
			{props.description && <div>{props.description}</div>}
		</div>
	);
};

export { Skill };
