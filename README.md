## Introduction

This repository contains a reproduction for https://github.com/prisma/prisma/issues/2815


## Steps for reproduction

1. Clone the repository and run `yarn install`. Set the pg url in `prisma/.env`
2. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
3. Run this following sql query in the database:
```sql
INSERT INTO "public"."A" ("data", "id") VALUES
('{}', 'ckbqhy5r4000101mi3q2f35s3'),
('[{"item": "something"}]', 'ckbqhywd2000301mi7yqdfq3u'),
('{"somecrap": "morecrap"}', 'ckbqhzc3b000501mi21vw0p0z');
```
4. Run `yarn start` to reproduce
