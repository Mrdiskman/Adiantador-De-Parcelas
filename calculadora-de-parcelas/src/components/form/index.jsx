import api from "../../services/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Results from "../values";

const Form = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const newData = {
            amount:Number(data.amount),
            installments:Number(data.installments),
            mdr:Number(data.mdr),
        }
        conection(newData);
    } 

    const [values, setValues] = useState({
        1:0,
        15:0,
        30:0,
        90:0
    })

    async function conection(data){
        console.log(data)
        const result = await api.post("",data  
        ).then(
            (res)=> setValues(res.data)
        ).catch((err)=> console.log(err))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Informe o valor da venda *
                    <br/>
                    <input type="text" {...register("amount", {required: "this fild is required" })} className="field"/>
                    <span>{errors.amount?.message}</span>
                </label>

                <label >
                    Em quantas parcelas *
                    <br/>
                    <select id="installments" {...register('installments')}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </label>

                <label>
                    Informe o percentual de MDR *
                    <br/>
                    <input type="text" {...register("mdr", {required: "this fild is required" })} className="field"/>
                    <span>{errors.amount?.message}</span>
                </label>

                <button type="submit" className="enviar">Enviar</button>
            </form>
            <Results values={values}/>
        </>
    )
}

export default Form