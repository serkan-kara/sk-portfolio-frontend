import { ISVGProps } from "@/common/types";
import { ComponentType } from "react";

export interface IBackgroundItem {
	title: string;
	name: string;
	description: string;
	order: number;
	startDate?: string;
	endDate?: string;
	isPresent?: boolean;
	usedTech?: ComponentType<ISVGProps>[];
}
