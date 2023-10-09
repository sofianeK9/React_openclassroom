import CareScale from './CareScale'
import '../components/styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {

    const handleClick = (plantName) => {
        console.log(`Vous voulez achter 1 ${plantName} ? trés bon choix !`);
    }
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem