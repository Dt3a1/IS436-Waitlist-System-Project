# IS436-Waitlist-System-Project
Semester-long Group Project for IS 436 - Structured Systems Analysis and Design
# Sunset Tea Waitlist Application

## Introduction
The **Sunset Tea Waitlist Application** is a restaurant support web application designed to improve customer flow, reduce wait-time confusion, and streamline operational management for food and beverage businesses.

Specifically created for **Sunset Tea Cafe**, this application replaces traditional pen-and-paper waitlists with a modern digital solution. The system provides hosts and managers with accurate wait-time estimates while allowing customers to track their position in line, creating a more efficient and organized dining experience.

---

# Features

## Digital Waitlist
Customers can seamlessly join a virtual queue without needing to remain physically present at the restaurant.

## Wait Time Tracking
The application provides real-time and accurate wait-time estimates so customers can stay informed about their reservation status.

## Automated Notifications
When a table becomes available, the system automatically notifies the customer through their preferred contact method, such as:
- Text message
- Phone call
- Email notification

## Waitlist Management
Hosts and staff can:
- View the current queue
- Organize reservations
- Update reservation statuses
- Manage seating flow efficiently

## Table Management Dashboard
Managers can oversee:
- Restaurant floor sections
- Table availability
- Incoming party assignments

## Customer Autonomy
Customers may remove themselves from the waitlist if their plans change, helping reduce inaccurate wait times and “ghost” reservations.

## Visit Tracking
The system logs customer visits to provide useful data regarding:
- Dining frequency
- Customer patterns
- Reservation trends

## Security
The application supports secure employee account access using:
- Username/password authentication

---

# Staff and Management

The application requires an internet connection and can operate on existing hardware such as:
- Tablets
- Smartphones
- Laptops
- Desktop computers

The interface is designed to be user-friendly, requiring minimal training for non-technical staff members.

---

# Application Layout

## Customer-Facing Reservation Interface

Customers accessing the application will first see a welcome page for **Sunset Tea Cafe**.

The page allows customers to enter:
- First name
- Last name
- Phone number
- Party size
- Preferred contact method
- Reservation date and time
- Additional notes

### Input Types
| Field | Input Type |
|---|---|
| Party Size | Dropdown |
| Preferred Contact Method | Dropdown |
| Reservation Time | Date & Time Picker |
| Name / Phone / Notes | Text Input |

After completing the form, customers press the **Make Reservation** button to:
1. Save their reservation information
2. Join the waitlist queue
3. Receive reservation confirmation details

An **Employee Login** button is located in the top-right corner of the page and redirects authorized staff to the admin login interface.

---

# Making Reservations

After submitting a reservation, customers are redirected to a confirmation page displaying:
- Estimated wait time
- Current queue position
- Reservation details
- Reservation cancellation option

---

# Customer Reservation Editing

Customers can edit reservation information using:
- Reservation ID
- Reservation Code

This approach eliminates the need for customer accounts, simplifying:
- Reservation retrieval
- User experience
- Overall system design

---

# Admin and Staff Interface

The administrator portal contains a secure login page requiring:
- Username
- Password

Authorized employees can:
- Access customer records
- View reservation details
- Manage waitlists
- Monitor customer wait times

## Reservation Status Labels
Hosts can manage reservation states such as:
- Waiting
- Notified
- Ready

## Walk-In Reservations
Hosts may manually add walk-in customers directly into the system, allowing both online and in-person reservations to be managed in one centralized platform.

---

# Email Notification System

The application integrates with the **Mailjet Email API** to send reservation notifications to customers.

Employee users can:
1. Select a customer reservation
2. Click the **Notify** button
3. Automatically send an email notification when a table becomes available

---

# Removing Reservations from the Queue

Reservations can be removed by either:
- Customers
- Staff members

Reasons for removal may include:
- Customer cancellation
- No response from customer
- Significant lateness

Hosts may also contact guests directly by phone if necessary.

The application includes buttons allowing both customers and employees to remove reservations from the active queue.

---

# Technologies Used
Frontend
- React: Frontend JavaScript library used to build the customer-facing page and admin dashboard UI.
- Vite: Development/build tool for the React frontend. It runs the local frontend server and creates the production build.
- Bootstrap: CSS framework used for layout, forms, buttons, tables, cards, and responsive styling.

Backend
- Node.js: JavaScript runtime used to run the backend server.
- Express.js: Backend web framework used to create API routes for login, waitlist, customers, logs, notifications, and customer reservations.
- MySQL: Relational database used to store staff, customers, waitlist entries, statuses, notifications, and logs.

JavaScript Libraries
- Socket.IO: Real-time communication library used to automatically update the admin queue across multiple open dashboards.
- JWT / JSON Web Token: Authentication method used to protect admin-only backend routes after an employee logs in.
- bcryptjs: Password hashing library used to securely compare employee passwords with hashed passwords stored in MySQL.

APIs
- Mailjet API: Email service used to send customer notification emails when their table is ready.

Deployment
- Aiven: Cloud based data platform that hosts and manages the MySQL database used in this application.
- Render: Cloud deployment platform planned for hosting the backend and frontend. Did not use Render for MySQL because that was not a free feature of Render.

---

# Future Improvements

Potential future enhancements include:
- SMS notification integration
- Mobile application support
- Live table occupancy tracking
- Customer loyalty integration
- Analytics dashboard for managers

---

# Conclusion
The Sunset Tea Waitlist Application modernizes restaurant queue management by replacing outdated manual systems with a streamlined digital solution. By improving communication, wait-time visibility, and operational efficiency, the application enhances both customer experience and staff workflow.
