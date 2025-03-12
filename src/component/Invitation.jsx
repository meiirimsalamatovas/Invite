export default function Invitation() {
  return (
    <div className="fade-in">
    <div className="invitation-container">
      <h3 className="invitation-title">КУРМЕТТІ АҒАЙЫН-ТУЫС, <br /> ҚҰДА-ЖЕКЖАТ, ДОС-ЖАРАН!</h3>

      <p className="invitation-text">
        Сіздерді <br />
        Сәтбек 
        әкеміздің<br />
        70 жас мерейтойына <br />
        арнайы жайылған ақ дастарханымыздың <br />
        қадірлі қонағы болуға шақырамыз.
      </p>

      <div className="invitation-details">
        <p id="section-title">Той уақыты:</p>
        <p>20.04.2025 ЖЫЛЫ <br /> сағат 12:00-де</p>
      </div>

      <div className="toiDataS">
        <img src="./календарь.png" alt="data" />
      </div>

      <div className="invitation-details">
        <p id="section-title">Өтетін орны:</p>
        <p>"Inzhu Palace" мейрамханасы <br /> орта зал</p>
      </div>

      <div className="invitation-details">
        <p id="section-title">Той иелері:</p>
        <p>Балалары</p>
      </div>

      <div className="toiIeleri">
        <img src="./family.jpeg" alt="toi ieleri" />
      </div>

      <div className="invitation-dresscode">
        <p id="section-title">Дресс-Код:</p>
        <p>Құрметті қонақтар, тойға этно-қазақ ұлттық стилінде киініп келулеріңізді сұраймыз.</p>
      </div>

      <div className="dressKode">
        <img src="./dress.jpeg" alt="dresscode" />
      </div>
    </div>
    </div>
  );
}
