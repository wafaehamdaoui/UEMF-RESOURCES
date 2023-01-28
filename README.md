# UEMF-RESOURCES MERN App
CRUD Application With MERN Stack in the contexe of smart university
## Introduction :
We use CRUD apps every day. Most of the time, without noticing. They keep us organized, they help digitise business processes, and they’re critical to application development. But many of us are oblivious to what CRUD apps are, or how to build one. Within this project, I am going to explain what is a CRUD application and I will present to you an example of CRUD app and I will show you how to use it correctly.
Before we move further let’s understand
### 1. What is a MERN app?
MERN stands for MongoDB, Express, React, Node.js and this combined stack is known as MERN stack.
The MERN Stack is very popular with many developers because it allows you to quickly develop full stack web applications with a single programming language: JavaScript.
### Problem :
Our university has a soprtive infrastructure, digital infrastructures and workspaces, but it has a limited capacity so to use them we should make a reservation before 
at a security guard in a manual way For this I thought of touching on this interesting subject and facilitating the task of this type of services by developing a dynamic website for the reservation of resources using a very widespread technology which is the MERN Stack.
### Solution 
The solution I propose is named uemf resources. which is a web application that allows uemf students to reserve any resource in one click.

Therefore, the programming of this web application will be carried out in Node js for several reasons like: run JavaScript in a single thread, and the processing is asynchronous...

Regarding my work environment, I work under windows, I use Visual Studio Code.

### Objectives : 
Our work should achieve the following objectives:
* `For students:`
1. Login,
2. Consult resources,
3. Add request => Ask for resource,
4. See list of requests ,
5. Modify request(date, duration, resources...),
6. Cancel request,
7. Logout.

* `For admin:`
1. Login,
2. See list of requests,
3. Validate request,
4. Reject request ,
5. Delete request,
6. See list of users(Students),
7. Add user(student) ,
8. Delete user(student),
9. Logout.

#### Database:
IN this project I created two schema or two models :
- *User*: it represent users of my app ![image](https://user-images.githubusercontent.com/75392302/210186881-839095fb-da44-4296-a163-e37e8001a807.png)
there is two types of user, we have setudents whose use app(request for a ressources) and we have admin who manage and control the app  
- *Demande*: which represent reservation request that users do.![image](https://user-images.githubusercontent.com/75392302/210186870-e8e26228-3c62-4dc8-b6f0-588ddffed28e.png)

#### User Interface:
UEMF resources is an application, which will be used by university students most of the time, so the application requires a graphics engine powerful front-end.
* Login page:![image](https://user-images.githubusercontent.com/75392302/215200517-ff939411-1cf7-4adb-b97f-0f2e5611c1da.png)
User can authenticate with his login and password to take advantage of the application's features.
This interface allows you to enter:
- The username
- The user's password

If the authentication is done correctly, the application opens on the main window.

### If we log in as a simple user(student):
* `Principale interface:`![image](https://user-images.githubusercontent.com/75392302/215272221-be49085b-6f32-455c-807d-c19b115ae404.png)

In this interface we find the header (the logo and menu) in the body we find the list of images of resources.

* `Interface demander:` By clicking on Demander, we will be redirected to the request resource page as follows:![image](https://user-images.githubusercontent.com/75392302/215223603-26421103-0f60-402f-9f6d-e9ad70c86cab.png) if we click on create the server will chek if a request with the same date and duration for the same resource the creation will rejected if not the request will be ceated successfully and we will be redirected to the request list.

* `Interface Mes Demandes :` By clicking on Demandes list, we will be redirected to the requests list page as follows:![image](https://user-images.githubusercontent.com/75392302/215224839-71cd4424-62fd-4080-8f21-da8684a1e4b7.png)
As we can see we have the rigth to modify or cancel a request.

1. Modify request: 
By clicking on editer, we will be redirected to the request modification page as follows:![image](https://user-images.githubusercontent.com/75392302/215225126-d6fc2bad-ef9f-4acc-a44a-e410f8f96a11.png)
and if we click on effectuer modification the system will check if a request with the same date and duration for the same resource the modification will rejected if not the modification will be done successfully.

2. Cancel request:  
By clicking on cancel the request will disappeared from the list and it will be deleted on the database.![image](https://user-images.githubusercontent.com/75392302/215226213-19c9b665-f57b-4392-9345-986a700682f9.png).

* `About Interface:`![image](https://user-images.githubusercontent.com/75392302/215226486-1277eb48-75e5-4e67-9e65-f4e725789c69.png).

* To logout we click on `déconnecter`

### If we log in as an admin :

* `Principale interface:`![image](https://user-images.githubusercontent.com/75392302/215272314-6cd3da00-4b9b-416f-8e3b-b8810cd30545.png)

* `Interface Créer utilisateur:` By clicking on Créer utilisateur, we will be redirected to the adding user page as follows:![image](https://user-images.githubusercontent.com/75392302/215273817-f7370e07-fad6-4eed-b0c4-95113f9e0dad.png)

if we click on create the server will chek if a user with the same information exist in the database, if yes the creation will rejected if not the user will be added successfully and we will be redirected to the users list.

* `Interface Demandes list:` By clicking on Liste Demandes, we will be redirected to the requests list page as follows:![image](https://user-images.githubusercontent.com/75392302/215272379-7ca043aa-2aaa-4b8f-a588-5f788aade0eb.png)

As we can see we have the rigth to Validate or Reject or Deleete a request.
By defaut status of a request is "En Attente".

1. Validate request: 
By clicking on Valider the status of the request will change and be "Validée":![image](https://user-images.githubusercontent.com/75392302/215272602-c213c9a9-cb40-45cc-b28a-4c188a33381a.png)

and the server will send an email of confirmation to the student has done this request like following :![image](https://user-images.githubusercontent.com/75392302/215272439-73533f7e-66df-4885-b708-824bea85e1a6.png)
![image](https://user-images.githubusercontent.com/75392302/215271966-631cfd6c-fbe6-49ef-841b-c7b84ec4eeee.png)
![image](https://user-images.githubusercontent.com/75392302/215271984-8c9fb1e6-8801-43ab-b74b-8d54aba943aa.png)

2. Reject request: 
By clicking on Rejeter the status of the request will change and be "Rejetée":![image](https://user-images.githubusercontent.com/75392302/215272723-976aa85b-df45-4230-ab40-50a8341139ba.png)

and the server will send an email of rejection to the student has done this request like following:![image](https://user-images.githubusercontent.com/75392302/215271947-170a9ce4-c526-4986-a2af-54eeffe718c8.png)

3. Delete request:  
By clicking on Supprimer the request will disappeared from the list and it will be deleted on the database.![image](https://user-images.githubusercontent.com/75392302/215272771-458cd6c2-9a0d-4a4f-9b8d-8bd87fde3adc.png)

* `Interface Users list:` By clicking on Liste Utilisateurs, we will be redirected to the users list page as follows:![image](https://user-images.githubusercontent.com/75392302/215272927-67dcd086-6879-4f7f-85b5-1620dfcbdc26.png)

As we can see we have the rigth to Modify or Delete or user.

1. Modiry request: 
By clicking on editer the status of the request will change and be "Validée":![image](https://user-images.githubusercontent.com/75392302/215272602-c213c9a9-cb40-45cc-b28a-4c188a33381a.png)

1. Modify user: 
By clicking on editer, we will be redirected to the user modification page as follows:![image](https://user-images.githubusercontent.com/75392302/215273069-7bd9c476-633f-44e8-a16f-c8e64d519972.png)

and if we click on effectuer modification the system will check if a user with the same username or email whit an other id in the database, if yes the modification will rejected if not the modification will be done successfully.

2. Cancel request:  
By clicking on cancel the request will disappeared from the list and it will be deleted on the database.![image](https://user-images.githubusercontent.com/75392302/215273325-80a88012-68f4-4397-8361-07e50de1f966.png)

* To logout we click on `déconnecter`




