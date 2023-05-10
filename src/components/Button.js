function Button(props){
    return(
        <button className={props.isPrimary ? 'button primary' : 'button secondary'}>
        {props.isPrimary ? 'Get Started' : 'Learn More'}
        </button>
    )
}

export default Button;