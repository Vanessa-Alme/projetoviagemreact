import React from "react"
import Carouselimg from "./Carouselimg";
import Contato from '../../assets/img/bannercontato.png';
import Destino from '../../assets/img/bannerdestinos.png';
import Super from '../../assets/img/superpromo2.png';

export default function Carousel() {
  return (
    <>

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <Carouselimg imagem={Contato}></Carouselimg>
          </div>
          <div class="carousel-item">
            <Carouselimg imagem={Destino}></Carouselimg>
          </div>
          <div class="carousel-item">
            <Carouselimg imagem={Super}></Carouselimg>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}  