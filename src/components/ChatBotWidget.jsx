

export function ChatBotWidget() {

	return (
		<>
			<div className="w-screen h-screen fixed bottom-0 left-0 -z-10">
				<iframe
				src="https://alloatti-bot.vercel.app/"
				title="Asistente IA"
				className="border-none w-full h-full"
				allowFullScreen
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				/>
			</div>
		</>
	);
}
