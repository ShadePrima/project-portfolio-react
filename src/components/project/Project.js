import { NavLink } from 'react-router-dom';
import './styles.css';

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className='project'>
        <img src={img} alt='project' className='project__img' />
        {index}
        <h3 className='project__title'>{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
