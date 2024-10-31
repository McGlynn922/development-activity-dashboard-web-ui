import { MouseEventHandler } from "react";

interface Props {
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ( { text, onClick }: Props ) => {
	return (
		<button className="custom-button" onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;