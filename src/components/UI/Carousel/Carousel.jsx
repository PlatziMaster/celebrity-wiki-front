// Import libraries
import Slider from 'react-animated-slider';
// Import components
import { Spinner }  from "../Spinner/Spinner";
// Import custom hooks
import { useGetArtists } from '../../../customHooks/useGetArtists';

const Carousel = () =>{
	const { artists, loading } = useGetArtists();

	if (loading) {
    return (
      <div className="container-spinner">
        <Spinner classStyle="spinner-orange"/>
      </div>
    )
  }

	return(
		<Slider autoplay={3000}>
			{artists.map(artist => (
				<div key={artist._id}>
					<section className="slide__content">
						<img className="slide__image" src={artist.Image} alt={artist.Artist_name} />
						<section className="slide__description">
							<h4 className="slide__title">{artist.Artist_name}</h4>
							<div>
								<h5>Happinest song</h5>
								<p>{artist.Analysis.Happiest.song_name}</p>
							</div>
							<div>
								<h5>Saddest song</h5>
								<p>{artist.Analysis.Saddest.song_name}</p>
							</div>
						</section>
					</section>
				</div>
			))}
		</Slider>
	)
}

export default Carousel;