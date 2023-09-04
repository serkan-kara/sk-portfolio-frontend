import { PythonSVG } from "@/common/icons/PythonSVG";
import { Text } from "@/components/ui/Text";
import { Skill } from "../Skill";

const Skillset = () => {
	return (
		<div className='flex flex-col'>
			<Text type='span'>Skillset</Text>
			<div className=''>
				<Skill name='Python' description='Python description' icon={<PythonSVG />} experience={1} rating={1} />
				<Skill name='ReactJS' description='React description' icon={<PythonSVG />} experience={5} rating={5} />
				<div className='p-4 rounded-xl bg-gradient-to-r from-gunmetal to-darkGunmetalBlue shadow-md'>
					<PythonSVG className='w-12 h-12' />
				</div>
			</div>
		</div>
	);
};

export { Skillset };
