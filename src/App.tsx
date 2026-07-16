import { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import {
  ArrowRight,
  ChefHat,
  Clock3,
  Coffee,
  ExternalLink,
  Heart,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Navigation,
  Phone,
  Quote,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { LogoMark } from './components/LogoMark';
import { FallingCafeDoodles } from './components/FallingCafeDoodles';
import { businessHours } from './data/business';
import { featuredMenuItems, menuCategories, type MenuCategory } from './data/menu';
import { MenuPage } from './pages/MenuPage';

const instagramUrl = 'https://www.instagram.com/lucy.intheskyliverpool/';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Lucy+in+the+Sky+Liverpool%2C+2+Exchange+Street+East%2C+Liverpool+L2+3PQ';
const baseUrl = import.meta.env.BASE_URL;
const menuUrl = `${baseUrl}menu/`;
const assetUrl = (filename: string) => `${baseUrl}assets/${filename}`;
const tickerItems = [
  'All-day brunch',
  'Birthday cake matcha',
  'Proper Scouse',
  'Fluffy pancakes',
  'Good mood coffee',
] as const;

const reviewThemes = [
  {
    title: 'Proper warm welcome',
    text: 'The kind of family-run place where you feel looked after from the moment you sit down.',
  },
  {
    title: 'Big plates, bright flavours',
    text: 'Fresh breakfasts, generous portions and playful specials people actually remember.',
  },
  {
    title: 'A Liverpool little gem',
    text: 'Colourful, comfortable and full of local character — the repeat-visit kind of café.',
  },
];

export function App(): ReactElement {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isMenuPage = pathname.endsWith('/menu');
  const [navOpen, setNavOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All favourites');
  const navRef = useRef<HTMLElement>(null);
  const navToggleRef = useRef<HTMLButtonElement>(null);

  const homeAnchor = (id: string) => (isMenuPage ? `${baseUrl}#${id}` : `#${id}`);

  useEffect(() => {
    document.title = isMenuPage
      ? 'Full Menu | Lucy in the Sky Liverpool'
      : 'Lucy in the Sky | Liverpool Brunch & Coffee';
  }, [isMenuPage]);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, [activeCategory, isMenuPage]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
    if (!navOpen) {
      return () => document.body.classList.remove('nav-open');
    }

    const navLinks = Array.from(navRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? []);
    const toggle = navToggleRef.current;
    const firstLink = navLinks[0];
    const lastLink = navLinks[navLinks.length - 1];

    const focusFrame = window.requestAnimationFrame(() => firstLink?.focus());
    const containNavFocus = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !firstLink || !lastLink || !toggle) return;

      if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault();
        toggle.focus();
      } else if (!event.shiftKey && document.activeElement === toggle) {
        event.preventDefault();
        firstLink.focus();
      }
    };

    window.addEventListener('keydown', containNavFocus);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', containNavFocus);
      toggle?.focus();
    };
  }, [navOpen]);

  const visibleMenuItems = featuredMenuItems.filter(
    (item) => activeCategory === 'All favourites' || item.category === activeCategory,
  );

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement" aria-label="Visitor information">
        <div className="announcement-track">
          <span>Independent since 1989</span>
          <i aria-hidden="true" />
          <span>Walk-ins welcome</span>
          <i aria-hidden="true" />
          <span>Liverpool city centre</span>
          <i aria-hidden="true" />
          <span>Open daily from 9</span>
          <i aria-hidden="true" />
          <span>Independent since 1989</span>
          <i aria-hidden="true" />
          <span>Walk-ins welcome</span>
        </div>
      </div>

      <header className="site-header">
        <a
          className="brand-link"
          href={isMenuPage ? baseUrl : '#home'}
          aria-label="Lucy in the Sky home"
          onClick={closeNav}
        >
          <LogoMark />
        </a>

        <nav
          ref={navRef}
          id="primary-navigation"
          className={navOpen ? 'site-nav is-open' : 'site-nav'}
          aria-label="Primary navigation"
        >
          <a
            href={isMenuPage ? '#menu-top' : menuUrl}
            aria-current={isMenuPage ? 'page' : undefined}
            onClick={closeNav}
          >
            Full menu
          </a>
          <a href={homeAnchor('scouse')} onClick={closeNav}>
            Scouse Tuesday
          </a>
          <a href={homeAnchor('story')} onClick={closeNav}>
            Our story
          </a>
          <a href={homeAnchor('visit')} onClick={closeNav}>
            Visit
          </a>
          <a className="nav-instagram" href={instagramUrl} target="_blank" rel="noreferrer" onClick={closeNav}>
            <Instagram size={18} aria-hidden="true" />
            Instagram
          </a>
        </nav>

        <a className="button button-small header-cta" href={mapsUrl} target="_blank" rel="noreferrer">
          Find us
          <Navigation size={17} aria-hidden="true" />
        </a>

        <button
          ref={navToggleRef}
          className="nav-toggle"
          type="button"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          aria-controls="primary-navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          {navOpen ? <X aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
        </button>
      </header>

      <FallingCafeDoodles />

      <main id="main-content" className={isMenuPage ? 'full-menu-page' : undefined}>
        {isMenuPage ? (
          <MenuPage />
        ) : (
          <>
            <section className="hero" id="home">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="star shape-star star-one" aria-hidden="true" />
          <div className="star shape-star star-two" aria-hidden="true" />

          <div className="hero-copy" data-reveal>
            <p className="eyebrow">
              <Sparkles size={17} aria-hidden="true" />
              Brunch · Coffee · Scouse classics
            </p>
            <h1>
              <span className="hero-lucy">Lucy</span>
              <span className="hero-in-the">in the</span>
              <span className="hero-sky">Sky</span>
            </h1>
            <p className="hero-lede">
              A slice of Liverpool, served all day with big flavour, family warmth and a little extra
              sparkle.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#menu">
                Meet the favourites
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href={mapsUrl} target="_blank" rel="noreferrer">
                Get directions
                <MapPin size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <Clock3 size={17} aria-hidden="true" />
                {businessHours.compact}
              </span>
              <span>
                <MapPin size={17} aria-hidden="true" />
                Exchange Street East
              </span>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-image-shell">
              <img
                src={assetUrl('birthday-cake-matcha.webp')}
                alt="Colourful iced birthday cake matcha with sprinkles on a pink tiled set"
                width="1120"
                height="1400"
                decoding="async"
              />
            </div>
            <div className="hero-sticker sticker-round">
              <span>Seasonal</span>
              <strong>Matcha</strong>
              <Sparkles size={22} aria-hidden="true" />
            </div>
            <div className="hero-sticker sticker-note">
              <Coffee size={20} aria-hidden="true" />
              <span>Made in Liverpool</span>
            </div>
            <svg className="hero-squiggle" viewBox="0 0 150 90" aria-hidden="true">
              <path d="M5 56c22-40 40 28 63-11s42 42 76-25" />
            </svg>
          </div>
        </section>

        <section className="flavour-ticker" aria-label="Cafe specialities">
          <div className="flavour-ticker-track">
            {[0, 1].map((copyIndex) => (
              <div
                className="flavour-ticker-set"
                aria-hidden={copyIndex === 1 ? true : undefined}
                key={copyIndex}
              >
                {tickerItems.map((item) => (
                  <span className="flavour-ticker-item" key={item}>
                    <span>{item}</span>
                    <b aria-hidden="true">✦</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="featured section-shell" aria-labelledby="featured-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Fresh from Lucy's</p>
            <h2 id="featured-title">Not your quiet little coffee.</h2>
            <p>Colour, crunch and coffee with a point of view. Here are the current main characters.</p>
          </div>

          <div
            className="feature-grid"
            role="region"
            aria-label="Featured favourites, scroll horizontally"
            tabIndex={0}
          >
            <article className="feature-card feature-wide" data-reveal>
              <img
                src={assetUrl('brunch-table.webp')}
                alt="Colourful brunch table with croissant, poached eggs, pancakes and flat white"
                width="1680"
                height="945"
                loading="lazy"
                decoding="async"
              />
              <div className="feature-overlay">
                <span className="pill">Lucy loves</span>
                <h3>The breakfast croissant</h3>
                <p>Poached eggs, avocado, rocket and crispy chilli. Flaky in all the right ways.</p>
              </div>
            </article>

            <article className="feature-card feature-matcha" data-reveal>
              <img
                src={assetUrl('birthday-cake-matcha.webp')}
                alt="Iced matcha topped with colourful birthday sprinkles"
                width="1120"
                height="1400"
                loading="lazy"
                decoding="async"
              />
              <div className="feature-overlay">
                <span className="pill">Seasonal star</span>
                <h3>Birthday cake matcha</h3>
              </div>
            </article>

            <article className="feature-card feature-type" data-reveal>
              <span className="feature-kicker">City-centre comfort</span>
              <strong>BRUNCH</strong>
              <em>served all day</em>
              <div className="feature-heart" aria-hidden="true">
                <Heart fill="currentColor" />
              </div>
            </article>
          </div>
        </section>

        <section className="menu-section section-shell" id="menu" aria-labelledby="menu-title">
          <div className="menu-intro" data-reveal>
            <div>
              <p className="eyebrow">A taste of the menu</p>
              <h2 id="menu-title">Pick your mood.</h2>
            </div>
            <p>
              Brunch favourites, Liverpool comfort food and joyful drinks. Seasonal specials change
              often — that is half the fun.
            </p>
          </div>

          <div className="menu-filters" aria-label="Filter menu favourites" data-reveal>
            {menuCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'is-active' : ''}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            className="menu-grid"
            role="region"
            aria-label="Menu favourites, scroll horizontally"
            aria-live="polite"
            tabIndex={0}
            data-reveal
          >
            {visibleMenuItems.map((item) => (
              <article className={'menu-card tone-' + item.tone} key={item.id}>
                <div className="menu-card-top">
                  <span>{item.category}</span>
                  {item.badge && <small>{item.badge}</small>}
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-card-star" aria-hidden="true" />
              </article>
            ))}
          </div>

          <div className="dietary-note" data-reveal>
            <Sparkles size={21} aria-hidden="true" />
            <p>
              Vegetarian, vegan and gluten-free choices are available. Please tell the team about any
              dietary needs when you order.
              </p>
            </div>

            <div className="menu-full-cta" data-reveal>
              <div>
                <p className="eyebrow">Want the whole spread?</p>
                <h3>Big breakfasts, coffee fixes and seasonal mischief.</h3>
              </div>
              <a className="button button-primary" href={menuUrl}>
                Open the full menu
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
          </section>

        <section className="scouse-section" id="scouse" aria-labelledby="scouse-title">
          <div className="scouse-burst" aria-hidden="true" />
          <div className="scouse-word" aria-hidden="true">
            SCOUSE
          </div>
          <div className="scouse-copy section-shell" data-reveal>
            <div className="scouse-icon">
              <ChefHat size={42} aria-hidden="true" />
            </div>
            <p className="eyebrow">Every Tuesday · while the pot lasts</p>
            <h2 id="scouse-title">Margy's Scouse. A proper family ritual.</h2>
            <p>
              Three generations, one much-loved recipe and a bowl that tastes unmistakably like
              Liverpool. Come hungry.
            </p>
            <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">
              Plan your Tuesday
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="story-section section-shell" id="story" aria-labelledby="story-title">
          <div className="story-image-wrap" data-reveal>
            <img
              src={assetUrl('lucy-interior-real.webp')}
              alt="Cosy Lucy in the Sky cafe interior with palm wallpaper, wooden tables and a pink neon sign"
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <span className="story-image-label">Pink walls. Liverpool soul.</span>
          </div>

          <div className="story-copy" data-reveal>
            <p className="eyebrow">Our family story</p>
            <h2 id="story-title">From Cavern Walks to Exchange Street.</h2>
            <p className="story-lede">
              Lucy in the Sky began as a family café in 1989. Today, Lucy and family keep that same
              generous spirit alive — now with brighter walls, bolder specials and a whole lot of pink.
            </p>
            <p>
              This is a place to pause, eat properly and feel remembered. The menu moves with the city,
              but the welcome stays the same.
            </p>
            <div className="story-facts">
              <div>
                <strong>1989</strong>
                <span>The story begins</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Generations of heart</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Proper Liverpool original</span>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section" aria-labelledby="reviews-title">
          <div className="reviews-head section-shell" data-reveal>
            <div className="rating-lockup">
              <strong>4.8</strong>
              <div>
                <div className="rating-stars" aria-label="4.8 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <span>500+ Tripadvisor reviews</span>
              </div>
            </div>
            <div>
              <p className="eyebrow">What Liverpool keeps telling us</p>
              <h2 id="reviews-title">Come for the colour. Return for the care.</h2>
            </div>
          </div>

          <div
            className="review-grid section-shell"
            role="region"
            aria-label="Guest review themes, scroll horizontally"
            tabIndex={0}
          >
            {reviewThemes.map((review) => (
              <article key={review.title} data-reveal>
                <Quote size={31} aria-hidden="true" />
                <h3>{review.title}</h3>
                <p>{review.text}</p>
                <span>Review theme · Tripadvisor & social</span>
              </article>
            ))}
          </div>
        </section>

        <section className="visit-section section-shell" id="visit" aria-labelledby="visit-title">
          <div className="visit-card" data-reveal>
            <div className="visit-copy">
              <p className="eyebrow">Come sit with us</p>
              <h2 id="visit-title">Your table in the sky is waiting.</h2>
              <div className="visit-details">
                <div>
                  <MapPin aria-hidden="true" />
                  <p>
                    <strong>Unit 2, Imperial Court</strong>
                    <span>2 Exchange Street East, Liverpool L2 3PQ</span>
                  </p>
                </div>
                <div>
                  <Clock3 aria-hidden="true" />
                  <p>
                    <strong>{businessHours.weekday}</strong>
                    <span>{businessHours.weekend}</span>
                  </p>
                </div>
              </div>
              <div className="visit-actions">
                <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">
                  Get directions
                  <Navigation size={19} aria-hidden="true" />
                </a>
                <a className="button button-ghost" href="tel:+441512369447">
                  Call 0151 236 9447
                  <Phone size={19} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div
              className="map-art"
              role="img"
              aria-label="Stylised Liverpool city-centre map showing Lucy in the Sky on Exchange Street East"
            >
              <span className="map-city-label">Liverpool city centre</span>
              <div className="map-block block-one" aria-hidden="true" />
              <div className="map-block block-two" aria-hidden="true" />
              <div className="map-block block-three" aria-hidden="true" />
              <div className="map-block block-four" aria-hidden="true" />
              <div className="map-road road-one" />
              <div className="map-road road-two" />
              <div className="map-road road-three" />
              <div className="map-road road-four" />
              <div className="map-road road-five" />
              <div className="map-pin">
                <MapPin size={34} fill="currentColor" aria-hidden="true" />
                <span>Lucy is here</span>
              </div>
              <span className="street-label label-one">Dale St</span>
              <span className="street-label label-two">Exchange St E</span>
              <span className="street-label label-three">Tithebarn St</span>
              <span className="street-label label-four">Castle St</span>
              <span className="map-landmark landmark-town-hall">Town Hall</span>
              <span className="map-landmark landmark-moorfields">Moorfields</span>
              <span className="map-compass" aria-hidden="true">N ↑</span>
              <span className="map-water">RIVER MERSEY</span>
            </div>
          </div>
        </section>

            <section className="social-section" aria-labelledby="social-title">
          <div className="social-collage" aria-hidden="true">
            <div className="social-tile tile-matcha" />
            <div className="social-tile tile-interior" />
            <div className="social-tile tile-brunch" />
          </div>
          <div className="social-copy" data-reveal>
            <Instagram size={34} aria-hidden="true" />
            <p className="eyebrow">Seasonal drops happen here first</p>
            <h2 id="social-title">Follow the windows. Follow the specials.</h2>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              @lucy.intheskyliverpool
              <ExternalLink size={19} aria-hidden="true" />
            </a>
          </div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <LogoMark />
        <p>Brunch, coffee and Scouse classics — served with a little extra sparkle.</p>
        <div className="footer-links">
          <a href={menuUrl}>Full menu</a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Directions
          </a>
          <a href="tel:+441512369447">Call</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <small>Independent Liverpool café · Website concept demo</small>
      </footer>
    </>
  );
}
