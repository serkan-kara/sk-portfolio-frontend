import { IBackgroundItem } from "../types";

interface INodeProps {
	item: IBackgroundItem;
}

const Node: React.FC<INodeProps> = ({ item }) => {
	return (
		<div className='w-full pb-4 border-b'>
			<div className=''>{item.title}</div>
			<div>{item.name}</div>
			<div className=''>{`${item.startDate} ${item.isPresent ? "-" : item.endDate}`}</div>
			<div className=''>{item.description}</div>
		</div>
	);
};

export { Node };
