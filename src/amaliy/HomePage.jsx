import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { BoxLoading } from "react-loadingg";
import DL from "./img/dark-light.png";

const HomePage = () => {
	const [btn, setBtn] = useState(true);
	let handleDl = () => {
		setBtn(!btn);
	};

	const [load, setLoad] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoad(false);
		}, 2000);
	});
	let params = useParams();
	console.log(params);
	let url = "https://65018bd4736d26322f5bdf64.mockapi.io/sport";

	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	}, []);
	return (
		<React.Fragment>
			{load ? (
				<div className='loading'>
					<BoxLoading />
				</div>
			) : (
				<div className={btn ? "home_page" : "home_page dark-light-active"}>
					<div className='container'>
						<div className={btn ? "navbar" : "navbar dark-light-active"}>
							<div>
								<NavLink to={"/homepage/all"}>Hammasi</NavLink>
								<NavLink to={"/homepage/sport"}>Sport</NavLink>
								<NavLink to={"/homepage/kino"}>Kino</NavLink>
								<NavLink to={"/add"} className='add'>
									Blog Qo`shish
								</NavLink>
							</div>
							<button
								className={
									btn ? "dark-light-btn" : "dark-light-btn dark-light-active"
								}
								onClick={handleDl}
							>
								<img src={DL} alt='Dark light' />
							</button>
						</div>
						<div className='container'>
							<div className='card-wrapper'>
								{params.category == "all"
									? data.map((item) => {
											return (
												<div className='card' key={item.id}>
													<img src={item.img} className='card-img' />
													<p
														className={
															btn
																? "card-text"
																: "card-text dark-light-active"
														}
													>
														<Link
															to={"/singlepage/" + item.id}
															className='card-link'
														>
															<span>{item.title}</span>
															<br />
														</Link>
														<br /> Temporibus ut quaerat fuga enim officia
														reiciendis eaque, ipsum eum nulla quae! Suscipit eos
														nulla nemo nam aspernatur culpa tenetur blanditiis,
														nisi tempora laudantium, vitae placeat expedita modi
														architecto distinctio, totam ad sint labore incidunt
														iusto dolore eius inventore? Nulla, dicta quibusdam.
														Esse ducimus quis dolor, reprehenderit alias dolorem
														atque ipsam velit, cupiditate vitae quam rerum,
														eaque perferendis!
													</p>
												</div>
											);
									})
									: data.map((item) => {
											if (
												item.category
													.toLowerCase()
													.includes(params.category.toLowerCase())
											) {
												return (
													<div className='card' key={item.id}>
														<img src={item.img} className='card-img' />
														<p
															className={
																btn
																	? "card-text"
																	: "card-text dark-light-active"
															}
														>
															<Link
																to={"/singlepage/" + item.id}
																className='card-link'
															>
																<span>{item.title}</span>
																<br />
															</Link>
															<br /> Temporibus ut quaerat fuga enim officia
															reiciendis eaque, ipsum eum nulla quae! Suscipit
															eos nulla nemo nam aspernatur culpa tenetur
															blanditiis, nisi tempora laudantium, vitae placeat
															expedita modi architecto distinctio, totam ad sint
															labore incidunt iusto dolore eius inventore?
															Nulla, dicta quibusdam. Esse ducimus quis dolor,
															reprehenderit alias dolorem atque ipsam velit,
															cupiditate vitae quam rerum, eaque perferendis!
														</p>
													</div>
												);
											}
									})}
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default HomePage;
