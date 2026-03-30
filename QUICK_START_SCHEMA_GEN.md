# Quick Start: Generate MySQL Schema from JPA Entities

## Quick Method (Recommended)

### Option 1: Using Maven Exec Plugin

```bash
cd backend
mvn compile exec:java -Dexec.mainClass="com.portal.util.SchemaGenerator"
```

### Option 2: Run from IDE

1. Open `backend/src/main/java/com/portal/util/SchemaGenerator.java`
2. Right-click → Run As → Java Application
3. Check output: `src/main/resources/db-schema-generated.sql`

### Option 3: Run Test

```bash
cd backend
mvn test -Dtest=SchemaGeneratorTest#generateSchema
```

## Output

The generated schema will be saved to:
```
backend/src/main/resources/db-schema-generated.sql
```

## What Gets Generated

- ✅ All table CREATE statements
- ✅ Foreign key constraints
- ✅ Indexes (from @Index annotations)
- ✅ Column types matching entity field types
- ✅ Constraints (NOT NULL, UNIQUE, etc.)
- ✅ Proper MySQL syntax

## Next Steps

1. **Review** the generated schema
2. **Compare** with existing `angular-app/database/schema.sql`
3. **Update** schema.sql if entities have changed
4. **Apply** to database if needed:
   ```bash
   mysql -u root -p admin_member_portal < src/main/resources/db-schema-generated.sql
   ```

## Troubleshooting

### Error: "Cannot find entity classes"
- Ensure all entity classes are listed in `SchemaGenerator.addEntityClasses()`

### Error: "Dialect not found"
- MySQL connector is already included via `spring-boot-starter-data-jpa`
- No additional dependencies needed

### Schema doesn't match expectations
- Check entity annotations (@Entity, @Table, @Column)
- Verify field types match database requirements
- Review naming strategy settings

## Tips

- Run this whenever you modify entity classes
- Compare generated schema with existing schema.sql
- Use version control to track schema changes
- Always backup database before applying schema changes

