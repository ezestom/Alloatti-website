import PropTypes from "prop-types";

export function Card({
	name,
	photo,
	university,
	description,
	position,
	date,
	location,
}) {
	return (
		<div className="hp-card flex flex-col md:flex-row gap-8 items-start hover:border-[#024ad8]/30">
			<div className="shrink-0 relative">
				<img
					alt={name}
					src={photo}
					className="h-40 w-40 rounded-full object-cover border-2 border-slate-100 dark:border-slate-800 shadow-md"
				/>
				<div className="absolute -bottom-2 -right-2 bg-[#024ad8] text-white p-1.5 rounded-full shadow-lg">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
					</svg>
				</div>
			</div>

			<div className="flex-1">
				<div className="hp-eyebrow hp-eyebrow-blue mb-3 !text-[10px] py-1 px-3">
					{position} • {date}
				</div>
				
				<h3 className="text-2xl font-medium text-slate-800 dark:text-white mb-1">
					{name}
				</h3>
				
				<p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
					{university}
				</p>

				<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
					{description}
				</p>

				<div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
					<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
						<circle cx="12" cy="10" r="3" />
					</svg>
					{location}
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	university: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};
