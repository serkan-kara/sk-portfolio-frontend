import { DotNetIconSVG } from "@/common/icons/DotNetIconSVG";
import { NextJSIconSVG } from "@/common/icons/NextJSIconSVG";
import { NodeJSIconSVG } from "@/common/icons/NodeJSIconSVG";
import { PythonIconSVG } from "@/common/icons/PythonIconSVG";
import { ReactJSIconSVG } from "@/common/icons/ReactJSIconSVG";
import { TypescriptIconSVG } from "@/common/icons/TypescriptIconSVG";
import { Text } from "@/components/ui/Text";
import { Skill } from "../Skill";

const Skillset = () => {
	return (
		<div className='flex flex-col py-10 mt-10'>
			<Text type='h1' className='text-4xl text-folly font-bold'>
				Some of my techstack
			</Text>
			<div className='grid grid-flow-row gap-4 md:grid-cols-3'>
				<Skill name='ReactJS' skillIcon={ReactJSIconSVG} experience={5} rating={5} />
				<Skill name='NextJS' skillIcon={NextJSIconSVG} experience={2} rating={4} />
				<Skill name='NodeJS' skillIcon={NodeJSIconSVG} experience={6} rating={4} />
				<Skill name='NodeJS' skillIcon={TypescriptIconSVG} experience={6} rating={4} />
				<Skill name='Python' skillIcon={PythonIconSVG} experience={1} rating={1} learning />
				<Skill name='.Net' skillIcon={DotNetIconSVG} experience={9} rating={5} obsolete/>
			</div>
		</div>
	);
};

export { Skillset };
