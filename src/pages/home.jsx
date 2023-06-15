import { AuthenticatedChecker } from "components/elements/authenticated-checker.jsx";
import { Navbar } from "components/elements/navbar.jsx";
import { SearchSendBox } from "components/elements/search-send-box.jsx";
import { useState } from "react";

export const HomePage = () => {
	const [searchText, setSearchText] = useState("");

	const onSearchPress = async () => {
		try {
			const response = await fetch("https://enbot.sidhant.live:5001/terms/search", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					searchTerm: searchText,
				}),
			});

			const data = await response.json();

			console.log(data);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
				return;
			}

			console.log("Internal Server Error!!");
		}
	};

	return (
		<main className="w-full min-h-screen flex flex-col bg-primary-yellow pt-14 items-center px-10">
			<AuthenticatedChecker />
			<Navbar />
			<div className="flex-1 w-full max-w-[1400px] flex flex-col">
				<div className="flex-1 w-full"></div>
				<SearchSendBox
					value={searchText}
					onTextChange={(e) => setSearchText(e.target.value)}
					placeholder="Ask anything"
					onSearchSendClick={onSearchPress}
					type="search"
				/>
			</div>
		</main>
	);
};
