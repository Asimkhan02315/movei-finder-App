
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Slider = (props) => {

  return (
   
       <div className='container mt-4 '>
       <div className='row'>
      <div className='col'>
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {
        props.movie.map((item,index)=>{
          {/* console.log(item ) */}
          return(
            <SwiperSlide key={index}>
             <img src={item.posterUrl} alt="..." />
           </SwiperSlide>
          )
        })
      }


      </Swiper> 
    </div>
    </div>
 
    </div>
  )
}
export default Slider