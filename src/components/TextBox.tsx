import { ChangeEvent } from "react";

interface Props {
	placeholder: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextBox = ( { placeholder, value, onChange }: Props ) => {
	return (
		<div className="textbox-container" role="region" aria-labelledby="textbox-title">
			<div className="textbox-content">
				<input
					className="textbox-input"
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default TextBox;