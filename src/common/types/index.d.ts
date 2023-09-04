import { ComponentType, HTMLAttributeAnchorTarget, HTMLAttributes, SVGProps } from "react";

export interface ISVGProps extends SVGProps<SVGSVGElement>, HTMLAttributes<HTMLDivElement> {}

export interface IIconGroupItem<T> {
	id: string;
	icon: ComponentType<T>;
	link?: string;
	target?: HTMLAttributeAnchorTarget;
}
