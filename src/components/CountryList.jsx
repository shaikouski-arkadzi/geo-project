import { useCities } from '../state/Cities.context';
import CountryItem from './CountryItem';
import Message from './Message';
import styles from './CountryList.module.css';

function CountryList() {
  const { cities } = useCities();

  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
