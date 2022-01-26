import './Card.css'

function Card(props) {  //обертка без логики
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;