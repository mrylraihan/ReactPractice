import './Compositon.css'
const Composition = (props) => {
const classesN = 'comp ' + props.className
return <div className={classesN}>{props.children}</div>

}

export default Composition