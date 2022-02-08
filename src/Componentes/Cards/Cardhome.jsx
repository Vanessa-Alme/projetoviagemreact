import React from "react"
import Cardsingle from "./Cardsingle"
import Terra from '../../assets/img/terra.jpg'
import Disney from '../../assets/img/disney.jpg'
import Ecoturismo from '../../assets/img/ecoturismo.jpg'

export default function Cardhome() {
  return (
    <>
      <main>

        <div className="card border-dark">
          <div className="card-body h3">
            Confira abaixo as últimas postagens de nosso blog!
          </div>
        </div>
        <div className="card-deck">

          <div className="card border-dark">
            <Cardsingle foto={Terra}></Cardsingle>
            <div className="card-body">
              <h5 className="card-title">Como é ver a Terra do espaço?</h5>
              <p className="card-text">Turistas da SpaceX postam fotos fantásticas de viagem pela órbita</p>
            </div>

            <div className="card-footer">
              <small className="text-muted">Atualizados 7 minutos atrás</small>
            </div>
          </div>
          <div className="card border-dark">
            <Cardsingle foto={Disney}></Cardsingle>
            <div className="card-body">
              <h5 className="card-title">20 destinos espetaculares para viajar com crianças</h5>
              <p className="card-text">Uma viagem com crianças pode ser inesquecível!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Atualizados 3 minutos atrás</small>
            </div>
          </div>
          <div className="card border-dark">
            <Cardsingle foto={Ecoturismo}></Cardsingle>
            <div className="card-body">
              <h5 className="card-title">Ecoturismo: 10 destinos nacionais para conhecer</h5>
              <p className="card-text">Paisagens inspiradores e o melhor do turismo sustentável.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Atualizados 10 minutos atrás</small>
            </div>
          </div>
        </div>





      </main>
    </>

  )


}