const Results = ({values}) =>{
   
    return(
        <div className="result">
            <h1>Você receberá</h1>
            <p>amanha: R$ {`${values[1].toFixed(2)}`}</p>
            <p>Em 15 dias:R$ {`${values[15].toFixed(2)}`}</p>
            <p>Em 30 dias:R$ {`${values[30].toFixed(2)}`}</p>
            <p>Em 90 dias:R$ {`${values[90].toFixed(2)}`}</p>
        </div>
    )
}

export default Results