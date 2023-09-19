import { DotNetIconSVG } from "@/common/icons/DotNetIconSVG";
import { NextJSIconSVG } from "@/common/icons/NextJSIconSVG";
import { NodeJSIconSVG } from "@/common/icons/NodeJSIconSVG";
import { PythonIconSVG } from "@/common/icons/PythonIconSVG";
import { ReactJSIconSVG } from "@/common/icons/ReactJSIconSVG";
import { TypescriptIconSVG } from "@/common/icons/TypescriptIconSVG";
import { Skill } from "@/components/container/Skill";
import { Timeline } from "@/components/container/Timeline";
import { IBackgroundItem } from "@/components/container/Timeline/types";

const Background = () => {
	const backgroundItems: IBackgroundItem[] = [
		{
			order: 1,
			name: "BG 1",
			description: "",
			title: "Software Engineer",
			startDate: "2021",
			endDate: "2022",
			isPresent: false,
		},
		{
			order: 2,
			name: "BG 2",
			description: "",
			title: "Software Engineer",
			startDate: "2021",
			endDate: "2022",
			isPresent: false,
		},
		{
			order: 3,
			name: "BG 3",
			description: "",
			title: "Software Engineer",
			startDate: "2021",
			endDate: "2022",
			isPresent: false,
		},
	];

	return (
		<div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
			<Timeline items={backgroundItems} />
			<div>
				<span>Tech Stack</span>
				<div className='grid grid-cols-2 gap-4'>
					<Skill
						name='ReactJS'
						skillIcon={ReactJSIconSVG}
						experience={5}
						rating={5}
						showProgress
						progressPercent={85}
						startYear={2018}
					/>
					<Skill
						name='NextJS'
						skillIcon={NextJSIconSVG}
						experience={2}
						rating={4}
						showProgress
						progressPercent={80}
						startYear={2021}
					/>
					<Skill
						name='NodeJS'
						skillIcon={NodeJSIconSVG}
						experience={6}
						rating={4}
						showProgress
						progressPercent={90}
						startYear={2017}
					/>
					<Skill
						name='Typescript'
						skillIcon={TypescriptIconSVG}
						experience={2}
						rating={4}
						showProgress
						progressPercent={85}
						startYear={2021}
					/>
					<Skill
						name='Python'
						skillIcon={PythonIconSVG}
						experience={1}
						rating={1}
						learning
						showProgress
						progressPercent={20}
						startYear={2023}
					/>
					<Skill
						name='.Net'
						skillIcon={DotNetIconSVG}
						experience={9}
						rating={5}
						obsolete
						showProgress
						progressPercent={90}
						startYear={2009}
					/>
				</div>
			</div>
		</div>
	);
};

export default Background;
