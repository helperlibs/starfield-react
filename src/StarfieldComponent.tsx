import { useRef, useEffect, useCallback } from "react";

interface Star {
	x: number;
	y: number;
	z: number;
}

interface StarTripProps {
	numStars?: number;
	speed?: number;
	starSize?: number;
	maxDepth?: number;
	maxOpacity?: number;
	zIndex?: number;
	backgroundColor?: string;
}

const Starfield = ({
	numStars = 300,
	speed = 0.5,
	starSize = 1,
	maxDepth = 500,
	maxOpacity = 0.75,
	zIndex = -1,
	backgroundColor = "transparent",
}: StarTripProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const stars = useRef<Star[]>([]);

	const initStars = useCallback(
		(width: number, height: number) => {
			stars.current = Array.from({ length: numStars }, () => ({
				x: Math.random() * width - width / 2,
				y: Math.random() * height - height / 2,
				z: Math.random() * maxDepth,
			}));
		},
		[numStars, maxDepth]
	);

	const draw = useCallback(
		(ctx: CanvasRenderingContext2D, width: number, height: number) => {
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = backgroundColor;
			ctx.fillRect(0, 0, width, height);

			for (const star of stars.current) {
				star.z -= speed;
				if (star.z <= 0) {
					star.z = maxDepth;
				}

				const k = 128.0 / star.z;
				const x = star.x * k + width / 2;
				const y = star.y * k + height / 2;

				const distanceRatio = 1 - star.z / maxDepth;
				const alpha = maxOpacity * Math.pow(distanceRatio, 2);

				if (x >= 0 && x < width && y >= 0 && y < height) {
					ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
					ctx.beginPath();
					ctx.arc(x, y, starSize, 0, 2 * Math.PI);
					ctx.fill();
				}
			}
		},
		[backgroundColor, speed, starSize, maxDepth, maxOpacity]
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initStars(canvas.width, canvas.height);
		};

		resize();

		let animationFrameId: number;
		const render = () => {
			draw(ctx, canvas.width, canvas.height);
			animationFrameId = requestAnimationFrame(render);
		};
		render();

		window.addEventListener("resize", resize);
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", resize);
		};
	}, [initStars, draw]);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex,
				pointerEvents: "none",
			}}
		/>
	);
};

export default Starfield;
