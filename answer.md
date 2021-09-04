# IFCA Hands On Question

## Question 1
### Please write pseudocode/C++/Java/C# code to sort an array below in ascending order `[15,11,20,6,19]`.

`Answer: `
```javascript
const arr = [15,11,20,6,19];
arr.sort((a,b) => a-b);
console.log(arr);
```
## Question 2 & 3

`Table Name : USER`

| UserID    | UserName         | UserEmail          | Status    |
|-----------|------------------|--------------------|-----------|
| U121      | John Henry       | john@ifca.com.my   |  1        |
| U122      | Anisah Bt Mohd   | anisah@ifca.com.my |  1        |
| U123      | Alan Wong        | alan@ifca.com.my   |  1        |

`Table Name : USER_ROLES`

| UserRoleID    | UserID    | RoleID    | Status    |
|---------------|-----------|-----------|-----------|
| UR001         | U123      | R1        |  1        |
| UR002         | U123      | R2        |  1        |
| UR003         | U122      | R2        |  1        |

`Table Name : ROLES`

| RoleID        | RoleName              | Status    |
|---------------|-----------------------|-----------|
| R1            | Salesperson           |  1        |
| R2            | Sales manager         |  1        |
| R3            | Branch manager        |  1        |
| R4            | System Administrator  |  1        |
| R5            | Sales Admin           |  1        |

<br>

### (2) Write a SELECT sql statement to get the role name that currently User ID U123 does not have.

`Answer: `
```sql
SELECT ROLES.RoleName 
FROM ROLES 
INNER JOIN USER_ROLES ON USER_ROLES.RoleID = ROLES.RoleID
INNER JOIN USER ON USER.UserID = USER_ROLES.UserID
WHERE USER.UserID != 'U123'
```
### (3) Write a SELECT sql statement to get the user name, user email and total number of roles that each user have regardless of its status using GROUP BY.

`Answer:`
```sql
SELECT USER.UserName , USER.UserEmail , COUNT(USER.UserID)
FROM USER 
INNER JOIN  USER_ROLES ON USER_ROLES.UserID = USER.UserID
GROUP BY USER_ROLES.RoleID
```

## Question 4 
### Describe what is Constructor and Define the Constructor for User Class Object.

`Answer:`
``` java
/**
* Constructor is a method that will be called during the object 
* initialization. It purpose is to instatiate the property that need to be
* initialize upon creating the object.
*/

Example 

class User {

    String name;
    
    /*Constructor Method*/
    public User(String name) {
        this.name = name;
    }

}

User user = new User("Shahfiq"); // Class instatiate.

```
## Question 5
### Write some sample code in C++/C#/Java to Define a User Class object. Create a new User object and Assign value to it in Main() method.
`Answer:`
```java
class User {

    String name;
    
    public User(String name) {
        this.name = name;
    }

}

public class Main {

    public static void main(String[] args) {
        User user = new User("Shahfiq"); // Class instatiate.
        System.out.println(user.name);
    }

}

```




