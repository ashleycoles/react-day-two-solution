import "./navLink.css"

export default function NavLink({link, text}) {
    return (
        <a className="navLink" href={link}>{text}</a>
    )
}