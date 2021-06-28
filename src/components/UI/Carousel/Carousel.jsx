import Slider from 'react-animated-slider';
import horizontal from 'react-animated-slider/build/horizontal.css';
import content from './content';
import '../Carousel/animation.css'

const Carousel = () =>{
    return(
        

<Slider classNames={horizontal}>
{content.map((item, index) => (
	<div
		key={index}
		style={{ background: `url('${item.image}') no-repeat center center` }}
	>
		<div className="center">
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			<button>{item.button}</button>
		</div>
	</div>
))}
</Slider>
    )
}

export default Carousel;