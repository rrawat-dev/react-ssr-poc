export default function HomePage(props) {
    return (
        <div>
            <h2>{props.count}</h2>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    );
}