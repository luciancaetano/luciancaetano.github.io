import React, { Component } from 'react';
import './App.css';
import db from './base';

function mascaraValor(valor) {
  valor = valor.toString().replace(/\D/g, "");
  valor = valor.toString().replace(/(\d)(\d{8})$/, "$1.$2");
  valor = valor.toString().replace(/(\d)(\d{5})$/, "$1.$2");
  valor = valor.toString().replace(/(\d)(\d{2})$/, "$1,$2");
  return valor
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: Object.assign([], db.questions),
      custoEstimado: 0,
      showValue: false
    };
  }

  check(idx, idw) {
    let q = this.state.questions;
    q[idx].answ.forEach((opt, id) => {
      q[idx].answ[id].checked = false;
    });
    q[idx].active = true;
    q[idx].answ[idw].checked = !q[idx].answ[idw].checked;
    this.setState({
      question: q
    });
    this.calculaEstimado();
    let allchecked = true;
    this.state.questions.forEach((q) => {
      allchecked = allchecked && q.active;
    });
    this.setState({
      showValue: allchecked
    });
  }

  calculaEstimado() {
    let valor = Object.assign(0, db.base);
    this.state.questions.forEach((q, idx) => {
      q.answ.forEach((a, id) => {
        valor += a.checked ?  this.calculaCusto(q,a): 0;
      });
    });

    this.setState({
      custoEstimado: valor
    });
  }

  calculaCusto(q,a){
    return (q.base * a.consumo) - ((q.base * a.consumo) * (q.desconto_percent / 100))
  }

  render() {

    let questions = this.state.questions.map((q, idx) => {

      let aswrs = q.answ.map((asw, idw) => {
        return (
          <div key={ idw }>
            <label className={ asw.checked ? 'c' : '' }>
              <input type="radio" name={ "opt" + idx + '_' + idw } checked={ asw.checked } onClick={ () => {
                this.check(idx, idw)
              } } />
              { asw.title } <span>{mascaraValor(this.calculaCusto(q, asw).toFixed(2))} R$</span>
            </label>
          </div>
        )
      });

      return (
        <div className="question" key={ idx }>
          <h1>{ q.question }</h1>
          { aswrs }
        </div>
      )
    });

    return (
      <div className="App">
        { this.state.showValue ?
          <div className="custo-estimado">Custo Estimado:
            { mascaraValor(this.state.custoEstimado.toFixed(2)) } R$
          </div> :
          <div className="custo-estimado">Calculando...</div> }
        <div className="App-header">
          <h2>{ db.title }</h2>
        </div>
        <div className="App-intro">
          { questions }
        </div>
      </div>
      );
  }
}

export default App;
