import StartContainer from '../StartContainer/StartContainer';
import css from './Hero.module.scss';

const Hero = () => {
  return (
    <StartContainer>
      <div className={css.hero_img} />
    </StartContainer>
  );
};

export default Hero;
