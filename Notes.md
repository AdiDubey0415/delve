How to approach the problem:
Client will hit apis to get data
Server will hit supabase functions to get data and return
Server will also collect logs and store in supabase
Mostly data is listing kind, including logs, along with features like search, pagination, etc.

09.02.25

1. Setup supabase and supabase functions
2. Setup server to hit supabase and create apis
3. Setup client to hit server and get data
   a. Create Login, Logout routes - assuming user is already signed up
   b. Create routes for listing - Projects, Tables, Users
   c. Create routes for logs - Logs, Logs by Project, Logs by Table, Logs by User
4. Handle authentication using supabase auth

6pm-7.30pm

1. Setup client to hit server and get data
   a. Create Login, Logout routes - assuming user is already signed up
   b. Create routes for listing - Projects, Tables, Users
   c. Create routes for logs - Logs, Logs by Project, Logs by Table, Logs by User

Need to add

1. Error handling
2. Authentication
3. Dark/Light Theme ability
4. Appropriate colors for logs

I have different datas like so

[
{ id: 1, name: "Project Alpha", pitr_enabled: true },
{ id: 2, name: "Project Beta", pitr_enabled: false },
{ id: 3, name: "Project Gamma", pitr_enabled: true },
{ id: 4, name: "Project Gamma", pitr_enabled: true },
{ id: 5, name: "Project Gamma", pitr_enabled: true },
{ id: 6, name: "Project Gamma", pitr_enabled: true },
{ id: 7, name: "Project Gamma", pitr_enabled: true },
{ id: 8, name: "Project Gamma", pitr_enabled: true },
{ id: 9, name: "Project Gamma", pitr_enabled: true },
]

[
{ id: 1, name: "Users", rls_enabled: true },
{ id: 2, name: "Orders", rls_enabled: false },
{ id: 3, name: "Transactions", rls_enabled: true },
]

[
{ id: 1, name: "Alice", role: "Admin", mfa_enabled: true },
{ id: 2, name: "Bob", role: "Editor", mfa_enabled: false },
{ id: 3, name: "Charlie", role: "Viewer", mfa_enabled: true },
]

[
{
timestamp: "2025-02-09T10:15:30Z",
level: "error",
component: "projects",
message: "Failed to fetch project details from the database",
},
{
timestamp: "2025-02-09T10:16:45Z",
level: "info",
component: "tables",
message: "Successfully fetched list of tables",
},
{
timestamp: "2025-02-09T10:17:20Z",
level: "warning",
component: "users",
message: "User authentication took longer than expected",
}
]

Now I need my List component to handle this data along with search and filters and it should work something like this

<List
data={data}
columns={columns}
searchOnFields={['name', 'description']}
filterOnFields={['level', 'component']}
/>

now if my data has name and description, then I can search on those fields and the result should be filtered based on the search query, similarly if I have filterOnFields, then i should get 2 dropdown filters in the UI and then the result should be filtered based on those fields

So my List component should be able to handle all this, along with pagination, sorting, etc.
