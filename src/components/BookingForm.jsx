import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
export default function BookingForm({ barangayId, onSubmit, onBack, error }) {
  const [validationError, setValidationError] = useState('');
  function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.name.trim() || !data.reason.trim()) { setValidationError('Please enter your name and a reason for your visit.'); return; }
    if (data.phone.replace(/\D/g, '').length < 7) { setValidationError('Please enter a phone number with at least 7 digits.'); return; }
    setValidationError('');
    onSubmit({ ...data, name: data.name.trim(), reason: data.reason.trim(), barangayId });
  }
  return <form onSubmit={submit}><div className="verified-id">Verified Barangay ID <strong>{barangayId}</strong></div><label>Full name<input name="name" autoComplete="name" placeholder="e.g. Maria Santos" required pattern=".*\S.*" maxLength={100} /></label><label>Mobile number<input name="phone" type="tel" autoComplete="tel" placeholder="0917 123 4567" required pattern="[+0-9 ()-]{7,20}" title="Enter a phone number using 7–20 digits, spaces, +, parentheses or hyphens." /></label><label>Reason for visit<textarea name="reason" rows={3} placeholder="Briefly tell us how we can help you" required maxLength={500} /></label>{(error || validationError) && <p role="alert" className="error">{error || validationError}</p>}<p className="form-note">Your details are only used for this demo appointment.</p><div className="form-actions"><button type="button" className="secondary" onClick={onBack}>Back</button><button className="primary" type="submit">Confirm appointment <ArrowRight size={17} /></button></div></form>;
}
