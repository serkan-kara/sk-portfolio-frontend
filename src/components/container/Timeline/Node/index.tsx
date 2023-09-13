import { IBackgroundItem } from "../types";

interface INodeProps {
	item: IBackgroundItem;
}

const Node: React.FC<INodeProps> = ({ item }) => {
	return (
		<div>
			<div>{item.name}</div>
		</div>
	);
};

export { Node };
