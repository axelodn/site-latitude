// Cartes de visite — Latitude Organisation — RECTO ONLY
// 4 variations recto seul

const CONTACT = {
  name: 'Jérôme Aviotte',
  role: 'Gérant',
  phone: '06 86 70 65 20',
  email: 'jerome@latitude-organisation.com',
  web: 'www.latitude-organisation.com'
};

const LOGO = 'assets/logo-v3.png';
// Aspect: 728/296 ≈ 2.459

const LogoFull = ({ width, opacity = 1, style = {} }) =>
<img src={LOGO} alt="Latitude Organisation"
style={{ width, height: 'auto', display: 'block', opacity, ...style }} />;


// Globe-only crop (left ~38% of logo)
const LogoMark = ({ size = 60, opacity = 1 }) => {
  // Globe occupies first ~600px of 1613 (≈ 37%). To show globe at `size`,
  // image width = size / 0.37 ≈ size * 2.7.
  const imgW = size * 2.7;
  const imgH = imgW / 2.459;
  return (
    <div style={{ width: size, height: size, overflow: 'hidden', position: 'relative', opacity }}>
      <img src={LOGO} alt=""
      style={{ ...{ width: imgW, height: imgH, position: 'absolute',
          left: 0, top: (size - imgH) / 2, display: 'block' }, width: "350px" }} />
    </div>);

};

const Icon = ({ name, size = 12, color = '#d4af5f' }) => {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'phone') return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2.01z" /></svg>;
  if (name === 'mail') return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>;
  if (name === 'web') return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>;
  return null;
};

/* ------------------------------------------------------------------ */
/* V1 — Logo en haut, contact en bas, classique élégant                */
/* ------------------------------------------------------------------ */
const V1 = () =>
<div className="card grain" style={{ background: 'radial-gradient(ellipse at 50% 35%, #1a1814 0%, #0a0a0a 80%)' }}>
    <div className="bleed" style={{ display: 'flex', flexDirection: 'column', padding: '36px 38px', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LogoFull width={290} />
      </div>

      <div style={{ width: '100%' }} className="hairline-gold" />

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 14 }}>
          <div>
            <div className="gold-text" style={{ fontFamily: 'Cormorant Garamond', fontWeight: 500, fontSize: 26, lineHeight: 1 }}>
              Jérôme Aviotte
            </div>
            <div style={{ color: 'rgba(255,255,255,.6)', fontFamily: 'Montserrat', fontWeight: 300, fontSize: 9.5, letterSpacing: '.34em', marginTop: 6 }}>
              GÉRANT
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 18px', fontFamily: 'Inter', fontSize: 10, color: '#fff', fontWeight: 300 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={11} /><span>06 86 70 65 20</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="web" size={11} /><span>latitude-organisation.com</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, gridColumn: '1 / -1' }}><Icon name="mail" size={11} /><span>jerome@latitude-organisation.com</span></div>
        </div>
      </div>
    </div>
  </div>;


/* ------------------------------------------------------------------ */
/* V2 — Asymétrique : globe à gauche, infos à droite                   */
/* ------------------------------------------------------------------ */
const V2 = () =>
<div className="card grain" style={{ background: '#0a0a0a', display: 'flex' }}>
    <div style={{ width: 200, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRight: '1px solid rgba(212,175,95,.18)' }}>
      <LogoMark size={140} />
    </div>
    <div style={{ flex: 1, padding: '34px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div className="gold-text" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, letterSpacing: '.18em', lineHeight: 1 }}>
          LATITUDE
        </div>
        <div style={{ color: '#fff', fontFamily: 'Montserrat', fontWeight: 300, fontSize: 9, letterSpacing: '.42em', marginTop: 5 }}>
          ORGANISATION
        </div>
      </div>

      <div>
        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 500, fontSize: 24, color: '#fff', lineHeight: 1 }}>
          Jérôme Aviotte
        </div>
        <div className="gold-flat" style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: 9, letterSpacing: '.32em', marginTop: 5 }}>
          GÉRANT
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontFamily: 'Inter', fontSize: 9.5, color: 'rgba(255,255,255,.85)', fontWeight: 300 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}><Icon name="phone" size={10} /><span>06 86 70 65 20</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}><Icon name="mail" size={10} /><span>jerome@latitude-organisation.com</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}><Icon name="web" size={10} /><span>www.latitude-organisation.com</span></div>
      </div>
    </div>
  </div>;


/* ------------------------------------------------------------------ */
/* V3 — Logo plein-cadre, infos discrètes en bas                       */
/* ------------------------------------------------------------------ */
const V3 = () =>
<div className="card" style={{ background: '#080808' }}>
    <div className="bleed" style={{ padding: '32px 36px 26px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: -6 }}>
        <LogoFull width={400} />
      </div>
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #d4af5f, transparent)', margin: '10px 0 14px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Inter', fontSize: 9.5, color: 'rgba(255,255,255,.85)', fontWeight: 300 }}>
        <div>
          <div className="gold-flat" style={{ fontFamily: 'Cormorant Garamond', fontWeight: 500, fontSize: 17, color: '#e9c97a', lineHeight: 1 }}>
            Jérôme Aviotte
          </div>
          <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 8, letterSpacing: '.34em', marginTop: 3, fontFamily: 'Montserrat' }}>GÉRANT</div>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span>06 86 70 65 20</span>
          <span>jerome@latitude-organisation.com</span>
          <span style={{ color: '#d4af5f' }}>latitude-organisation.com</span>
        </div>
      </div>
    </div>
  </div>;


/* ------------------------------------------------------------------ */
/* V4 — Éditorial : grande initiale "J" + logo en haut                 */
/* ------------------------------------------------------------------ */
const V4 = () =>
<div className="card" style={{ background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
    <div className="gold-text" style={{
    position: 'absolute', left: -22, top: -60, fontFamily: 'Cormorant Garamond', fontWeight: 500, fontSize: 380, lineHeight: .85, letterSpacing: '-.04em'
  }}>J</div>

    <div className="bleed" style={{ padding: '30px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <LogoFull width={170} />
      </div>

      <div>
        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 400, fontSize: 34, color: '#fff', lineHeight: 1, letterSpacing: '.01em' }}>
          Jérôme <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Aviotte</span>
        </div>
        <div style={{ height: 1, width: 30, background: '#d4af5f', margin: '12px 0 10px' }} />
        <div style={{ color: 'rgba(255,255,255,.6)', fontFamily: 'Inter', fontWeight: 300, fontSize: 10.5, letterSpacing: '.04em' }}>
          Gérant — Latitude Organisation
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 18, fontFamily: 'Inter', fontSize: 9.5, color: '#fff', fontWeight: 300 }}>
          <span>06 86 70 65 20 &nbsp;·&nbsp; <span style={{ color: '#d4af5f' }}>jerome@latitude-organisation.com</span></span>
          <span style={{ color: 'rgba(255,255,255,.55)' }}>www.latitude-organisation.com</span>
        </div>
      </div>
    </div>
  </div>;


/* ------------------------------------------------------------------ */
/* CANVAS                                                              */
/* ------------------------------------------------------------------ */

const App = () =>
<DesignCanvas>
    <DCSection
    id="cards"
    title="Cartes de visite — Latitude Organisation"
    subtitle="4 variations · recto seul · format 85 × 55 mm (affiché à 2× pour la netteté)">
    
      <DCArtboard id="v1" label="01 · Classique — logo centré" width={510} height={330}>
        <V1 />
      </DCArtboard>

      <DCArtboard id="v2" label="02 · Asymétrique — globe à gauche" width={510} height={330}>
        <V2 />
      </DCArtboard>

      <DCArtboard id="v3" label="03 · Logo plein-cadre" width={510} height={330}>
        <V3 />
      </DCArtboard>

      <DCArtboard id="v4" label="04 · Éditorial — initiale" width={510} height={330}>
        <V4 />
      </DCArtboard>
    </DCSection>

    <DCSection id="notes" title="Notes" subtitle="Pour l'impression">
      <DCArtboard id="specs" label="Specs impression" width={420} height={500}>
        <div style={{ padding: '28px 30px', fontFamily: 'Inter', fontSize: 13, lineHeight: 1.7, color: '#1a1a1a', background: '#fff', height: '100%', boxSizing: 'border-box' }}>
          <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 24, fontWeight: 500, marginBottom: 14, color: '#0a0a0a' }}>Recommandations</div>
          <p style={{ margin: '0 0 10px' }}><strong>Format :</strong> 85 × 55 mm</p>
          <p style={{ margin: '0 0 10px' }}><strong>Fonds perdus :</strong> +3 mm</p>
          <p style={{ margin: '0 0 10px' }}><strong>Papier :</strong> 350 g/m² mat soyeux</p>
          <p style={{ margin: '14px 0 6px' }}><strong>Finitions :</strong></p>
          <ul style={{ margin: '0 0 14px 18px', padding: 0 }}>
            <li>Dorure à chaud or sur le logo</li>
            <li>Vernis sélectif sur le globe</li>
            <li>Tranche dorée pour l'effet luxe</li>
          </ul>
          <p style={{ margin: '14px 0 6px' }}><strong>Couleurs :</strong></p>
          <ul style={{ margin: '0 0 0 18px', padding: 0 }}>
            <li>Noir profond — Pantone Black 6 C</li>
            <li>Or — Pantone 871 C</li>
          </ul>
        </div>
      </DCArtboard>
    </DCSection>
  </DesignCanvas>;


ReactDOM.createRoot(document.getElementById('root')).render(<App />);