import styled from "styled-components";

export const Main = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;

  label{
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
  }

  select{
    padding-left: 10px;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    border-radius: 20px;
    height: 3.8vh;
    width: 19.5vw;
    border: solid 1px #95999c;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  option{
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
  }
  h1{
    color: #27699c;
    font-family: 'Rubik', sans-serif;
    border-bottom: 1px solid #95999c;
  }
  p{
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
    color: #27699c;
    font-weight: bold;
  }
  form{
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10vw;
  }

  input{
    padding-left: 10px;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    border-radius: 20px;
    height: 3.5vh;
    width: 19vw;
    border: solid 1px #95999c;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .enviar{
    font-weight: bold;
    font-family: 'Rubik', sans-serif;
    margin-top: 1vh;
    width: 19.2vw;
    height: 4vh;
    border-radius: 20px;
    border: solid 1px #95999c;
    background-color: #477496 ;
  }

  .result{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span{
    color: red;
  }
  `