┌─────────────────┐
│ PLATFORM OWNER  │
│ - manages       │
│   School Owners │
└─────────┬───────┘
          │ manages
          ▼
┌─────────────────┐
│ SCHOOL OWNER    │
│ - owns 1+       │
│   Schools       │
└─────────┬───────┘
          │ manages
          ▼
┌─────────────────┐
│   SCHOOL        │
│ - type          │
│ - subscription  │
│ - approved      │
└─────────┬───────┘
          │ managed by
          ▼
┌─────────────────┐
│ SCHOOL ADMIN    │
│ - manages users │
└───────┬─────────┘
        │
  ┌─────┴───────┐
  ▼             ▼
┌───────────┐   ┌───────────┐
│ TEACHER   │   │ STUDENT   │
│ - userId  │   │ - userId  │
│ - school  │   │ - school  │
└──────┬────┘   └───────────┘
       │
       │ creates
       ▼
 ┌──────────────┐
 │  QUESTION    │
 │ - type       │
 │ - options    │
 │ - correctAns │
 │ - teacher    │
 │ - school     │
 └──────┬───────┘
        │ added to
        ▼
 ┌──────────────┐
 │    TEST      │
 │ - questions  │
 │ - duration   │
 │ - isPaid     │
 │ - price      │
 │ - teacher    │
 │ - school     │
 └──────┬───────┘
        │ attempted by
        ▼
 ┌──────────────┐
 │   ATTEMPT    │
 │ - test       │
 │ - student    │
 │ - answers    │
 │ - score      │
 │ - completed  │
 └──────┬───────┘
        │ triggers (if paid)
        ▼
 ┌──────────────┐
 │ TRANSACTION  │
 │ - student    │
 │ - teacher    │
 │ - test       │
 │ - amount     │
 │ - platformCut│
 │ - status     │
 └──────────────┘
