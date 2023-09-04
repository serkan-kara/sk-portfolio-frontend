import { PythonIconSVG } from "@/common/icons/PythonIconSVG";
import { ReactJSIconSVG } from "@/common/icons/ReactJSIconSVG";
import { Text } from "@/components/ui/Text";
import { Skill } from "../Skill";

const Skillset = () => {
	return (
		<div className='flex flex-col py-10'>
			<Text type='span'>Skillset</Text>
			<div className=''>
				<Skill name='ReactJS' description='React description' skillIcon={ReactJSIconSVG} experience={1} rating={1} />
				<Skill name='ReactJS' description='React description' skillIcon={PythonIconSVG} experience={5} rating={5} />
			</div>
		</div>
	);
};

export { Skillset };
