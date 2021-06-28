import Slider from 'react-animated-slider';
import content from './content';


const Carousel = () =>{
    return(
        

<Slider autoplay={3000}>
{content.map((item, index) => (
	<div key={index}>
		<div>
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			
		</div>
	</div>
))}
</Slider>
    )
}

export default Carousel;