import type { ReactElement } from 'react';
import { ArrowLeft, ArrowRight, Clock3, MapPin, Sparkles } from 'lucide-react';
import { businessHours } from '../data/business';
import { instagramSummerMenu, menuExtras, menuSections } from '../data/menu';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Lucy+in+the+Sky+Liverpool%2C+2+Exchange+Street+East%2C+Liverpool+L2+3PQ';
const homeUrl = import.meta.env.BASE_URL;

export function MenuPage(): ReactElement {
  return (
    <>
      <section className="full-menu-hero" id="menu-top" aria-labelledby="full-menu-title">
        <div className="section-shell">
          <a className="full-menu-back" href={homeUrl}>
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Lucy
          </a>

          <div className="full-menu-hero-layout">
            <div className="full-menu-hero-copy" data-reveal>
              <p className="eyebrow">
                <Sparkles size={17} aria-hidden="true" />
                The full spread
              </p>
              <h1 id="full-menu-title">
                Full <span>menu.</span>
              </h1>
              <p>
                All-day breakfast, Liverpool comfort food, bold matcha and Lucy&apos;s latest seasonal
                specials.
              </p>

              <div className="full-menu-notice" role="note">
                <Sparkles size={20} aria-hidden="true" />
                <span>
                  <strong>Sample dine-in menu.</strong> Prices and availability may change — seasonal
                  items move fast.
                </span>
              </div>
            </div>

            <div className="full-menu-hero-board" aria-hidden="true" data-reveal>
              <span>Brunch · Coffee · Scouse</span>
              <strong>ALL DAY</strong>
              <em>pick your mood</em>
              <div className="full-menu-board-star" />
            </div>
          </div>
        </div>
      </section>

      <nav className="full-menu-category-nav" aria-label="Full menu categories">
        <div className="full-menu-category-nav-inner section-shell">
          <a href="#menu-summer">Summer now</a>
          {menuSections.map((section) => (
            <a href={`#menu-${section.id}`} key={section.id}>
              {section.navLabel}
            </a>
          ))}
          <a href="#menu-extras">Extras</a>
        </div>
      </nav>

      <section className="instagram-menu-section section-shell" id="menu-summer" aria-labelledby="summer-menu-title">
        <div className="instagram-menu-head" data-reveal>
          <div>
            <p className="eyebrow">
              <Sparkles size={17} aria-hidden="true" />
              New for summer
            </p>
            <h2 id="summer-menu-title">The summer drop.</h2>
          </div>
        </div>

        <div
          className="instagram-menu-grid"
          role="region"
          aria-label="Summer specials, scroll horizontally"
          tabIndex={0}
        >
          {instagramSummerMenu.map((item, index) => (
            <article className={`instagram-menu-card tone-${item.tone}`} key={item.id}>
              <div className="instagram-menu-card-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.price}</strong>
              </div>
              <div>
                <p>{item.badge}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <span className="instagram-menu-card-star" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <div className="full-menu-body section-shell">
        {menuSections.map((section) => (
          <section
            className={`full-menu-category full-menu-category-${section.tone}`}
            id={`menu-${section.id}`}
            aria-labelledby={`menu-${section.id}-title`}
            key={section.id}
          >
            <header className="full-menu-category-head" data-reveal>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={`menu-${section.id}-title`}>{section.title}</h2>
              <p>{section.intro}</p>
            </header>

            <ul className="full-menu-list">
              {section.items.map((item) => (
                <li className="full-menu-item" key={item.id}>
                  <div className="full-menu-item-copy">
                    <div className="full-menu-item-title">
                      <h3>{item.name}</h3>
                      {item.badge && <span>{item.badge}</span>}
                    </div>
                    <p>{item.description}</p>
                    {item.tags && (
                      <div className="full-menu-tags" aria-label="Dietary and menu notes">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className={item.price ? 'full-menu-price' : 'full-menu-price full-menu-price-note'}>
                    {item.price ?? item.priceNote}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="full-menu-extras" id="menu-extras" aria-labelledby="menu-extras-title">
          <div className="full-menu-extras-head">
            <p className="eyebrow">Make it yours</p>
            <h2 id="menu-extras-title">Extras & little upgrades.</h2>
          </div>
          <ul>
            {menuExtras.map((extra) => (
              <li key={extra.name}>
                <span>{extra.name}</span>
                <strong>{extra.price}</strong>
              </li>
            ))}
          </ul>
        </section>

        <aside className="full-menu-dietary" aria-labelledby="dietary-title">
          <Sparkles size={28} aria-hidden="true" />
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 id="dietary-title">Tell us what you need.</h2>
            <p>
              Vegetarian, vegan and gluten-free options are available. Please speak to the team about
              allergies and dietary requirements; ingredients and preparation may vary.
            </p>
          </div>
        </aside>
      </div>

      <section className="full-menu-visit" aria-labelledby="full-menu-visit-title">
        <div className="full-menu-visit-inner section-shell">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2 id="full-menu-visit-title">Come hungry. Leave sparkling.</h2>
          </div>
          <div className="full-menu-visit-details">
            <span>
              <Clock3 size={19} aria-hidden="true" />
              {businessHours.compact}
            </span>
            <span>
              <MapPin size={19} aria-hidden="true" />
              Exchange Street East
            </span>
          </div>
          <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">
            Get directions
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
