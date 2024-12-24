export function TestsChild(props) {
    return(
        <>
        Child name: {props.name}
        <br/>
        Child age: {props.age}
        <br/>

        {props.children}
        </>
    )
}