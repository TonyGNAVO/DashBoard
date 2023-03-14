import FormCss from "./Form.module.scss"
import { FC } from "react";
type Props = { active: boolean, setIsFormActive: (value: boolean) => void }
export const Form: FC<Props> = ({ active, setIsFormActive }) => {

    // à la  submission, setIsFormActive à false;
    // création d'une nouvelle tâche passé au composant Tasks
    return (
        <div className={active ? FormCss.formActive : FormCss.form} >
            {/* onClick={e => setIsFormActive(false)} */}
            <form className={FormCss.formWrapper}  >
                <h2 className={FormCss.formTitle}>Create new task</h2>
                <div className={FormCss.formRow}>
                    <label >
                        Name:
                        <input type="text" max={45} />
                    </label>
                </div>
                <div className={FormCss.formRow}>
                    <label>
                        Status:
                        <select name="pets" id="pet-select">
                            <option value="">---Please choose a status---</option>
                            <option value="Urgent"> Urgent </option>
                            <option value="New">New</option>
                            <option value="Default">Default</option>
                        </select>
                    </label>
                </div>


            </form>
        </div>
    )
}

