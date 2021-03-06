import universal from 'react-universal-component';

const determineHowToLoad = ({ page }) =>
  typeof page !== 'string' ? () => page() : import(`./${page}`);

const UniversalComponent = universal(determineHowToLoad, { minDelay: 800 });

export default UniversalComponent;
