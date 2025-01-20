import { useState, useRef } from "preact/hooks";
import { motion, useDomEvent } from "framer-motion";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120
};

const Img = ({ src, alt}) => {
	const [isOpen, setOpen] = useState(false);

	useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

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
			<img src={src} alt={alt} onClick={() => setOpen(!isOpen)} />
		</>
	);
}

export default Img;
