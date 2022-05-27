import './Hello.css';

function Hello({ title, body}) {
    return (
        <div className="hello">
            <h1>{ title }</h1>
            <p>{ body }</p>
        </div>
    )
}

export default Hello;