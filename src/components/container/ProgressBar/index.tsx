import { Circle } from "@/components/container/ProgressBar/circle";

interface IProgressBarProps {
	percent: number;
}

const ProgressBar = ({ percent }: IProgressBarProps) => {
	return (
		<div className='relative w-full h-[20px] rounded-lg'>
			<div
				className={`absolute flex h-[20px] top-0 left-0 bg-red-400 z-10 justify-end items-center pr-4 rounded-l-lg`}
				style={{ width: `${percent}%` }}
			>
				<span className=''>{`%${percent}`}</span>
			</div>
			<div className='absolute w-full h-[20px] top-0 left-0 bg-platinum z-0 rounded-lg'></div>
		</div>
	);
};

ProgressBar.Circle = Circle;

export { ProgressBar };
