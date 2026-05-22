import React from "react";
import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export function CarouselAutoScroll({ children }) {
	const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
		AutoScroll({ playOnInit: true, speed: .5, stopOnInteraction: false }),
	]);

	return (
		<div
			className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
			ref={emblaRef}>
			<div className="flex -ml-4">
				{React.Children.map(children, (child, index) => (
					<div
						className="flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 pl-4"
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
};
