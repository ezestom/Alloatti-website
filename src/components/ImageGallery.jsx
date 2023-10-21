import photo1 from "../assets/img/1.jpg";
import photo2 from "../assets/img/2.jpg";
import photo3 from "../assets/img/3.jpg";
import photo4 from "../assets/img/4.jpg";
import photo5 from "../assets/img/5.jpg";
import photo6 from "../assets/img/6.jpg";
import photo7 from "../assets/img/7.jpg";
import photo8 from "../assets/img/8.jpg";
import photo9 from "../assets/img/9.jpg";
import photo10 from "../assets/img/10.jpg";
import photo11 from "../assets/img/11.jpg";
import photo12 from "../assets/img/12.jpg";

export function ImageGallery() {
	const photos = [
		photo1,
		photo2,
		photo3,
		photo4,
		photo5,
		photo6,
		photo7,
		photo8,
		photo9,
		photo10,
		photo11,
		photo12,
	];
	function getRandomPhoto() {
		return photos.map((photo) => photo)[
			Math.floor(Math.random() * photos.length)
		];
	}

	return (
		<div className="w-3/5 ml-[320px] grid grid-cols-2 md:grid-cols-4 gap-4 mx-w">
			<div className=" grid gap-4">
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
			</div>
			<div className="grid gap-4">
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
			</div>
			<div className="grid gap-4">
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
			</div>
			<div className="grid gap-4">
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src={getRandomPhoto()}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
