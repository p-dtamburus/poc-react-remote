import { TestsChild } from "./TestsChild";

export function Tests(props) {
    return(
        <>
        <p>Im a test</p>
        <TestsChild name={props.name} age={props.age} >
        <p>This is a child element!</p>
        </TestsChild>
        </>
    )
}