## Event App API — README (API Contract)
---
Base URL: http://localhost:3000/api  
Content-Type: application/json for request bodies and responses.

Common error response (all endpoints)
```json
{
  "message": "Human readable error description"
}
```
---
## Users
---
### GET /users
Success: ``200 OK``
Response body:
```json
[
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "balance": 0,
    "profile_pic": "string",
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601",
    "__v": 0
  }
]
```
---
### GET /users/:id
Success: ``200 OK``
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "balance": 0,
  "profile_pic": "string",
  "createdAt": "ISO8601",
  "updatedAt": "ISO8601",
  "__v": 0
}
```
Error: ``404``
```json
{ "message": "User not found" }
```
---
### POST /users
Request body:
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "balance": 50,
  "profile_pic": "https://example.com/profiles/alice.jpg"
}
```
Success: ``201`` Created — returns created user (same shape as GET single).

---
### PUT /users/:id
Request body: partial or full of user fields (same keys as POST)  
Success: ``200`` OK — updated user object  
Error: ``404``
```json
{ "message": "User not found" }
```
---
### DELETE /users/:id
Success: ``200`` OK
```json
{ "message": "Deleted" }
```
Error: ``404``
```json
{ "message": "User not found" }
```
---
## Artists
---
### GET /artists
Success: ``200`` OK
```json
[
  {
    "_id": "string",
    "name": "string",
    "profile_pic": "string",
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601",
    "__v": 0
  }
]
```
---
### GET /artists/:id
Success: ``200`` OK — artist object  
Error: ``404``
```json
{ "message": "Artist not found" }
```
---
### POST /artists
Request body:
```json
{
  "name": "Artist Name",
  "profile_pic": "https://example.com/artist.jpg"
}
```
Success: ``201`` Created — created artist object

---
### PUT /artists/:id
Request body: partial/full fields  
Success: ``200`` OK — updated object  
Error: ``404``
```json
{ "message": "Artist not found" }
```
---
### DELETE /artists/:id
Success: ``200`` OK
```json
{ "message": "Deleted" }
```
Error: ``404``
```json
{ "message": "Artist not found" }
```
---
## Organizations (Orgs)
---
### GET /orgs
Success: ``200`` OK
```json
[
  {
    "_id": "string",
    "name": "string",
    "desc": "string",
    "profile_pic": "string",
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601",
    "__v": 0
  }
]
```
---
### GET /orgs/:id
Success: ``200`` OK — org object  
Error: ``404``
```json
{ "message": "Org not found" }
```
---
### POST /orgs
Request body:
```json
{
  "name": "Org Name",
  "desc": "Optional description",
  "profile_pic": "https://example.com/org.jpg"
}
```
Success: ``201`` Created — created org object

---
### PUT /orgs/:id
Request body: partial/full fields  
Success: ``200`` OK — updated object  
Error: ``404``
```json
{ "message": "Org not found" }
```
---
### DELETE /orgs/:id
Success: ``200`` OK
```json
{ "message": "Deleted" }
```
Error: ``404``
```json
{ "message": "Org not found" }
```
---
## Events
---
### GET /events
Success: ``200`` OK — list of events; org_id and artists are populated objects
```json
[
  {
    "_id": "string",
    "org_id": { "_id": "string", "name": "string", "desc": "string", "profile_pic": "string" },
    "name": "string",
    "event_pic": "string",
    "artists": [{ "_id": "string", "name": "string", "profile_pic": "string" }],
    "date": "ISO8601",
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601",
    "__v": 0
  }
]
```
---
### GET /events/:id
Success: ``200`` OK — event object (populated)  
Error: ``404``
```json
{ "message": "Event not found" }
```
---
### POST /events
Request body:
```json
{
  "org_id": "608c1f... (Org _id)",
  "name": "Event Name",
  "event_pic": "https://example.com/event.jpg",
  "artists": ["608c2a...","608c2b..."],
  "date": "2026-03-26T19:30:00Z"
}
```
Success: ``201`` Created — created event object  
Errors: ``400``/``404`` with { "message": "..." }

---
### PUT /events/:id
Request body: partial/full event fields  
Success: ``200`` OK — updated event  
Error: ``404``
```json
{ "message": "Event not found" }
```
---
### DELETE /events/:id
Success: ``200`` OK
```json
{ "message": "Deleted" }
```
Error: ``404``
```json
{ "message": "Event not found" }
```
---
## Carts
---
### GET /carts
Success: ``200`` OK — list of carts; user_id and event_id populated
```json
[
  {
    "_id": "string",
    "user_id": { "_id": "string", "name": "string", "email": "string" },
    "event_id": { "_id": "string", "name": "string", "date": "ISO8601" },
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601",
    "__v": 0
  }
]
```
---
### GET /carts/user/:userId
Success: ``200`` OK — carts for specified user (event_id populated)

---
### POST /carts
Request body:
```json
{
  "user_id": "608c3f... (User _id)",
  "event_id": "609d4a... (Event _id)"
}
```
Success: ``201`` Created — created cart object  
Errors: ``400``/``404`` with { "message": "..." }

---
### DELETE /carts/:id
Success: ``200`` OK
```json
{ "message": "Deleted" }
```
Error: ``404``
```json
{ "message": "Cart not found" }
```
---
## IDs and Formats
- IDs: MongoDB ObjectId strings (e.g., "``60a7b3f1e1d3c8b1f0a1d2e3``").  
- Dates: ISO 8601 strings (e.g., "``2026-03-26T19:30:00Z``").  
- All request/response bodies: application/json.
---
## Notes
- Responses include createdAt and updatedAt timestamps.  
- No authentication implemented; add Authorization header and related error responses if you add auth.  
- Validation is basic-ensure required fields and valid ObjectId/date formats when calling endpoints.