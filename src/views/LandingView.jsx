import { Link } from 'react-router-dom';

export default function LandingView() {
  return (
    <div className="container">
      <h1>Witam w Kalkulatorze Średniej Ważonej</h1>
      <Link to="/kalkulator">
      <div className='Route'>
        <button>Przejdź do kalkulatora</button>
      </div>
      </Link>
    </div>
  );
}
