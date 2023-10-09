import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType }) {
  const scaleType = careType === 'light' ? <img src={Sun} alt='sun-icon' /> : <img src={Water} alt='water-icon' />;

  const quantity = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup',
  };

  const handleCareScaleClick = () => {
    const careTypeLabel = careType === 'light' ? 'de lumière' : "d'arrosage";
    alert(`Cette plante requiert ${quantity[scaleValue]} ${careTypeLabel}`);
  };

  return (
    <div onClick={handleCareScaleClick}>
      {[1, 2, 3].map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
