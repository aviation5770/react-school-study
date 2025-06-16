import { useState } from "react";

export default function Hello(props) {
    const [age, setAge] = useState(props.age);

    return(
        <div>
            <h2>({age}세)</h2>
            <button onClick = {() => {setAge(age + 1);}}>Change</button>
        </div>
    );
}