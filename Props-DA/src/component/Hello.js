import { useState } from "react";

export default function Hello({age}) {
    const [name, setName] = useState('Mike');
    const [age2, setAge2] = useState(age);
    const msg = age2 > 19 ? "성인입니다." : "미성년자입니다."

    return(
        <div>
            <h2 id = "name">
                {name}({age2}):{msg}
                <button onClick = {() => {setName(name === "Mike" ? "Jane" : "Mike");
                setAge2(age2 + 1);}}>Change</button>
            </h2>
        </div>
    );
}