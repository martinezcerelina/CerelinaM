import { useState, useRef, useEffect } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function fmt(d) {
  return d.toISOString().split("T")[0];
}

function fmtDMY(d) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
}

export default function TargetDateField({
  label = "Target Date:",
  name = "target-date",
  onChange = () => {},
}) {
  const today = useRef(new Date()).current;
  const [sel, setSel] = useState(null);
  const [navDate, setNavDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  function pickDay(y, m, d) {
    const picked = new Date(y, m, d);
    setSel(picked);
    setNavDate(new Date(y, m, 1));
    onChange(fmtDMY(picked));
    setOpen(false);
  }

  function navMonth(dir) {
    setNavDate((prev) => {
      const next = new Date(prev);
      next.setMonth(prev.getMonth() + dir);
      return next;
    });
  }

  const headlineDate = sel || navDate;

  return (
    <div className="dpf-container" ref={containerRef}>
      <style>{`
        .dpf-container { position: relative; font-family: 'SpaceGrotesk', sans-serif; max-width: 260px; }
        .dpf-label { display: block; font-size: 12px; letter-spacing: 0.06em; color: var(--yellow); margin-bottom: 6px; font-family: 'SpaceGrotesk'; }
        .dpf-input-wrap { position: relative; }
        .dpf-input {
          width:100%; background:rgba(255,255,255,0.04); border:1.5px solid #FF007F;
          border-radius:8px; padding:11px 38px 11px 14px; color:rgba(255,255,255,.85);
          font-family:'Space Grotesk', sans-serif; font-size:13px; outline:none; cursor:pointer;
        }
        .dpf-input:focus { border-color: #FFD558; }
        .dpf-input::placeholder { color:rgba(255,255,255,.25); }
        .dpf-icon { position:absolute; right:12px; top:50%; transform:translateY(-50%); color:#FF007F; pointer-events:none; }

        .dpf-popover { position:absolute; top:calc(100% + 8px); right:0; z-index:50; }
        .dpf-card { background:#0d0010; border-radius:24px; padding:20px; box-shadow:0 8px 32px rgba(180,80,120,.25); width:300px; }
        .dpf-headline { display:flex; align-items:baseline; gap:16px; margin-bottom:20px; padding:0 4px; }
        .dpf-month-name { font-size:44px; font-weight:700; color:#fff; line-height:1; letter-spacing:-1px; }
        .dpf-day-num { font-size:44px; font-weight:700; color:#fff; line-height:1; margin-left:auto; }
        .dpf-month-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:2px; }
        .dpf-month-head { font-size:11px; font-weight:600; color:rgba(255,255,255,.6); text-align:center; padding:4px 0; text-transform:uppercase; }
        .dpf-month-cell { font-size:13px; color:rgba(255,255,255,.8); text-align:center; cursor:pointer; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; margin:2px auto; transition:background .15s; }
        .dpf-month-cell:hover { background:rgba(255,255,255,.2); }
        .dpf-month-cell.today, .dpf-month-cell.selected { background:linear-gradient(135deg,#ffffff ,#8B0050); color:#fff; font-weight:700; }
        .dpf-month-cell.other-month { color:rgba(255,255,255,.3); }
        .dpf-nav { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
        .dpf-nav button { background:rgba(255,255,255,.2); border:none; color:#fff; width:30px; height:30px; border-radius:50%; cursor:pointer; font-size:15px; display:flex; align-items:center; justify-content:center; transition:background .15s; }
        .dpf-nav button:hover { background:rgba(255,255,255,.35); }
        .dpf-nav span { font-size:14px; font-weight:600; color:#fff; }
        .dpf-selected-display { font-size:12px; color:rgba(255,255,255,.65); text-align:center; margin-top:10px; min-height:18px; }
      `}</style>

      <label className="dpf-label" htmlFor={name}>{label}</label>
      <div className="dpf-input-wrap">
        <input
          className="dpf-input"
          type="text"
          id={name}
          name={name}
          placeholder="dd/mm/yyyy"
          value={sel ? fmtDMY(sel) : ""}
          readOnly
          required
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
        />
        <svg className="dpf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {open && (
        <div className="dpf-popover">
          <div className="dpf-card">
            {/* Tinanggal ang toggle buttons dito */}
            <div className="dpf-headline">
              <span className="dpf-month-name">{MONTHS[headlineDate.getMonth()]}</span>
              <span className="dpf-day-num">{headlineDate.getDate()}</span>
            </div>

            {/* Diretso MonthlyView na agad ang makikita */}
            <MonthlyView
              today={today}
              sel={sel}
              navDate={navDate}
              onNav={navMonth}
              onPick={pickDay}
            />

            <div className="dpf-selected-display">
              {sel ? `Selected: ${MONTHS[sel.getMonth()]} ${sel.getDate()}, ${sel.getFullYear()}` : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MonthlyView({ today, sel, navDate, onNav, onPick }) {
  const y = navDate.getFullYear();
  const m = navDate.getMonth();
  const first = new Date(y, m, 1).getDay();
  const lastDay = new Date(y, m + 1, 0).getDate();
  const prevMonthLastDay = new Date(y, m, 0).getDate();

  const cells = [];
  for (let i = 0; i < first; i++) {
    cells.push({ day: prevMonthLastDay - first + 1 + i, other: true });
  }
  for (let d = 1; d <= lastDay; d++) {
    cells.push({ day: d, other: false, date: new Date(y, m, d) });
  }
  const rem = (7 - ((first + lastDay) % 7)) % 7;
  for (let d = 1; d <= rem; d++) {
    cells.push({ day: d, other: true });
  }

  return (
    <>
      <div className="dpf-nav">
        <button type="button" onClick={() => onNav(-1)}>&#8249;</button>
        <span>{MONTHS[m]} {y}</span>
        <button type="button" onClick={() => onNav(1)}>&#8250;</button>
      </div>
      <div className="dpf-month-grid">
        {DAYS.map((d) => (
          <div key={d} className="dpf-month-head">{d.slice(0, 1)}</div>
        ))}
        {cells.map((c, i) => {
          if (c.other) {
            return <div key={i} className="dpf-month-cell other-month">{c.day}</div>;
          }
          const isToday = fmt(c.date) === fmt(today);
          const isSel = sel && fmt(c.date) === fmt(sel);
          return (
            <div
              key={i}
              className={`dpf-month-cell${isSel ? " selected" : isToday ? " today" : ""}`}
              onClick={() => onPick(y, m, c.day)}
            >
              {c.day}
            </div>
          );
        })}
      </div>
    </>
  );
}