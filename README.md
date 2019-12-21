# planB

## UI/UX Design + Development Tool

### https://mindgroup-mindmap.herokuapp.com/#/

### CORE COMPETENCY

-ENTER “subject” in textbox → subject becomes center of mindmap<br>
-SELECT boxes within mindmap to access chat feature<br>
-ADD branches to selected node with chat box by SELECTING chat bubble and pressing “enter” ON-CLICK<br>
-DELETE nodes with on-click “delete” key<br>
-MOVE nodes by selecting node and selecting desired column<br>
-COLOR-CODE nodes based on level in hierarchy of map<br>
-ENABLE admin functionality → INVITE collaborators + CREATE permissions

### BACKEND

-DB<br>
-Routes<br>
-Session

### FRONTEND

-Components<br>
-Reducers

### MEDIA INPUTS

-IMAGE functionality for “moodboard”<br>
-TEXT functionality for UX mindmap

### STRETCH

-EXPORT mindmap to PDF or PRINT

### TOOLS

-Go.js (mindmap)<br>
-Socket.io (chat)<br>
-Material UI + Bootstrap (UI)<br>
-Express Session (Login/security)<br>
-React / Redux (CRUD functionality)

### DB MODELS

#### USER

-name<br>
-email

#### SUBJECT (Chat Title + Center of MindMap)

-name

#### NODE (Idea [nested])

-name

### Mindmap

#### Chat Relations

-Subject BELONGSTO User<br>
-User HASMANY Subject<br>
-Node BELONGSTO User<br>
-User HASMANY Node

#### Mindmap Relations

-Node BELONGSTO Subject<br>
-Subject HASMANY Node

### IDS

#### NODE MODEL

-Has USER ID<br>
-Has SUBJECT ID<br>
-Has PARENT ID

#### SUBJECT MODEL

-Has CHILD ID<br>
-Has USER ID

#### USER MODEL

-IDEA ID
