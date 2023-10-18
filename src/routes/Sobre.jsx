import {  } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./style.css";

function Sobre (){



  return(
    <section>

      <div className="container text-center mt-5 lead">
        <div className="row justify-content-center">
            <h5 className="card-title"><strong>Nossa Equipe:</strong></h5>
            <p>Desenvolvedores do projeto de WEB DESING</p>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '10px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Dessenvolvedor Web</strong></h5>
                <img src="./src/assets/equipe04.jpeg" alt="" className='fotoCard'/>
                <p className="card-text my-4">
                Gabriel Fernandes Doms - RM: 98630
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Problem Solving + UX Design</strong></h5>
                <img src="./src/assets/equipe03.jpeg" alt="" className='fotoCard'/>
                <p className="card-text my-4">Rafael Henrique Pedra Franck - RM:550875</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Product Owner – PO & Edge Computing </strong></h5>
                <img src="./src/assets/equipe01.jpeg" alt="" className='fotoCard'/>
                <p className="card-text my-4">Eduardo Araujo - RM: 99758 </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>PYTHON Back-End & SCRUM Master</strong></h5>
                <img src="./src/assets/equipe02.jpeg" alt="" className='fotoCard'/>
                <p className="card-text my-4">Gabriela Trevisan - RM: 99500 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>


  );
}
export default Sobre