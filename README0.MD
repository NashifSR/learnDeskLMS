1. Landing / Home Page

Why start here: Every user sees this first, even if they’re not logged in.

Features: Overview of LMS, login/signup buttons, maybe featured courses.

Route: /

2. Authentication Pages

Login Page – /login

Signup Page – /signup

Optional: Forgot password, email verification

3. Dashboard Pages (Role-Based)

After login, the user should land on their role-specific dashboard.

Student Dashboard – /dashboard/student

Courses joined

Available courses

Tests & progress

Teacher Dashboard – /dashboard/teacher

My courses

Create course

Pending student requests

Create tests

Admin Dashboard – /dashboard/admin

User management

Course management

Subscription & analytics

4. Course Pages

Course Listing – /courses (for all users, students can request to join)

Course Details / Resources – /courses/:courseId

Course resources, teacher info, tests

5. Test / Quiz Pages

Test Listing – /tests (depends on role)

Take Test – /tests/:testId

Test Results / Analytics – /tests/:testId/results

6. User Profile / Settings

/profile – update info, change password, view subscriptions