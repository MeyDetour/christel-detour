import { useState, useRef } from "preact/hooks";
import { motion, useDomEvent } from "framer-motion";
import {useEffect} from "react";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120
};

const Img = ({ src, alt}) => {
	const [isOpen, setOpen] = useState(false);

		// useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));
	const imgRef = useRef(null);

	// Vérifie si 'window' est défini pour éviter l'erreur en SSR
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleScroll = () => {
				if (isOpen) setOpen(false);
			};
			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, [isOpen]);
	return (
		<>
			<motion.div
				animate={{ opacity: isOpen ? 1 : 0 }}
				transition={transition}
				className={`shade gridCenter ${isOpen ? "open" : ""}`}
				onClick={() => setOpen(false)}
			>
				<motion.img
					src={src}
					alt={alt}
					className="zoomedImage"
					onClick={() => setOpen(!isOpen)}
					layoutTransition={transition}
				/>
			</motion.div>
			<img  ref={imgRef} src={src} style={{cursor:"pointer"}} alt={alt} onClick={() => setOpen(!isOpen)} />
		</>
	);
}

export default Img;
