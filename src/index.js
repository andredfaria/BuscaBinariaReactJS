import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "./styles.css";
import { isClassExpression } from "typescript";


/* estado do jogo entrada, fim, rodando
*  chute de 0 a 300
*  quantidade de palpite
*/

function App() {
    const [estado, setEstado] = useState("ENTRADA");
    const [palpite, setPalpite] = useState(150);
    const [numeroPlapite, setNumero] = useState(1);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(300);

    const iniciarJogo = () => {
        setEstado("RODANDO");
        setMin(0);
        setMax(300);
        setNumero(1);
        setPalpite(150);
    };

    if (estado === "ENTRADA")
        return (
            <Grid className="centro" container spacing={3}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={iniciarJogo}>Começar a jogar</Button>
                </Grid>
            </Grid>
        );


    if (estado === "FIM") {
        return (
            <Grid className="centro" container spacing={3}>
                <Grid item xs={12}>
                    <p className="text-justify h2">
                        Acertou !!! Com {numeroPlapite} palpites, seu numero é {palpite} 
                    </p>
                    <Button variant="contained" color="primary" onClick={iniciarJogo}>Começar de novo</Button>
                </Grid>
            </Grid>
        );
    }

    const acertou = () => {
        setEstado("FIM");
    };

    const menor = () => {
        setNumero(numeroPlapite + 1);
        setMax(palpite);
        const proximoPlapite = parseInt((palpite - min) / 2) + min;
        setPalpite(proximoPlapite);
    };

    const maior = () => {
        setNumero(numeroPlapite + 1);
        setMin(palpite);
        const proximoPlapite = parseInt((max - palpite) / 2) + palpite;
        setPalpite(proximoPlapite);
    };

    return (
        <div className={'App'}>
            <Grid container >
                <Grid item xs={12}>
                    <h1>O seu numero é o {palpite}</h1>

                    {/* <p> minimo é {min} / maximo é {max} </p> */}
                </Grid>

                <Grid item xs={12} sm={3}></Grid>

                <Grid item xs={12} sm={2}>
                    <Button variant="contained" color="primary" onClick={maior}>
                        Maior (+)
                    </Button>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Button variant="contained" color="primary" onClick={acertou}>
                        Acertou (=)
                    </Button>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Button variant="contained" color="primary" onClick={menor}>
                        Menor (-)
                    </Button>
                </Grid>

                <Grid item xs={12} sm={3}></Grid>


            </Grid>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
