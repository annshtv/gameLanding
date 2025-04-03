import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import newSvg from '../assets/new.svg';

interface RotatingSunProps {
	className?: string;
	size?: number;
}

const RotatingSun: React.FC<RotatingSunProps> = ({ 
	className = '',
	size = 60
}) => {
	const sunRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (sunRef.current) {
			const animation = gsap.to(sunRef.current, {
				rotation: 360,
				duration: 80,
				repeat: 1,
				ease: 'linear',
				transformOrigin: 'center center',
			});

			return () => {
				animation.kill();
			};
		}
	}, []);

	return (
		<div className={`rotating-sun-container ${className}`} style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: '100%',
            overflow: 'hidden',
			position: 'relative',
			top: '-320px',


		}}>
			<div className='sun-wrapper' style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<img 
					ref={sunRef} 
					src={newSvg} 
					alt='Sun' 
					className='sun-image' 
					style={{
						width: `${size}%`,
						height: `${size}%`
					}}
				/>
			</div>
		</div>
	);
};

export default RotatingSun;