import { ChangeEvent, useState } from "react";
import './form.css'

export default function Form () {
    const [attendence, setAttendence] = useState('yes');

    const handleImputChange = (e: ChangeEvent<HTMLInputElement>): void => setAttendence(e.currentTarget.value);
    
    const isSelected = (value:string): boolean => attendence === value;

    return (
        <>
            <form className={"form"}>
                <h2 className={"formTitle"}>Will you join us?</h2>
                <div className={"attendanceSelector"}>
                    <input
                        className={"radioButton"}
                        type="radio"
                        id="yes"
                        name="confirm"
                        value="yes"
                        checked={isSelected('yes')}
                        onChange={handleImputChange}/>
                    <label className={"radioLabel"} htmlFor="yes">Yes</label>
                    <input
                        className={"radioButton"}
                        type="radio"
                        id="no"
                        name="decline"
                        value="no"
                        checked={isSelected('no')}
                        onChange={handleImputChange}/>
                    <label className={"radioLabel"} htmlFor="no">No</label>
                </div>
                <label className={"textLabel"} htmlFor="allergies">Note any dietary requirements: </label>
                <input type="text"
                       id="allergies"
                       name="allergies">
                </input>
                <label className={"textLabel"} htmlFor="song">Email Address: </label>
                <input type="text" id="email" name="email"></input>
                <input type="submit" value="Respond"></input>
            </form>
        </>
    );
}