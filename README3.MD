MVP Feature List (Phase 1-3)
🧩 Phase 1: Core Foundation (MVP 1)

Focus: Basic Functionality + Authentication + Question System

Feature	Description
🔐 Authentication	Email/password login (NextAuth or JWT). Default role = Student.
🏫 School Registration	Admin registers school → approved by Platform Owner.
👥 Role Management	Admin can invite teachers, students.
🧑‍🏫 Teacher Dashboard	Create, edit, delete questions (MCQ only for MVP).
📚 Question Bank	Subject, Topic, Difficulty tags.
🧪 Test Creation	Select questions, define duration, save test.
🧍‍♂️ Student Dashboard	See available tests, take test, view results.
🧮 Auto Grading	Instant scoring for MCQs.
📄 Printable Tests	Export questions/test as PDF for offline use.
🧾 School Overview	Total teachers, students, tests, usage stats.
💰 Phase 2: Monetization + Analytics

Focus: Start generating revenue + insights

Feature	Description
💳 Payment Integration	SSLCOMMERZ / aamarPay (BD) integration for paid tests.
💵 Revenue Split Logic	Platform % and teacher % auto-handled.
📈 Dashboard Analytics	Charts for test attempts, earnings, student ranks.
🧍‍♀️ Student Leaderboard	Class-level rankings.
📢 Notifications	Test announcements, updates.
📦 Subscriptions	Flat fee per school (handled by Platform Owner).
🧠 Phase 3: Expansion & Intelligence

Focus: Automation, scaling, and personalization

Feature	Description
✍️ Question Types	Add Short and Broad questions with marking rubrics.
🤖 Auto Paper Generator	AI-assisted question paper creation.
📊 Smart Reports	Weak topic identification, per-student analytics.
📚 Shared Libraries	Teachers share public question banks.
🏫 Multi-school Dashboard	Owner analytics across schools.
🌐 Language Toggle	English ↔ Bangla switch (already starting now).
🧠 Optional Add-ons (Future)

🪙 Teacher reputation system / badges

🧾 Auto-certificate generator for test completion

🎓 Institution verification for public credibility

🧑‍💼 Corporate / NGO adaptation (for job tests or TVET upskilling)

🚀 Next Steps for You

Frontend Setup

Navbar, Home, Auth, Dashboard placeholders

Backend Setup

MongoDB models: User, School, Question, Test, Attempt

Core Logic

Role-based auth flow

CRUD for Question Bank

Basic test generation + submission