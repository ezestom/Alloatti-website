import React from "react";
import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export function CarouselAutoScroll({ children, direction = "forward", speed = 1}) {
	const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
		AutoScroll({ playOnInit: true, speed, direction, stopOnInteraction: false }),
	]);

	return (
		<div
			className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
			ref={emblaRef}>
			<div className="flex -ml-4">
				{React.Children.map(children, (child, index) => (
					<div
						className="flex-[0_0_85%] sm:flex-[0_0_25%] lg:flex-[0_0_35%] xl:flex-[0_0_40%] min-w-0 pl-4"
						key={index}>
						{child}
					</div>
				))}
			</div>
		</div>
	);
}

CarouselAutoScroll.propTypes = {
	children: PropTypes.node.isRequired,
	direction: PropTypes.oneOf(["forward", "backward"]),
	speed: PropTypes.number,
};
