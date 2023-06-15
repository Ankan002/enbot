import PropTypes from "prop-types";
import { FaRegPaperPlane } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

SearchSendBox.propTypes = {
	value: PropTypes.string,
	onTextChange: PropTypes.func,
	onSearchSendClick: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.string,
};

/**
 *
 * @param {{
 *  value: string;
 *  onTextChange: (e: import("react").ChangeEvent<HTMLInputElement>) => void;
 *  onSearchSendClick: (e: MouseEvent<HTMLButtonElement>) => void;
 *  placeholder: string;
 * 	type: "search" | "send";
 * }} props
 * @returns
 */
export function SearchSendBox(props) {
	const { value, onTextChange, onSearchSendClick, placeholder, type } = props;

	return (
		<div className="w-full flex items-center mt-10 mb-8">
			<div className="flex-1 flex relative h-10 mr-2 bg-rose-pink rounded-lg">
				<input
					className="w-full border-2 border-black bg-white px-3 py-1 font-quicksand rounded-lg h-10 text-lg focus:outline-none absolute -right-1 -top-1.5"
					value={value}
					onChange={onTextChange}
					placeholder={placeholder}
					aria-label="search send button"
				/>
			</div>

			<button
				className="bg-black h-10 py-2 px-4 ml-1 mb-2 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-black/40"
				onClick={onSearchSendClick}
				aria-label="search send button"
			>
				{
					type === "search" ? (
						<BiSearch className="text-white" size={20} />
					) : (
						<FaRegPaperPlane className="text-white" size={20} />
					)
				}
			</button>
		</div>
	);
}
