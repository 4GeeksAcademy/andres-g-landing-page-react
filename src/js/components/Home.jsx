import React, { Component } from "react";

import { Navbar } from "./Navbar"
import { Card } from "./Card"
import { Jumbotron } from "./Jumbotron"
import { Footer } from "./Footer"

const cards = [
	{
		image: "https://i.pinimg.com/736x/d1/c2/83/d1c283d97bed8256869b504e82d525de.jpg",
		title: "Some Shirt!",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
	},
	{
		image: "https://i.pinimg.com/736x/eb/c9/79/ebc9798702a8a16c7d3c19e65e4d9675.jpg",
		title: "Some Statue!",
		description: "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
	},
	{
		image: "https://i.pinimg.com/736x/6e/00/1f/6e001ff0a2a7e5e9052270d677207176.jpg",
		title: "Some Cat!",
		description: "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",
	},
	{
		image: "https://i.pinimg.com/736x/83/93/5c/83935c2a9bfc3fcdee85290fd0597f75.jpg",
		title: "Tomatoes!",
		description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam consequatur?",
	},
];

//create your first component
const home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className="container-fluid">
				<div className="d-flex">
                {cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 cards" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
        </div>
    );
};

export default home 