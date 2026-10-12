export const services = ['General Checkup', 'Immunization', 'Prenatal Care', 'Dental', 'Senior Consultation'];
export const appointmentDate = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Manila' });
export const displayDate = new Intl.DateTimeFormat('en-PH', { dateStyle: 'full', timeZone: 'Asia/Manila' }).format(new Date());
export const residents = [{ id: 'BGY-001', name: 'Maria Santos', phone: '09171234567' }, { id: 'BGY-002', name: 'Jose Reyes', phone: '09181234567' }];
export const staff = [{ id: 'STF-001', name: 'Dr. Ana Garcia', role: 'Health Officer' }];
export const initialSlots = ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM'].map((time, index) => ({ id: `slot-${index + 1}`, time, booked: index < 4 }));
export const initialAppointments = [
  { id: 'BH-1001', name: 'Maria Santos', barangayId: 'BGY-001', phone: '09171234567', reason: 'Routine wellness check', service: 'General Checkup', slotId: 'slot-1', time: '08:00 AM', date: appointmentDate, queue: 1, status: 'Completed' },
  { id: 'BH-1002', name: 'Jose Reyes', barangayId: 'BGY-002', phone: '09181234567', reason: 'Senior wellness visit', service: 'Senior Consultation', slotId: 'slot-2', time: '08:30 AM', date: appointmentDate, queue: 2, status: 'In Progress' },
  { id: 'BH-1003', name: 'Angela Cruz', barangayId: 'BGY-003', phone: '09191234567', reason: 'Prenatal follow-up', service: 'Prenatal Care', slotId: 'slot-3', time: '09:00 AM', date: appointmentDate, queue: 3, status: 'Confirmed' },
  { id: 'BH-1004', name: 'Miguel Dela Rosa', barangayId: 'BGY-004', phone: '09201234567', reason: 'Dental assessment', service: 'Dental', slotId: 'slot-4', time: '09:30 AM', date: appointmentDate, queue: 4, status: 'Confirmed' },
  { id: 'BH-1005', name: 'Elena Mendoza', barangayId: 'BGY-005', phone: '09211234567', reason: 'Vaccination', service: 'Immunization', slotId: 'slot-5', time: '10:00 AM', date: appointmentDate, queue: 5, status: 'Cancelled' }
];
