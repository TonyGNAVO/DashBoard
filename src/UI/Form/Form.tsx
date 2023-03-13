import FormCss from "./Form.module.scss"
import { FC } from "react";
type Props = { active: boolean, setIsFormActive: (value: boolean) => void }
export const Form: FC<Props> = ({ active, setIsFormActive }) => {

    return (
        <div className={active ? FormCss.formActive : FormCss.form} >
            <form className={FormCss.formWrapper} onClick={e => setIsFormActive(false)} >

            </form>
        </div>
    )
}

