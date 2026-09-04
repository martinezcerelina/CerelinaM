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

  // FIXED: Kung may napili na, gamitin ang sel. Kung wala pa, gamitin ang TODAY (hindi navDate na laging 1)
  const headlineDate = sel || today;

  return (
    <div className="dpf-container" ref={containerRef}>
      <style>{`
        .dpf-container { position: relative; font-family: 'SpaceGrotesk', sans-serif; width: 100%; }
        .dpf-label { display: block; font-size: 12px; letter-spacing: 0.06em; color: var(--yellow); margin-bottom: 6px; font-family: 'SpaceGrotesk'; }
        .dpf-input-wrap { position: relative; width: 100%; }
        .dpf-input {
          width: 100%; background: rgba(255,255,255,0.04); border: 1.5px solid #FF007F;
          border-radius: 8px; padding: 10px 36px 10px 12px; color: rgba(255,255,255,.85);
          font-family: 'Space Grotesk', sans-serif; font-size: 13px; outline: none; cursor: pointer;
          box-sizing: border-box;
        }
        .dpf-input:focus { border-color: #FFD558; }
        .dpf-input::placeholder { color: rgba(255,255,255,.25); }
        .dpf-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: #FF007F; pointer-events: none; }

        .dpf-popover { 
          position: absolute; 
          top: calc(100% + 10px); 
          right: 0px; 
          z-index: 99999; 
          width: max-content;
        }
        .dpf-card { 
          background: #0d0010 !important;  
          border: 1.5px solid #FF007F !important;
          border-radius: 20px !important; 
          padding: 16px 20px !important; 
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.95); 
          width: 320px !important;        
          min-width: 320px !important;    
          height: auto !important;
          box-sizing: border-box !important;
        }

        .dpf-headline { display: flex; align-items: baseline; gap: 8px; margin-bottom: 10px; padding: 0 2px; }
        .dpf-month-name { font-size: 20px; font-weight: 700; color: #fff; line-height: 1; }
        .dpf-day-num { font-size: 20px; font-weight: 700; color: #FFD558; line-height: 1; margin-left: auto; }

        .dpf-nav { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
        .dpf-nav button { 
          background: rgba(255,255,255,.1); border: none; color: #fff; width: 22px; height: 22px; 
          border-radius: 50%; cursor: pointer; font-size: 12px; display: flex; align-items: center; 
          justify-content: center; transition: background .15s; 
        }
        .dpf-nav button:hover { background: rgba(255,255,255,.25); }
        .dpf-nav span { font-size: 12px; font-weight: 600; color: #fff; }

        .dpf-month-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; width:100%; box-sizing:border-box; }
        .dpf-month-head { font-size: 10px; font-weight: 600; color: rgba(255,255,255,.5); text-align: center; padding: 2px 0; }
        .dpf-month-cell { 
          font-size: 11px; color: rgba(255,255,255,.8); text-align: center; cursor: pointer; 
          border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; 
          justify-content: center; margin: 1px auto; transition: background .15s; 
        }
        .dpf-month-cell:hover { background: rgba(255,255,255,.2); }

        /* FIXED: Active/Selected Lang ang may solid pink highlight */
        .dpf-month-cell.selected { 
          background: linear-gradient(135deg, #FF007F, #8B0050) !important; 
          color: #fff !important; 
          font-weight: 700; 
        }

        /* FIXED: Kapag walang selected, naka-highlight ang today. Kapag may napili na, hindi na ito pink */
        .dpf-month-cell.today-only {
          background: linear-gradient(135deg, #FF007F, #8B0050);
          color: #fff;
          font-weight: 700;
        }

        .dpf-month-cell.other-month { color: rgba(255,255,255,.2); }
        .dpf-selected-display { font-size: 11px; color: rgba(255,255,255,.6); text-align: center; margin-top: 8px; min-height: 14px; }
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
        <svg className="dpf-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {open && (
        <div className="dpf-popover">
          <div className="dpf-card">
            <div className="dpf-headline">
              <span className="dpf-month-name">{MONTHS[headlineDate.getMonth()]}</span>
              <span className="dpf-day-num">{headlineDate.getDate()}</span>
            </div>

            <MonthlyView
              today={today}
              sel={sel}
              navDate={navDate}
              onNav={navMonth}
              onPick={pickDay}
            />

            <div className="dpf-selected-display">
              {sel ? `${fmtDMY(sel)}` : ""}
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
          
          // Kung walang napiling date pa, highlight-an ang today. Pag may napili na, huwag na.
          const showTodayHighlight = !sel && isToday;

          return (
            <div
              key={i}
              className={`dpf-month-cell ${isSel ? "selected" : ""} ${showTodayHighlight ? "today-only" : ""}`}
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