import "./trainer.css"

export default function Trainer({img, alt, name, intro}) {
    return (
        <div className="trainer">
            <img src={img} alt={alt} />
            <h3>{name}</h3>
            <p>{intro}</p>
        </div>
    )
}