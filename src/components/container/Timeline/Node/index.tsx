import { IBackgroundItem } from "../types";

interface INodeProps {
	item: IBackgroundItem;
}

const Node: React.FC<INodeProps> = ({ item }) => {
	return (
		<div className='flex flex-col space-y-4 w-full pb-4 border-b'>
			<div className='flex items-center space-x-2'>
				<span>{item.title}</span>
				<span> @ </span>
				<span className="text-folly">{item.name}</span>
			</div>
			<div className=''>{`${item.startDate} - ${item.isPresent ? "[ - ]" : item.endDate}`}</div>
			<div className='whitespace-pre-line text-sm'>{item.description}</div>
		</div>
	);
};

export { Node };
