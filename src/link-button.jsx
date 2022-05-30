export const LinkBtn = (props) => {
    return (
        <a href={props.link} className="no-underline hover:underline text-blue-500 text-lg">
            {props.children}
        </a>
    )
}