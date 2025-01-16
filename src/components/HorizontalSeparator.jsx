const HorizontalSeparator = ({ text }) => {
    return (
        <div className="flexRowBetween horizontalSeparator">
            <div></div>
            <h3 className="h3-italic">{text}</h3>
            <div></div>
        </div>
    );
}

export default HorizontalSeparator;
