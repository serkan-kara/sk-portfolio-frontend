import { ElementType, HTMLAttributes } from "react";

interface ITextProps extends HTMLAttributes<HTMLOrSVGElement> {
	type?: ElementType;
}

const Text: React.FC<ITextProps> = ({ type: Tag = "span", ...props }) => {
	return <Tag {...props} />;
};

export { Text };
