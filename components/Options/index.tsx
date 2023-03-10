import { ReactNode, useState } from "react"
import { OptionsContainer } from "./styles"
import { UseFormRegister } from "react-hook-form";

interface IOption {
    htmlFor: string
    fieldValue: string
}

interface IOptionsProps {
    options: IOption[]
    fieldName: string
    register?: UseFormRegister<any>
}

const Options = ({ options, fieldName, register }: IOptionsProps) => {

    const [selectedOption, setSelectecOption] = useState(0)

    return (
        <OptionsContainer>
            {options.map((option, index) => {
                return (
                    <label key={index} className={selectedOption === index ? "option_selected" : ""} htmlFor={option.htmlFor}>
                        {option.htmlFor}
                        <input
                            id={option.htmlFor}
                            type="radio"
                            value={option.fieldValue}
                            {...register?.(fieldName!)}
                            onClick={() => {
                                setSelectecOption(index)
                            }}
                        />
                    </label>
                )
            })}
        </OptionsContainer>
    )
}

export default Options
