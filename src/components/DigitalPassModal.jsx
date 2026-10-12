import { useEffect, useRef } from 'react';
import { Check, Download, X } from 'lucide-react';
export default function DigitalPassModal({ appointment, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function key(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const items = [...document.querySelectorAll('.pass-modal button')];
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', key); previous?.focus(); };
  }, [onClose]);
  return <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}><section className="pass-modal" role="dialog" aria-modal="true" aria-labelledby="pass-title"><button ref={closeRef} className="icon-button modal-close" onClick={onClose} aria-label="Close digital pass"><X size={20} /></button><span className="success-icon"><Check size={28} /></span><h2 id="pass-title">You’re all set!</h2><p>Your appointment is confirmed. See you soon.</p><div className="pass-ticket"><div className="ticket-top"><span>YOUR DIGITAL HEALTH PASS</span><strong>{appointment.id}</strong></div><h3>{appointment.name}</h3><p>{appointment.service}</p><div className="ticket-details"><div><small>DATE</small><strong>{appointment.date}</strong></div><div><small>TIME</small><strong>{appointment.time}</strong></div></div><div className="queue-ticket"><div><small>QUEUE NUMBER</small><strong>{String(appointment.queue).padStart(3, '0')}</strong></div><div className="qr-placeholder" aria-label="QR code placeholder, not scannable">▦<small>DEMO QR</small></div></div></div><p className="form-note">Please arrive 15 minutes early and bring your Barangay ID.</p><button className="primary full" onClick={() => window.alert(`Simulated download\n\n${appointment.id}\n${appointment.name}\n${appointment.service}\n${appointment.date} · ${appointment.time}\nQueue ${appointment.queue}\n\nThis is a front-end demonstration pass.`)}><Download size={17} /> Download pass (simulated)</button><button className="secondary full" onClick={onClose}>Close & book another appointment</button></section></div>;
}
