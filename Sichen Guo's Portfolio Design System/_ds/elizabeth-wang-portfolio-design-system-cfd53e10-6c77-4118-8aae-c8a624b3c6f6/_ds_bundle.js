/* @ds-bundle: {"format":4,"namespace":"ElizabethWangPortfolioDesignSystem_cfd53e","components":[{"name":"AnnotatedWord","sourcePath":"components/core/AnnotatedWord.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"ProjectCard","sourcePath":"components/core/ProjectCard.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/AnnotatedWord.jsx":"685568325007","components/core/ArrowLink.jsx":"8378879413a4","components/core/ProjectCard.jsx":"c86116db129e","components/navigation/Footer.jsx":"d16c9b9b3c2f","components/navigation/NavBar.jsx":"a1b2784bd138"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElizabethWangPortfolioDesignSystem_cfd53e = window.ElizabethWangPortfolioDesignSystem_cfd53e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/AnnotatedWord.jsx
try { (() => {
function AnnotatedWord({
  children,
  color = 'var(--ink-1)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      padding: '0 4px'
    }
  }, children, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 40",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      left: '-6%',
      top: '-25%',
      width: '112%',
      height: '150%',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6,22 C2,10 30,3 52,4 C78,5 96,10 94,21 C92,33 66,37 46,36 C24,35 9,31 8,23",
    fill: "none",
    stroke: color,
    strokeWidth: "1.4"
  })));
}
Object.assign(__ds_scope, { AnnotatedWord });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AnnotatedWord.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function ArrowLink({
  children,
  direction = 'down',
  href = '#'
}) {
  const glyph = direction === 'down' ? '↓' : direction === 'right' ? '⟶' : '↑';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-body)',
      textDecoration: 'none',
      display: 'inline-flex',
      gap: '6px',
      alignItems: 'center'
    }
  }, children, /*#__PURE__*/React.createElement("span", null, glyph));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/ProjectCard.jsx
try { (() => {
function ProjectCard({
  image,
  alt = '',
  caption,
  bg = 'var(--surface-card)'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'block',
      textDecoration: 'none',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: bg,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      borderTop: '1px solid var(--border-default)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-caption)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  name = 'Elizabeth Wang',
  year = 2020
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '20px 36px',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-caption)'
    }
  }, "\xA9 ", name, " ", year));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  name = 'elizabeth wang',
  homeHref = 'index.html',
  links = ['Projects', 'Extras', 'About'],
  activeIndex = -1
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 36px',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: homeHref,
    style: {
      fontSize: 'var(--fs-nav)',
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--fs-nav)',
      color: i === activeIndex ? 'var(--accent)' : 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AnnotatedWord = __ds_scope.AnnotatedWord;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
