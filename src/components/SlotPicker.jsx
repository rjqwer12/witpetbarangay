import { Check, LockKeyhole } from 'lucide-react';
export default function SlotPicker({ slots, selected, onSelect }) {
  return <div><div className="slot-legend"><span><i /> Available</span><span><i className="gray" /> Booked</span><span><i className="green" /> Selected</span></div><div className="slot-grid">{slots.map(slot => <button type="button" key={slot.id} disabled={slot.booked} aria-pressed={selected === slot.id} className={`slot ${selected === slot.id ? 'selected' : ''}`} onClick={() => onSelect(slot.id)}><span>{slot.time}</span><small>{slot.booked ? <><LockKeyhole size={12} /> Booked</> : selected === slot.id ? <><Check size={12} /> Selected</> : 'Available'}</small></button>)}</div></div>;
}
