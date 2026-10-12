/* @ds-bundle: {"format":4,"namespace":"TaazurDesignSystem_ce6c1d","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"NavPill","sourcePath":"components/actions/NavPill.jsx"},{"name":"CornerMotif","sourcePath":"components/brand/CornerMotif.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"IconTile","sourcePath":"components/brand/IconTile.jsx"},{"name":"ImageFrame","sourcePath":"components/brand/ImageFrame.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionHeader","sourcePath":"components/brand/SectionHeader.jsx"},{"name":"DownloadCard","sourcePath":"components/content/DownloadCard.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KpiCard","sourcePath":"components/data/KpiCard.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"StatusPill","sourcePath":"components/data/StatusPill.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"465165891e97","components/actions/IconButton.jsx":"e04e4919cf9f","components/actions/NavPill.jsx":"07b5ae5fc3b6","components/brand/CornerMotif.jsx":"4d6a2eabc9cd","components/brand/Icon.jsx":"41545fc62f3d","components/brand/IconTile.jsx":"95baa7978687","components/brand/ImageFrame.jsx":"7fd8f3179900","components/brand/Logo.jsx":"a577437f352b","components/brand/SectionHeader.jsx":"624070c3cc8e","components/content/DownloadCard.jsx":"2bdabcbb591f","components/data/DataTable.jsx":"4007f2ceaedf","components/data/KpiCard.jsx":"dcb07b9ecf54","components/data/ProgressBar.jsx":"00b85d3e02a9","components/data/StatusPill.jsx":"2d641e68d26f","ui_kits/brand-guide/GuideSections.jsx":"4d3baddf20ae"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TaazurDesignSystem_ce6c1d = window.TaazurDesignSystem_ce6c1d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/NavPill.jsx
try { (() => {
const {
  useState
} = React;
function NavPill({
  children,
  href,
  active = false,
  onClick
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      fontSize: 14,
      padding: '6px 14px',
      borderRadius: 999,
      textDecoration: 'none',
      border: '1px solid ' + (active ? 'var(--orange-600)' : hov ? 'var(--petrol-700)' : 'var(--line)'),
      background: active ? 'var(--orange-600)' : 'transparent',
      color: active ? '#FFFFFF' : 'var(--petrol-700)',
      transition: 'border-color .15s',
      display: 'inline-flex'
    }
  }, children);
}
Object.assign(__ds_scope, { NavPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/NavPill.jsx", error: String((e && e.message) || e) }); }

// components/brand/CornerMotif.jsx
try { (() => {
function Tri({
  corner,
  size,
  edge,
  color
}) {
  const pos = corner === 'tl' ? {
    top: 0,
    left: 0
  } : corner === 'tr' ? {
    top: 0,
    right: 0
  } : corner === 'bl' ? {
    bottom: 0,
    left: 0
  } : {
    bottom: 0,
    right: 0
  };
  const clip = corner === 'tl' ? 'polygon(0 0,100% 0,0 100%)' : corner === 'tr' ? 'polygon(0 0,100% 0,100% 100%)' : corner === 'bl' ? 'polygon(0 0,0 100%,100% 100%)' : 'polygon(100% 0,100% 100%,0 100%)';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      ...pos,
      width: size,
      height: size,
      background: 'var(--gold-500)',
      clipPath: clip,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      ...pos,
      width: size - edge,
      height: size - edge,
      background: color,
      clipPath: clip,
      pointerEvents: 'none'
    }
  }));
}
function CornerMotif({
  size = 200,
  edge,
  corners = 'both'
}) {
  const e = edge ?? Math.round(size * 0.12);
  return /*#__PURE__*/React.createElement(React.Fragment, null, (corners === 'both' || corners === 'tl') && /*#__PURE__*/React.createElement(Tri, {
    corner: "tl",
    size: size,
    edge: e,
    color: "var(--petrol-700)"
  }), (corners === 'both' || corners === 'br') && /*#__PURE__*/React.createElement(Tri, {
    corner: "br",
    size: Math.round(size * 0.92),
    edge: e,
    color: "var(--orange-500)"
  }));
}
Object.assign(__ds_scope, { CornerMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CornerMotif.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 24,
  color,
  flip = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "'Material Symbols Rounded'",
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      whiteSpace: 'nowrap',
      direction: 'ltr',
      fontFeatureSettings: "'liga'",
      fontSize: size,
      color,
      display: 'inline-block',
      transform: flip ? 'scaleX(-1)' : undefined,
      ...style
    }
  }, name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const V = {
  primary: {
    b: 'var(--orange-600)',
    h: 'var(--orange-800)',
    c: '#FFFFFF'
  },
  secondary: {
    b: 'var(--petrol-700)',
    h: 'var(--petrol-900)',
    c: '#FFFFFF'
  },
  outline: {
    b: '#FFFFFF',
    h: 'var(--petrol-50)',
    c: 'var(--petrol-700)',
    bd: '1.5px solid var(--petrol-700)'
  },
  link: {
    b: 'transparent',
    h: 'transparent',
    c: 'var(--petrol-700)',
    hc: 'var(--orange-600)',
    link: true
  },
  gold: {
    b: 'var(--gold-500)',
    h: 'var(--gold-300)',
    c: 'var(--petrol-900)'
  },
  ghostDark: {
    b: 'transparent',
    h: 'transparent',
    c: '#FFFFFF',
    bd: '1.5px solid var(--petrol-400)',
    hbd: '1.5px solid #FFFFFF'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconEnd = true,
  disabled = false,
  children,
  onClick,
  href,
  type = 'button'
}) {
  const [hov, setHov] = useState(false);
  const v = V[variant] || V.primary;
  const h = size === 'sm' ? 44 : 48;
  const st = {
    fontFamily: 'inherit',
    fontSize: size === 'sm' ? 15 : 16,
    fontWeight: 600,
    height: h,
    padding: v.link ? '0 12px' : size === 'sm' ? '0 20px' : '0 24px',
    borderRadius: 10,
    border: hov && v.hbd || v.bd || 0,
    background: disabled ? 'var(--line-soft)' : hov ? v.h : v.b,
    color: disabled ? 'var(--ink-disabled)' : hov && v.hc || v.c,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    cursor: disabled ? 'default' : 'pointer',
    textDecoration: v.link ? 'underline' : 'none',
    textDecorationColor: 'var(--gold-500)',
    textUnderlineOffset: 6,
    transition: 'background .15s, color .15s, border-color .15s',
    whiteSpace: 'nowrap'
  };
  if (disabled) {
    st.border = 0;
  }
  const ic = icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    flip: icon.startsWith('arrow')
  });
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, !iconEnd && ic, children, iconEnd && ic);
  const evt = {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: st
  }, evt), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: st
  }, evt), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  icon,
  label,
  onClick,
  size = 48
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      fontFamily: 'inherit',
      width: size,
      height: size,
      borderRadius: 10,
      border: '1px solid ' + (hov ? 'var(--petrol-700)' : 'var(--line)'),
      background: '#FFFFFF',
      color: 'var(--petrol-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'border-color .15s'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/IconTile.jsx
try { (() => {
const TONES = {
  solid: {
    background: 'var(--petrol-700)',
    color: '#FFFFFF'
  },
  petrol: {
    background: 'var(--petrol-50)',
    color: 'var(--petrol-700)'
  },
  gold: {
    background: 'var(--gold-50)',
    color: 'var(--gold-700)'
  },
  orange: {
    background: 'var(--orange-50)',
    color: 'var(--orange-600)'
  },
  ring: {
    background: 'transparent',
    color: 'var(--petrol-700)',
    border: '1.5px solid var(--gold-500)',
    borderRadius: '50%'
  }
};
function IconTile({
  icon,
  tone = 'petrol',
  size = 56
}) {
  const t = TONES[tone] || TONES.petrol;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: size <= 40 ? 10 : 14,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      ...t
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/ImageFrame.jsx
try { (() => {
function ImageFrame({
  src,
  alt = '',
  treatment = 'corner',
  title,
  ratio = '4/5',
  placeholder = 'photo'
}) {
  const img = src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg,#E3EAED 0 10px,#EEF3F5 10px 20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--petrol-400)',
      direction: 'ltr'
    }
  }, placeholder);
  if (treatment === 'frame') return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '16px 0 0 16px',
      border: '2px solid var(--gold-500)',
      borderRadius: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 16px 16px 0',
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, img), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 56,
      height: 56,
      background: 'var(--orange-500)',
      clipPath: 'polygon(0 0,0 100%,100% 100%)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, img, treatment === 'corner' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 84,
      height: 84,
      background: 'var(--gold-500)',
      clipPath: 'polygon(0 0,100% 0,0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 72,
      height: 72,
      background: 'var(--petrol-700)',
      clipPath: 'polygon(0 0,100% 0,0 100%)'
    }
  })), treatment === 'scrim' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      height: '55%',
      background: 'linear-gradient(to top,rgba(6,44,56,.92),rgba(6,44,56,0))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 24,
      right: 24,
      left: 24,
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 3,
      background: 'var(--gold-500)'
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1.5
    }
  }, title))));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const SRC = {
  color: 'logo.png',
  petrol: 'logo-petrol.png',
  white: 'logo-white.png'
};
function Logo({
  variant = 'color',
  width = 180,
  assetBase = 'assets/',
  alt = 'شعار شركة تآزر المبتكرة'
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: assetBase + (SRC[variant] || SRC.color),
    alt: alt,
    style: {
      width,
      height: 'auto',
      display: 'block'
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeader.jsx
try { (() => {
function SectionHeader({
  number,
  title,
  label,
  children,
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderBottom: '1px solid ' + (onDark ? 'var(--petrol-600)' : 'var(--line-warm)'),
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: onDark ? 'var(--gold-500)' : 'var(--orange-600)'
    }
  }, number), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      color: onDark ? '#FFFFFF' : 'var(--petrol-900)'
    }
  }, title), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '.1em',
      color: onDark ? 'var(--petrol-200)' : 'var(--ink-4)'
    }
  }, label)), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.9,
      color: onDark ? 'var(--petrol-200)' : 'var(--ink-2)',
      maxWidth: 760
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/DownloadCard.jsx
try { (() => {
function DownloadCard({
  kind = 'template',
  tag,
  tagTone = 'petrol',
  meta,
  title,
  sample,
  sampleFont = 'display',
  description,
  thumb,
  href,
  cta = 'تنزيل',
  secondaryHref,
  secondaryLabel,
  ctaVariant
}) {
  const tagC = tagTone === 'orange' ? ['var(--orange-50)', 'var(--orange-800)'] : ['var(--petrol-50)', 'var(--petrol-600)'];
  if (kind === 'font') return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid var(--line-warm)',
      borderRadius: 16,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--gold-700)'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-4)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: sampleFont === 'display' ? 'var(--font-display)' : sampleFont === 'mono' ? 'var(--font-mono)' : 'var(--font-body)',
      fontWeight: sampleFont === 'display' ? 700 : 600,
      fontSize: 30,
      color: 'var(--petrol-900)'
    }
  }, sample), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--ink-3)',
      direction: 'ltr',
      textAlign: 'right'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant || 'secondary',
    size: "sm",
    icon: "download",
    iconEnd: false,
    href: href
  }, cta)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid var(--line-warm)',
      borderRadius: 18,
      padding: 24,
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, thumb && /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: "",
    style: {
      width: 150,
      height: 'auto',
      borderRadius: 4,
      boxShadow: '0 6px 20px rgba(6,44,56,.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      background: tagC[0],
      color: tagC[1],
      borderRadius: 6,
      padding: '3px 8px'
    }
  }, tag), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--petrol-900)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      color: 'var(--ink-3)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "download",
    iconEnd: false,
    href: href
  }, cta), secondaryHref && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    href: secondaryHref
  }, secondaryLabel || 'معاينة'))));
}
Object.assign(__ds_scope, { DownloadCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DownloadCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  total,
  minWidth = 720
}) {
  const cell = (col, extra) => ({
    padding: '16px 20px',
    textAlign: col.align === 'end' ? 'left' : 'right',
    ...extra
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid var(--line-warm)',
      borderRadius: 16,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 15,
      minWidth
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--petrol-700)',
      color: '#FFFFFF'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: cell(c, {
      fontWeight: 600
    })
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < rows.length - 1 ? '1px solid var(--line-soft)' : 0,
      background: i % 2 ? 'var(--paper)' : undefined
    }
  }, columns.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: cell(c, {
      fontWeight: j === 0 ? 600 : 400,
      color: j === 0 ? 'var(--petrol-900)' : c.numeric ? undefined : 'var(--ink-2)',
      fontVariantNumeric: c.numeric ? 'tabular-nums' : undefined,
      direction: c.numeric ? 'ltr' : undefined
    })
  }, r[c.key]))))), total && /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '2px solid var(--gold-500)'
    }
  }, columns.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: cell(c, {
      fontWeight: 700,
      color: 'var(--petrol-900)',
      direction: c.numeric ? 'ltr' : undefined
    })
  }, total[c.key] ?? ''))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  tone = 'petrol',
  width = 90,
  showLabel = true,
  onDark = false
}) {
  const fill = tone === 'orange' ? 'var(--orange-500)' : tone === 'gold' ? 'var(--gold-500)' : 'var(--petrol-700)';
  const track = onDark ? 'var(--petrol-600)' : 'var(--line-soft)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: showLabel ? undefined : width
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 6,
      background: track,
      borderRadius: 3,
      overflow: 'hidden',
      flex: showLabel ? 'none' : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(100, value)) + '%',
      height: '100%',
      background: fill
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      direction: 'ltr'
    }
  }, value, "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPill.jsx
try { (() => {
const S = {
  done: ['var(--success-bg)', 'var(--success)', 'مكتمل'],
  progress: ['var(--warning-bg)', 'var(--warning-ink)', 'قيد التنفيذ'],
  late: ['var(--danger-bg)', 'var(--danger)', 'متأخر'],
  new: ['var(--info-bg)', 'var(--info)', 'جديد']
};
function StatusPill({
  status = 'new',
  children,
  compact = false
}) {
  const [bg, c, l] = S[status] || S.new;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: bg,
      color: c,
      borderRadius: 999,
      padding: compact ? '2px 10px' : '4px 12px',
      fontSize: 13,
      fontWeight: 600,
      display: 'inline-block',
      whiteSpace: 'nowrap'
    }
  }, children ?? l);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiCard.jsx
try { (() => {
function KpiCard({
  label,
  value,
  icon,
  iconTone = 'petrol',
  delta,
  deltaStatus = 'done',
  note,
  dark = false,
  progress
}) {
  const ltr = /[%+\-−]/.test(String(value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--petrol-700)' : '#FFFFFF',
      color: dark ? '#FFFFFF' : undefined,
      border: dark ? 0 : '1px solid var(--line-warm)',
      borderRadius: 16,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'relative',
      overflow: 'hidden'
    }
  }, dark && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 56,
      height: 56,
      background: 'var(--gold-500)',
      clipPath: 'polygon(0 0,100% 0,0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: dark ? 'var(--petrol-200)' : 'var(--ink-3)'
    }
  }, label), icon && !dark && /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    tone: iconTone,
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1,
      color: dark ? 'var(--gold-300)' : 'var(--petrol-900)',
      direction: ltr ? 'ltr' : undefined,
      textAlign: 'right'
    }
  }, value), progress != null && /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: progress,
    tone: "gold",
    onDark: dark,
    showLabel: false,
    width: "100%"
  }), (delta || note) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13
    }
  }, delta && /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: deltaStatus,
    compact: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      display: 'inline-block'
    }
  }, delta)), note && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--petrol-200)' : 'var(--ink-3)'
    }
  }, note)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-guide/GuideSections.jsx
try { (() => {
const {
  Logo,
  CornerMotif,
  NavPill,
  SectionHeader,
  Button,
  IconButton,
  KpiCard,
  DataTable,
  StatusPill,
  ProgressBar,
  IconTile,
  Icon,
  ImageFrame,
  DownloadCard
} = window.TaazurDesignSystem_ce6c1d;
const A = '../../assets/';
const bgSoft = {
  background: '#FFFFFF',
  border: '1px solid var(--line-warm)',
  borderRadius: 16
};
function GuideCover({
  onNav
}) {
  const links = [['logo', 'الشعار'], ['color', 'الألوان'], ['type', 'الخطوط'], ['components', 'المكوّنات'], ['imagery', 'الصور'], ['apps', 'التطبيقات']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#FFFFFF',
      borderBottom: '1px solid var(--line-warm)'
    }
  }, /*#__PURE__*/React.createElement(CornerMotif, {
    size: 220,
    edge: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 96px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '.12em',
      color: 'var(--gold-800)',
      direction: 'ltr',
      textAlign: 'right'
    }
  }, "BRAND SYSTEM \xB7 v1.0 \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px,6vw,68px)',
      lineHeight: 1.25,
      color: 'var(--petrol-900)'
    }
  }, "\u062F\u0644\u064A\u0644 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 4,
      background: 'var(--gold-500)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.9,
      color: 'var(--ink-2)',
      maxWidth: 520
    }
  }, "\u0627\u0644\u0645\u0631\u062C\u0639 \u0627\u0644\u0645\u0648\u062D\u0651\u062F \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u0639\u0627\u0631 \u0634\u0631\u0643\u0629 \u062A\u0622\u0632\u0631 \u0627\u0644\u0645\u0628\u062A\u0643\u0631\u0629 \u0648\u0623\u0644\u0648\u0627\u0646\u0647\u0627 \u0648\u062E\u0637\u0648\u0637\u0647\u0627 \u0648\u0645\u0643\u0648\u0651\u0646\u0627\u062A\u0647\u0627 \u0641\u064A \u0627\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0648\u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4
    }
  }, links.map(([id, l]) => /*#__PURE__*/React.createElement(NavPill, {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    }
  }, l)), /*#__PURE__*/React.createElement(NavPill, {
    active: true,
    href: "#downloads",
    onClick: e => {
      e.preventDefault();
      onNav('downloads');
    }
  }, "\u0627\u0644\u062A\u0646\u0632\u064A\u0644\u0627\u062A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    width: "100%",
    assetBase: A
  }))));
}
function LogoSection() {
  const tiles = [['#FFFFFF', 'color', 'الأساسي — كامل الألوان', 'على الأبيض والخلفيات الفاتحة. الخيار الافتراضي في كل الاستخدامات.', 1], ['var(--gold-100)', 'color', 'على الرملي', 'مسموح على الرملي الفاتح ودرجات البترولي 50 فقط.'], ['var(--petrol-900)', 'white', 'أحادي أبيض', 'على البترولي الداكن والصور الداكنة.'], ['#FFFFFF', 'petrol', 'أحادي بترولي', 'للطباعة بلون واحد والأختام والنقش.', 1]];
  return /*#__PURE__*/React.createElement("section", {
    id: "logo",
    style: {
      paddingTop: 96,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "01",
    title: "\u0627\u0644\u0634\u0639\u0627\u0631",
    label: "LOGO"
  }, "\u064A\u062A\u0643\u0648\u0651\u0646 \u0627\u0644\u0634\u0639\u0627\u0631 \u0645\u0646 \u0631\u0645\u0632 \xABT\xBB \u0627\u0644\u0645\u0637\u0648\u064A\u0651 \u0628\u062B\u0644\u0627\u062B\u0629 \u0634\u0631\u0627\u0626\u0637 \u2014 \u0627\u0644\u0628\u062A\u0631\u0648\u0644\u064A \u0648\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u064A \u0648\u0627\u0644\u0630\u0647\u0628\u064A \u2014 \u062A\u062A\u0644\u0627\u0642\u0649 \u0641\u064A \u0645\u0631\u0643\u0632 \u0648\u0627\u062D\u062F \u062A\u0639\u0628\u064A\u0631\u0627\u064B \u0639\u0646 \u0627\u0644\u062A\u0622\u0632\u0631\u060C \u0645\u0639 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064A \u0648\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
      gap: 20
    }
  }, tiles.map(([bg, v, t, d, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      border: b ? '1px solid var(--line-warm)' : 0,
      borderRadius: 16,
      aspectRatio: '4/3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: v,
    width: "100%",
    assetBase: A
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      lineHeight: 1.7
    }
  }, d)))));
}
function ColorSection() {
  const [copied, setCopied] = React.useState(null);
  const main = [['var(--petrol-700)', '#FFFFFF', 'PRIMARY · 60%', 'بترولي تآزر', '#0A4456', 'العناوين، الخلفيات الرئيسية، الشريط العلوي، الأزرار الثانوية والروابط.'], ['var(--gold-500)', 'var(--petrol-900)', 'SECONDARY · 15%', 'ذهبي الصحراء', '#CDAA6E', 'الخطوط الفاصلة، الإطارات، الأرقام المميّزة على الداكن.'], ['var(--orange-500)', '#FFFFFF', 'ACCENT · 10%', 'برتقالي الابتكار', '#F04E23', 'زر الإجراء الرئيسي، المؤشرات المهمّة، العناصر الزخرفية.']];
  const copy = h => {
    navigator.clipboard && navigator.clipboard.writeText(h);
    setCopied(h);
    setTimeout(() => setCopied(null), 1400);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "color",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "02",
    title: "\u0627\u0644\u0623\u0644\u0648\u0627\u0646",
    label: "COLOR"
  }, "\u062B\u0644\u0627\u062B\u0629 \u0623\u0644\u0648\u0627\u0646 \u0645\u0623\u062E\u0648\u0630\u0629 \u0645\u0628\u0627\u0634\u0631\u0629\u064B \u0645\u0646 \u0634\u0631\u0627\u0626\u0637 \u0627\u0644\u0634\u0639\u0627\u0631\u060C \u0645\u0639 \u0645\u062D\u0627\u064A\u062F\u0627\u062A \u062F\u0627\u0641\u0626\u0629. \u0627\u0644\u0628\u062A\u0631\u0648\u0644\u064A \u064A\u0642\u0648\u062F\u060C \u0648\u0627\u0644\u0630\u0647\u0628\u064A \u064A\u0636\u064A\u0641 \u0627\u0644\u0641\u062E\u0627\u0645\u0629\u060C \u0648\u0627\u0644\u0628\u0631\u062A\u0642\u0627\u0644\u064A \u064A\u0648\u062C\u0651\u0647 \u0627\u0644\u0627\u0646\u062A\u0628\u0627\u0647 \u0641\u0642\u0637."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
      gap: 20
    }
  }, main.map(([bg, c, tag, n, h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    onClick: () => copy(h),
    style: {
      borderRadius: 18,
      overflow: 'hidden',
      ...bgSoft,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: c,
      height: 180,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: copied === h ? 'var(--success)' : 'var(--ink-2)',
      direction: 'ltr',
      textAlign: 'right'
    }
  }, copied === h ? 'copied ✓' : h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.8
    }
  }, d))))));
}
function ComponentsSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "components",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "04",
    title: "\u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062A",
    label: "COMPONENTS"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bgSoft,
      borderRadius: 18,
      padding: 32,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow_forward"
  }, "\u0642\u062F\u0651\u0645 \u0637\u0644\u0628\u0643 \u0627\u0644\u0622\u0646"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "\u062A\u0646\u0632\u064A\u0644"
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "\u063A\u064A\u0631 \u0645\u062A\u0627\u062D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0645\u0646\u0641\u0651\u0630\u0629",
    value: "48",
    icon: "workspaces",
    delta: "+12%",
    note: "\u0639\u0646 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0633\u0627\u0628\u0642"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u0648\u0646",
    value: "12,400",
    icon: "groups",
    iconTone: "gold",
    delta: "+2,150",
    note: "\u0647\u0630\u0627 \u0627\u0644\u0639\u0627\u0645"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    dark: true,
    label: "\u0631\u0636\u0627 \u0627\u0644\u0634\u0631\u0643\u0627\u0621",
    value: "94%",
    progress: 94,
    note: "\u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641 90% \u2014 \u0645\u062A\u062D\u0642\u0642"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632",
    value: "76%",
    icon: "flag",
    iconTone: "orange",
    delta: "\u22124%",
    deltaStatus: "progress",
    note: "\u0639\u0646 \u0627\u0644\u062E\u0637\u0629"
  })), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'p',
      label: 'المشروع'
    }, {
      key: 'o',
      label: 'الجهة'
    }, {
      key: 'd',
      label: 'المدة'
    }, {
      key: 'v',
      label: 'القيمة (ر.س)',
      align: 'end',
      numeric: true
    }, {
      key: 'g',
      label: 'الإنجاز'
    }, {
      key: 's',
      label: 'الحالة'
    }],
    rows: [{
      p: 'برنامج تمكين القيادات الشابة',
      o: 'وزارة الموارد البشرية',
      d: '12 شهراً',
      v: '1,850,000',
      g: /*#__PURE__*/React.createElement(ProgressBar, {
        value: 100
      }),
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "done"
      })
    }, {
      p: 'تصميم منصة التطوع الرقمية',
      o: 'جمعية أثر',
      d: '8 أشهر',
      v: '920,000',
      g: /*#__PURE__*/React.createElement(ProgressBar, {
        value: 64
      }),
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "progress"
      })
    }, {
      p: 'دراسة قياس الأثر الاجتماعي',
      o: 'مؤسسة خيرية',
      d: '4 أشهر',
      v: '340,000',
      g: /*#__PURE__*/React.createElement(ProgressBar, {
        value: 38,
        tone: "orange"
      }),
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "late"
      })
    }, {
      p: 'ملتقى الشراكات المجتمعية',
      o: 'أمانة المنطقة',
      d: '3 أشهر',
      v: '560,000',
      g: /*#__PURE__*/React.createElement(ProgressBar, {
        value: 12
      }),
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "new"
      })
    }],
    total: {
      p: 'الإجمالي',
      v: '3,670,000'
    }
  }));
}
function ImagerySection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "imagery",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "05",
    title: "\u0627\u0644\u0635\u0648\u0631",
    label: "IMAGERY"
  }, "\u0635\u0648\u0631 \u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0641\u0631\u0642 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0648\u0631\u0634 \u0648\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646 \u0641\u064A \u0628\u064A\u0626\u0629 \u0633\u0639\u0648\u062F\u064A\u0629\u060C \u0628\u0625\u0636\u0627\u0621\u0629 \u0637\u0628\u064A\u0639\u064A\u0629 \u062F\u0627\u0641\u0626\u0629. \u062A\u064F\u0639\u0627\u0644\u062C \u0627\u0644\u0635\u0648\u0631 \u0628\u062B\u0644\u0627\u062B \u0637\u0631\u0642 \u062B\u0627\u0628\u062A\u0629 \u0645\u0633\u062A\u0645\u062F\u0629 \u0645\u0646 \u0632\u0648\u0627\u064A\u0627 \u0627\u0644\u0643\u0644\u064A\u0634\u0629."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    treatment: "corner",
    placeholder: "team workshop photo"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    treatment: "scrim",
    placeholder: "beneficiaries photo",
    title: "\u0623\u062B\u0631 \u064A\u0645\u062A\u062F \u0625\u0644\u0649 \u0627\u0644\u0645\u062C\u062A\u0645\u0639"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    treatment: "frame",
    placeholder: "portrait / leadership"
  })));
}
function DownloadsSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "downloads",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "07",
    title: "\u0627\u0644\u062A\u0646\u0632\u064A\u0644\u0627\u062A",
    label: "DOWNLOADS"
  }, "\u062B\u0628\u0651\u062A \u0627\u0644\u062E\u0637\u0648\u0637 \u0623\u0648\u0644\u0627\u064B \u0639\u0644\u0649 \u062C\u0647\u0627\u0632\u0643\u060C \u062B\u0645 \u0627\u0641\u062A\u062D \u0627\u0644\u0642\u0648\u0627\u0644\u0628 \u0644\u062A\u0638\u0647\u0631 \u0628\u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0635\u062D\u064A\u062D\u0629."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(DownloadCard, {
    tag: "DOCX",
    meta: "Word \xB7 A4 \u0637\u0648\u0644\u064A",
    title: "\u0642\u0627\u0644\u0628 \u0627\u0644\u062E\u0637\u0627\u0628\u0627\u062A \u0648\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",
    description: "\u0627\u0644\u0643\u0644\u064A\u0634\u0629 \u062E\u0644\u0641\u064A\u0629 \u062B\u0627\u0628\u062A\u0629 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629\u060C \u0645\u0639 \u0623\u0646\u0645\u0627\u0637 \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0641\u0631\u0639\u064A\u0629 \u0648\u0627\u0644\u062A\u0648\u0642\u064A\u0639 \u0645\u0646 \u0627\u0644\u064A\u0645\u064A\u0646 \u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631.",
    thumb: A + 'letterhead-portrait.jpg',
    href: "../../downloads/Taazur-Letterhead-Template.docx",
    cta: "\u062A\u0646\u0632\u064A\u0644 \u0642\u0627\u0644\u0628 Word"
  }), /*#__PURE__*/React.createElement(DownloadCard, {
    tag: "PPTX",
    tagTone: "orange",
    meta: "PowerPoint \xB7 7 \u0634\u0631\u0627\u0626\u062D",
    title: "\u0642\u0627\u0644\u0628 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062A\u0642\u062F\u064A\u0645\u064A\u0629",
    description: "\u063A\u0644\u0627\u0641\u060C \u0645\u062D\u062A\u0648\u064A\u0627\u062A\u060C \u0641\u0627\u0635\u0644 \u0642\u0633\u0645\u060C \u0645\u062D\u062A\u0648\u0649\u060C \u0645\u0624\u0634\u0631\u0627\u062A\u060C \u062C\u062F\u0648\u0644\u060C \u0648\u062E\u062A\u0627\u0645 \u2014 \u0646\u0635\u0648\u0635 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u062F\u064A\u0644.",
    thumb: A + 'letterhead-landscape.png',
    href: "../../downloads/Taazur-Presentation-Template.pptx",
    cta: "\u062A\u0646\u0632\u064A\u0644 \u0642\u0627\u0644\u0628 PowerPoint",
    secondaryHref: "../../slides/01-cover.html"
  })));
}
function GuideFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--petrol-900)',
      color: 'var(--petrol-200)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(CornerMotif, {
    corners: "br",
    size: 130,
    edge: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 32px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    width: 180,
    assetBase: A
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      paddingInlineEnd: 120
    }
  }, "\u0646\u0638\u0627\u0645 \u0647\u0648\u064A\u0629 \u0634\u0631\u0643\u0629 \u062A\u0622\u0632\u0631 \u0627\u0644\u0645\u0628\u062A\u0643\u0631\u0629 \xB7 \u0627\u0644\u0625\u0635\u062F\u0627\u0631 1.0")));
}
Object.assign(window, {
  GuideCover,
  LogoSection,
  ColorSection,
  ComponentsSection,
  ImagerySection,
  DownloadsSection,
  GuideFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-guide/GuideSections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.NavPill = __ds_scope.NavPill;

__ds_ns.CornerMotif = __ds_scope.CornerMotif;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.DownloadCard = __ds_scope.DownloadCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatusPill = __ds_scope.StatusPill;

})();
