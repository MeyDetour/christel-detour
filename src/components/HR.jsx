export function HR({ children }) {
	return (
		<div className="hr flexRow">
			<div className="line"/>
			<p>{children}</p>
			<div className="line"/>
		</div>
	);
}