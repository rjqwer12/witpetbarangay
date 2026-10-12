import { CalendarDays, CheckCircle2, Clock3, CircleCheck, CircleX } from 'lucide-react';
const cards = [['Total Appointments', null, CalendarDays], ['Confirmed', 'Confirmed', CheckCircle2], ['In Progress', 'In Progress', Clock3], ['Completed', 'Completed', CircleCheck], ['Cancelled', 'Cancelled', CircleX]];
export default function SummaryCards({ appointments }) {
  return <div className="summary-grid">{cards.map(([label, status, Icon]) => <div className="summary-card" key={label}><span className="summary-icon"><Icon size={19} /></span><span>{label}</span><strong>{status ? appointments.filter(a => a.status === status).length : appointments.length}</strong></div>)}</div>;
}
