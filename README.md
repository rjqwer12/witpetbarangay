# Barangay Health Appointment System

Front-end React prototype. No server, API, database, or credentials needed.

## Run

```powershell
cd barangay-health-appointment-system-prototype
npm install
npm start
```

Open the local URL printed by Vite. `npm run build` creates the production bundle.

## Try it

1. Enter any non-empty Barangay ID and verify.
2. Select a service and an available slot for today (Asia/Manila).
3. Enter your name, phone number, and reason; confirm to see your digital pass.
4. Download Pass displays a simulated download alert; close resets the flow.
5. Switch to Staff dashboard to find the new appointment, search, filter, and update its status.
6. Cancel an active appointment and return to Resident view to book the reopened slot.

All data lives in React state and resets on refresh. Services share a single center-wide slot schedule. Queue numbers are unique and never reused during the session. Completed slots remain occupied; cancelled slots reopen. Completed/cancelled rows retain their action buttons in a disabled state to prevent invalid transitions and conflicts with rebooked slots. Role switching is a demo control, not authentication. The QR is explicitly a non-scannable placeholder.
