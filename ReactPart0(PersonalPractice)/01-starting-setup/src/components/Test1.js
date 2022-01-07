
const Test1 = (props) => {
    let num = 0
    const listStuff = props.stuff.stufflist.map(ele => <li key={ele.title}>{ele}</li>)
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