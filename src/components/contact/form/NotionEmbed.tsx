'use client';

interface NotionEmbedProps {
	src: string;
	width?: string;
	height?: string;
	title?: string;
}

/**
 * A reusable component for embedding Notion pages or forms.
 */
const NotionEmbed = ({
	src,
	width = '100%',
	height = '600',
	title = 'Notion Embed',
}: NotionEmbedProps) => {
	return (
		<div className="w-full overflow-hidden rounded-xl border border-white/10 bg-background-dark/50 backdrop-blur-sm">
			<iframe
				src={src}
				width={width}
				height={height}
				title={title}
				frameBorder="0"
				allowFullScreen
				className="w-full"
				style={{ minHeight: `${height}px` }}
			/>
		</div>
	);
};

export default NotionEmbed;
