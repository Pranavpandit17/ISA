# Generate MySQL Schema from JPA Entities

This guide explains how to generate MySQL database schema (DDL) from your JPA entities.

## Method 1: Using SchemaGenerator Utility Class (Recommended)

### Step 1: Run the SchemaGenerator

You can run the `SchemaGenerator` class directly:

```bash
cd backend
mvn compile exec:java -Dexec.mainClass="com.portal.util.SchemaGenerator"
```

Or run it from your IDE:
1. Open `SchemaGenerator.java`
2. Right-click → Run As → Java Application

### Step 2: Check Generated Schema

The generated schema will be saved to:
```
src/main/resources/db-schema-generated.sql
```

## Method 2: Using Spring Boot CommandLineRunner

### Step 1: Enable Schema Generation

Add to `application-dev.properties`:
```properties
generate.schema=true
```

### Step 2: Run Application

```bash
mvn spring-boot:run
```

The schema will be generated on startup and saved to `db-schema-generated.sql`.

**Important:** Set `generate.schema=false` after generation to avoid regenerating on every startup.

## Method 3: Using JUnit Test

### Step 1: Run the Test

```bash
mvn test -Dtest=SchemaGeneratorTest#generateSchema
```

Or run `SchemaGeneratorTest` from your IDE.

## Method 4: Using Hibernate DDL Auto (Quick but Destructive)

### Step 1: Update application-dev.properties

```properties
spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

### Step 2: Capture SQL Output

Run the application and capture the SQL output from console/logs.

**Warning:** This will drop and recreate all tables! Use only for development.

### Step 3: Revert Settings

After capturing the schema, revert to:
```properties
spring.jpa.hibernate.ddl-auto=validate
```

## Method 5: Using Maven Plugin (Advanced)

Add to `pom.xml`:

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>hibernate3-maven-plugin</artifactId>
    <version>3.0</version>
    <configuration>
        <components>
            <component>
                <name>hbm2ddl</name>
                <outputDirectory>src/main/resources</outputDirectory>
            </component>
        </components>
        <componentProperties>
            <drop>false</drop>
            <create>true</create>
            <export>true</export>
            <outputfilename>db-schema-generated.sql</outputfilename>
            <format>true</format>
        </componentProperties>
    </configuration>
</plugin>
```

Then run:
```bash
mvn hibernate3:hbm2ddl
```

## Comparing Generated Schema with Existing Schema

After generation, compare the generated schema with your existing `schema.sql`:

```bash
# On Linux/Mac
diff angular-app/database/schema.sql backend/src/main/resources/db-schema-generated.sql

# On Windows PowerShell
Compare-Object (Get-Content angular-app/database/schema.sql) (Get-Content backend/src/main/resources/db-schema-generated.sql)
```

## Notes

1. **Entity Order**: The generator handles entity dependencies automatically
2. **Foreign Keys**: Foreign key constraints are generated based on `@ManyToOne`, `@OneToOne`, etc.
3. **Indexes**: Indexes from `@Index` annotations are included
4. **Enums**: Enum types are converted to VARCHAR columns
5. **Timestamps**: `@CreatedDate` and `@LastModifiedDate` fields are included

## Troubleshooting

### Issue: "Cannot find entity classes"

**Solution**: Ensure all entity classes are added to `SchemaGenerator.addEntityClasses()`

### Issue: "Dialect not found"

**Solution**: Ensure MySQL connector dependency is in `pom.xml`:
```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>
```

### Issue: Generated schema doesn't match entities

**Solution**: 
1. Check entity annotations (@Entity, @Table, @Column)
2. Verify field types match database types
3. Check naming strategy settings

### Issue: Foreign key constraints missing

**Solution**: Ensure relationships are properly annotated with `@ManyToOne`, `@OneToMany`, etc.

## Best Practices

1. **Version Control**: Commit the generated schema for reference
2. **Review**: Always review generated schema before applying to database
3. **Backup**: Backup existing database before applying new schema
4. **Migration**: Use Flyway or Liquibase for production schema migrations
5. **Sync**: Keep entities and schema.sql in sync

## Using Generated Schema

After generation, you can:

1. **Review** the generated schema
2. **Compare** with existing schema.sql
3. **Update** schema.sql if needed
4. **Apply** to database:
   ```bash
   mysql -u root -p admin_member_portal < src/main/resources/db-schema-generated.sql
   ```

## Integration with CI/CD

You can integrate schema generation into your build process:

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>exec-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>generate-schema</id>
            <phase>generate-resources</phase>
            <goals>
                <goal>java</goal>
            </goals>
            <configuration>
                <mainClass>com.portal.util.SchemaGenerator</mainClass>
            </configuration>
        </execution>
    </executions>
</plugin>
```

