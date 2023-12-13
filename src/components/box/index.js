import "./index.css"

export default function Page({ children, className, shadow }) {
    return (
        <div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
            {children}
        </div>
    )
}