import * as yup from "yup";

export const formSchema = yup.object().shape({
    amount: yup.number().typeError("Valor obrigatorio").required("Valor obrigatorio").min(1000, "minimo de 1000").max(9999999, "Limite de preço alcançado"),
    installments: yup.number().required("Numero de parcelas obrigatorias").min(1, "O minimo de parcelas é 1").max(12, "Maximo de 12 parcelas"),
    mdr: yup.number().typeError("Percentual obrigatorio").required("Percentual obrigatorio").min(1, "minimo de 1%").max(100, "maximo de 100%")
  });