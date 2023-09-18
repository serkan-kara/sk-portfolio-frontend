import { ProgressBar } from "@/components/container/ProgressBar";
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
		<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
			<Timeline items={backgroundItems} />
			<div>Tech stack</div>
			<ProgressBar.Circle />
		</div>
	);
};

export default Background;
