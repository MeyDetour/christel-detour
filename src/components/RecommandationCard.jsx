export default function RecommandationCard({name, content})
{
    return (
        <div className="recommandationCard">
            <span className={"md-bold-text"}>{name}</span>
            <p className={"md-text"}>{content}</p>
        </div>
    )
}
