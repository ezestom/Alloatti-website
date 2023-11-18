import photo1 from "../img/1.jpg";
import photo5 from "../img/5.jpg";
import photo6 from "../img/6.jpg";
import photo7 from "../img/7.jpg";
import photo9 from "../img/9.jpg";
import photo12 from "../img/12.jpg";

export function ImageGallery() {
	const photos = [photo1, photo5, photo6, photo7, photo9, photo12];
	function getRandomPhoto() {
		return photos.map((photo) => photo)[
			Math.floor(Math.random() * photos.length)
		];
	}

	return (
		<div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mx-w">
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
		</div>
	);
}
