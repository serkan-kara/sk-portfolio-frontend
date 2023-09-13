import { Node } from "@/components/container/Timeline/Node";
import { IBackgroundItem } from "./types";

interface ITimelineProps {
	items: IBackgroundItem[];
}

const Timeline: React.FC<ITimelineProps> = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<Node key={item.order} item={item} />
			))}
		</div>
	);
};

export { Timeline };
