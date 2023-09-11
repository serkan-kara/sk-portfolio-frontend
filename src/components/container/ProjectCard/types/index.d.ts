import { ISVGProps } from "@/common/types";
import { ComponentType } from "react";

export interface IProject {
	id: string;
	name: string;
	description: string;
	image?: string;
	techUsed: {
		id: string;
		name: string;
		icon: ComponentType<ISVGProps>;
	}[];
}
