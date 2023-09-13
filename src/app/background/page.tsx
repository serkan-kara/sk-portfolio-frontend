import { Timeline } from "@/components/container/Timeline";
import { IBackgroundItem } from "@/components/container/Timeline/types";

const Background = () => {
	const backgroundItems: IBackgroundItem[] = [
		{
			order: 1,
			name: "BG 1",
			description: "",
			startDate: "2021",
			endDate: "2022",
			isPresent: false,
		},
		{
			order: 2,
			name: "BG 2",
			description: "",
			startDate: "2021",
			endDate: "2022",
			isPresent: false,
		},
		{
			order: 3,
			name: "BG 3",
			description: "",
			startDate: "2021",
			endDate: "2022",
			isPresent: false,
		},
	];

	return <Timeline items={backgroundItems} />;
};

export default Background;
