import api from "../../services/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Results from "../values";
import {yupResolver} from "@hookform/resolvers/yup"
import { formSchema } from "./validators";

const Form = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm({resolver:yupResolver(formSchema)});

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
        const result = await api.post("",data  
        ).then((res)=> setValues(res.data)
        ).catch((err)=> console.log(err))
    }
    console.log("aqui", errors)
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Simulação de Antecipação</h1>
                <label>Informe o valor da venda *</label>
                    <input type="number" {...register("amount")} className="field"/>
                    <span>{errors.amount?.message}</span>

                <label>Em quantas parcelas *</label>
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

                <label>Informe o percentual de MDR *</label>
                    <input type="number" {...register("mdr", {required: "this fild is required" })} className="field"/>
                    <span>{errors.mdr?.message}</span>

                <button type="submit" className="enviar">Enviar</button>
            </form>
            <Results values={values}/>
        </>
    )
}

export default Form