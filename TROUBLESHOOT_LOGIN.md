# Troubleshooting Login 401 Error

## Quick Diagnostic Steps

### Step 1: Check if user exists in database

```sql
SELECT id, username, email, role, is_active, password_hash 
FROM users 
WHERE username = 'admin';
```

### Step 2: Verify password hash format

The password hash should:
- Start with `$2a$10$` or `$2y$10$`
- Be 60 characters long
- Be a valid BCrypt hash

### Step 3: Test password hash verification

Run the verification utility:

```bash
cd backend
mvn compile exec:java -Dexec.mainClass="com.portal.util.VerifyPasswordHash"
```

### Step 4: Use test endpoints (temporary)

After starting the backend, test these endpoints:

**Check if user exists:**
```bash
curl http://localhost:8080/api/test/check-user/admin
```

**Verify password:**
```bash
curl -X POST http://localhost:8080/api/test/verify-password \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password"}'
```

**Create test admin (if needed):**
```bash
curl -X POST http://localhost:8080/api/test/create-test-admin
```

## Common Issues and Solutions

### Issue 1: User doesn't exist

**Solution:** Insert the admin user:
```sql
INSERT INTO `users` (`username`, `email`, `password_hash`, `role`, `name`, `is_active`) 
VALUES ('admin', 'admin@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'admin', 'Admin User', TRUE);
```

### Issue 2: Password hash doesn't match

**Solution:** Generate a new hash and update:
```bash
# Generate new hash
mvn compile exec:java -Dexec.mainClass="com.portal.util.PasswordHashGenerator"

# Update in database
UPDATE users 
SET password_hash = '$2a$10$NEW_HASH_HERE' 
WHERE username = 'admin';
```

### Issue 3: Role enum mismatch

**Check:** The database should store lowercase 'admin', but Java enum uses uppercase ADMIN.

**Solution:** The RoleConverter should handle this. Verify it's working:
```sql
SELECT role FROM users WHERE username = 'admin';
-- Should show: admin (lowercase)
```

### Issue 4: User account disabled

**Check:**
```sql
SELECT is_active FROM users WHERE username = 'admin';
-- Should be: 1 (TRUE)
```

**Solution:**
```sql
UPDATE users SET is_active = TRUE WHERE username = 'admin';
```

## Generate Correct Password Hash

```bash
cd backend
mvn compile exec:java -Dexec.mainClass="com.portal.util.PasswordHashGenerator"
```

This will output a new BCrypt hash for "password" that you can use in your SQL.

## Complete Admin User Setup

```sql
USE admin_member_portal;

-- Delete existing admin if needed
DELETE FROM users WHERE username = 'admin';

-- Insert admin with correct hash
INSERT INTO `users` (
    `username`, 
    `email`, 
    `password_hash`, 
    `role`, 
    `name`, 
    `is_active`
) VALUES (
    'admin',
    'admin@example.com',
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
    'admin',
    'Admin User',
    TRUE
);

-- Verify
SELECT id, username, email, role, is_active FROM users WHERE username = 'admin';
```

## Backend Logs

Check backend console/logs for:
- "User not found" errors
- "Bad credentials" errors
- "Authentication failed" errors
- Role mismatch errors

Enable debug logging:
```properties
logging.level.org.springframework.security=DEBUG
logging.level.com.portal.service=DEBUG
```

## Test Login After Fix

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password","role":"admin"}'
```

Expected response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": 1,
  "username": "admin",
  "email": "admin@example.com",
  "name": "Admin User",
  "role": "ADMIN"
}
```

