import { useState } from 'react';
import Header from './components/Header';
import ResidentView from './pages/ResidentView';
import StaffDashboard from './pages/StaffDashboard';
import { initialAppointments, initialSlots, appointmentDate } from './mockData';

export default function App() {
  const [role, setRole] = useState('resident');
  const [appointments, setAppointments] = useState(initialAppointments);
  const [slots, setSlots] = useState(initialSlots);
  const [notice, setNotice] = useState('');
  function book(details) {
    const slot = slots.find(s => s.id === details.slotId);
    if (!slot || slot.booked) return null;
    const queue = Math.max(0, ...appointments.map(a => a.queue)) + 1;
    const appointment = { ...details, id: `BH-${1000 + queue}`, queue, time: slot.time, date: appointmentDate, status: 'Confirmed' };
    setAppointments(list => [...list, appointment]);
    setSlots(list => list.map(s => s.id === slot.id ? { ...s, booked: true } : s));
    return appointment;
  }
  function updateStatus(id, status) {
    const appointment = appointments.find(a => a.id === id);
    if (!appointment || ['Completed', 'Cancelled'].includes(appointment.status)) return;
    setAppointments(list => list.map(a => a.id === id ? { ...a, status } : a));
    if (status === 'Cancelled') setSlots(list => list.map(s => s.id === appointment.slotId ? { ...s, booked: false } : s));
    setNotice(`${appointment.name}: ${status.toLowerCase()}.`);
  }
  return <><Header role={role} onRoleChange={setRole} /><main>{role === 'resident' ? <ResidentView slots={slots} onBook={book} /> : <StaffDashboard appointments={appointments} onUpdateStatus={updateStatus} notice={notice} />}</main><footer><span>Barangay Health Center</span><span>Front-end demo · Data resets on refresh</span><span>Care that’s closer to home.</span></footer></>;
}
