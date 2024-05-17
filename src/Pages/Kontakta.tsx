import '../App.scss'
import styles from "../styles/kontakta.module.scss"
import {FormEvent, useState} from "react";

export default function Kontakta() {
    const [message, setMessage] = useState<string | undefined>(undefined)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        const name = data.get("name");
        const email = data.get("email");
        const company = data.get("company");
        const number = data.get("number");
        const message = data.get("message");

        console.log(name)
        console.log(email)
        console.log(company)
        console.log(number)
        console.log(message)

        setMessage("Message sent")
    }
    return (
        <main className={styles.main}>

            <form onSubmit={handleSubmit} className={styles.parent}>
                {message ? <div className={styles.success}>
                    <h3>{message}</h3>
                    <button onClick={() => setMessage(undefined)}>
                        Send another message
                    </button>
                </div> : <>
                    <label htmlFor={"name"}>
                        <h3>Namn*</h3>
                        <input id={"name"} name={"name"} required type="text"/>
                    </label>
                    <label htmlFor={"email"}>
                        <h3>E-postadress*</h3>
                        <input id={"email"} name={"email"} required type="email"/>
                    </label>
                    <label htmlFor={"company"}>
                        <h3>Företag</h3>
                        <input id={"company"} name={"company"} type="text"/>
                    </label>
                    <label htmlFor={"number"}>
                        <h3>Telefon</h3>
                        <input id={"number"} name={"number"} type="number"/>
                    </label>
                    <label htmlFor={"message"}>
                        <h3>Meddelande*</h3>
                        <textarea required name={"message"} id={"message"}/>
                    </label>
                    <button type={"submit"} className={"buttonAnimation"}>Send</button>
                </>}
            </form>
        </main>
    )
}
