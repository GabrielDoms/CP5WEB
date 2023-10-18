import {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../routes/estilo.module.css'
import "./style.css";



//SwiperCore.use([Pagination]);

function Home (){

  /*Hook- useState */
  const [slidePreview, setSlidePreview]= useState(1);
  const [swiper, setSwiper] = useState(null); // Referência ao Swiper

  /*criando o objeto de imagens*/
const imagens = [
  {id:'1', image:'./src/assets/comida05.jpg'},
  {id:'2', image:'./src/assets/comida01.jpeg'},
  {id:'3', image:'./src/assets/comida02.jpeg'},
  {id:'4', image:'./src/assets/comida06.jpeg'},
  {id:'5', image:'./src/assets/comida03.jpeg'}
];

/*criando o efeito colateral*/

useEffect(()=>{
//criando a função que vai mudar o slideShow 
  function handleResize(){
    if(window.innerWidth <720){
      setSlidePreview(1);
    }else{
      setSlidePreview(2);
    }
  }
  //chamando a função
  handleResize();

  // evento que vai modificar toda vez que diminuir a tela
  window.addEventListener('resize',handleResize);

  /*como estamos usando useEffect é bom sair do evento e desmontar para 
  não perder a performace*/
  return ()=>{
    window.removeEventListener('resize',handleResize);
  }
// retorna um array vazio
}, [])


useEffect(() => {
  // Configura um intervalo para avançar os slides a cada X milissegundos
  const interval = setInterval(() => {
    if (swiper && swiper.activeIndex < imagens.length - 1) {
      swiper.slideNext();
    } else {
      swiper.slideTo(0);
    }
  }, 3000); // Mude para o intervalo desejado (3 segundos no exemplo)

  // Limpe o intervalo quando o componente for desmontado
  return () => {
    clearInterval(interval);
  };
}, [swiper]);

  return(
    <section>
      <Swiper
        slidePreview={slidePreview}
        pagination={{clickable:true}}
        navigation
        onSwiper={setSwiper}
      >
        {imagens.map((item) =>(       
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slide" className={styles.slideItem}/>          
          </SwiperSlide>
        ))}
      </Swiper>

      <p className='descricao'>
      "Bem-vindo ao La Fiesta Saborosa, o seu destino para uma autêntica experiência culinária mexicana. 
      Somos apaixonados por trazer os sabores, cores e aromas do México diretamente para o seu prato.
      No coração da nossa cozinha está a tradição, a autenticidade e ingredientes frescos, criando pratos que irão transportá-lo diretamente para as ruas movimentadas de Cancún e as festas animadas da Cidade do México.

Nosso Cardápio: Uma Viagem de Sabores"
      </p>

      {/* ÁREA DE CARTÕES */}
      <div className="container text-center mt-5 lead">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '10px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Guacamole</strong></h5>
                <img src="./src/assets/guacamole.webp" alt="" className='Imagecard'/>
                <p className="card-text my-4">
                O guacamole é um molho feito basicamente com abacate (ingrediente principal), verduras e limão.
                </p>
                <p className="card-text my-4 price">R$ 45,00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '10px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Tacos</strong></h5>
                <img src="./src/assets/tacos.jpg" alt="" className='fotoCard'/>
                <p className="card-text my-4">Taco é uma comida típica do México, feita com massa fina de milho frita chamada de tortilla, que é moldada no formato de uma concha para recebe um recheio.</p>
                <p className="card-text my-4 price">R$ 25,00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '10px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Quesadilha</strong></h5>
                <img src="./src/assets/quesadilha.jpg" alt="" className='fotoCard'/>
                <p className="card-text my-4">A quesadilha é uma tortilha, usualmente uma tortilha de milho - mas às vezes é feita com uma tortilha de trigo, que é recheada com queijo e depois é grelhada.</p>
                <p className="card-text my-4 price">R$ 70,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    
    </section>


  );
}
export default Home