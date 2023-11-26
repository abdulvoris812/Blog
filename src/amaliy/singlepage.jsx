import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BoxLoading } from "react-loadingg";

const Singlepage = () => {
	const [load, setLoad] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoad(false);
		}, 2000);
	});
	let params = useParams().id;
	let navigate = useNavigate();
	console.log(params);

	let url = "https://65018bd4736d26322f5bdf64.mockapi.io/sport/";

	const [data, setData] = useState();

	const getData = () => {
		axios.get(url + params).then((res) => {
			console.log(res);
			setData(res.data);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	const daleteData = (id) => {
		axios.delete(url + id).then((res) => {
			console.log(res);
			if (res.status === 200) {
				navigate("/homepage/all");
			}
		});
	};
	return (
		<React.Fragment>
			{load ? (
				<div className='loading'>
					<BoxLoading />
				</div>
			) : (
				<div className='single-box'>
					<div className='btn-box'>
						<Link className='link' to={"/homepage/all"}>
							<button className='sbtnn'>Back</button>
						</Link>
						<button className='sbtn' onClick={() => daleteData(data?.id)}>
							Delete
						</button>
					</div>
					<div className='card2'>
						<img src={data?.img} className='card-img2' />
						<br /> <br />
						<p className='card-text2'>
							<span>{data?.title}</span>
							<br />
							<br />
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
							illo ea, incidunt esse provident asperiores placeat cum
							praesentium vitae nostrum harum rerum alias voluptas quisquam quas
							doloribus. Sapiente velit ab iure odio autem praesentium quisquam
							ad quidem laudantium ea rerum perspiciatis doloribus, aut nisi
							magni natus? Quod molestiae delectus deserunt! Pariatur
							praesentium fugiat neque fugit quae ducimus quibusdam laboriosam
							similique consequatur ipsa delectus cumque, consequuntur sapiente
							ratione deleniti iste repudiandae omnis corporis id ea aut. Eos
							vel deleniti sed commodi delectus numquam, praesentium molestiae
							error odit reiciendis. Eligendi nulla consequatur nostrum
							deleniti, cupiditate incidunt debitis molestias dolorem magnam
							ullam autem quos repellat, sed minus neque odio voluptatibus
							temporibus! Aliquam a itaque quod consequatur cumque qui
							asperiores omnis minima, illum temporibus.
						</p>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Singlepage;
