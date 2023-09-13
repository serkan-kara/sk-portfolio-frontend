import { ReactNode } from "react";

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	children: ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

export { Button };
