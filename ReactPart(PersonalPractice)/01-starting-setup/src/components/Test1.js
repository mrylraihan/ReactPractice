
const Test1 = (props) => {
    const listStuff = props.stuff.stufflist.map(ele =><li key={Math.random().toString()}>{ele}</li>)
    return (
        <>
            <ul>
            <h4>{props.stuff.title}</h4>
                <>{listStuff}</>
            </ul>
        </>
    )
}
export default Test1