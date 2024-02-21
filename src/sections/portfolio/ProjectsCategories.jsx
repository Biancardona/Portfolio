import CategoryButton from './CategoryButton';
import { useState } from 'react';

const ProjectsCategories = ({ categories, onfilterHandler }) => {
  const [activeCat, setActiveCat] = useState('all');

  const changeCategoryHandler = (activeCategorie) => {
    /*nside the event handler, this line sets the activeCat state variable
     to the selected category, effectively updating the state.*/
    setActiveCat(activeCategorie);
    /*his line calls the filterHandler function passed as a prop 
    to the component, passing the selected category as an argument. */
    onfilterHandler(activeCategorie);
  };

  return (
    <div className='portfolio__categories'>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChange={() => changeCategoryHandler(category)}
          className={`btn cat__btn white ${
            activeCat === category ? 'primary' : 'white'
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
