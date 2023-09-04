import { IIconGroupItem, ISVGProps } from "@/common/types";
import { Text } from "@/components/ui/Text";
import Link from "next/link";
import { ComponentType, HTMLAttributeAnchorTarget, ReactComponentElement, ReactElement } from "react";

interface IIconGroupProps {
	header: string;
	items: IIconGroupItem<ISVGProps>[];
}

const IconGroup: React.FC<IIconGroupProps> = ({ header, items }) => {
	return (
		<div>
			<Text type='span'>{header}</Text>
			<div className='flex space-x-4'>
				{items.map((item) => {
					return item.link ? (
						<Link key={item.id} href={item.link} target={item.target}>
							<div className='p-4 rounded-xl bg-gradient-to-r from-gunmetal to-darkGunmetalBlue shadow-md text-white'>
								<item.icon className='w-12 h-12' />
							</div>
						</Link>
					) : (
						<div
							key={item.id}
							className='p-4 rounded-xl bg-gradient-to-r from-gunmetal to-darkGunmetalBlue shadow-md text-white w-12 h-12'
						>
							<item.icon className='w-12 h-12' />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export { IconGroup };
