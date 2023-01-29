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

- *User*: it represent users of my app                      
  ![image](https://user-images.githubusercontent.com/75392302/215274710-d981f05d-a3d2-412e-8002-f1f046ea873c.png)

- There is two types of user, we have setudents whose use app(request for a ressources) and we have admin who manage and control the app  

- *Demande*: which represent reservation request that users do.![image](https://user-images.githubusercontent.com/75392302/215274669-0b944786-8d56-4228-a566-7a5714403e04.png)
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

* `Interface demander:` 
By clicking on Demander, we will be redirected to the request resource page as follows:![image](https://user-images.githubusercontent.com/75392302/215223603-26421103-0f60-402f-9f6d-e9ad70c86cab.png) 

if we click on create the server will chek if a request with the same date and duration for the same resource the creation will rejected if not the request will be ceated successfully and we will be redirected to the request list.

* `Interface Mes Demandes :`
By clicking on Demandes list, we will be redirected to the requests list page as follows:![image](https://user-images.githubusercontent.com/75392302/215224839-71cd4424-62fd-4080-8f21-da8684a1e4b7.png)
 
As we can see we have the rigth to modify or cancel a request.

1. Modify request: 

By clicking on editer, we will be redirected to the request modification page as follows:![image](https://user-images.githubusercontent.com/75392302/215225126-d6fc2bad-ef9f-4acc-a44a-e410f8f96a11.png)
and if we click on effectuer modification the system will check if a request with the same date and duration for the same resource the modification will rejected if not the modification will be done successfully.

2. Cancel request:  
By clicking on cancel the request will disappeared from the list and it will be deleted on the database.![image](https://user-images.githubusercontent.com/75392302/215226213-19c9b665-f57b-4392-9345-986a700682f9.png).

* `About Interface:`![image](https://user-images.githubusercontent.com/75392302/215226486-1277eb48-75e5-4e67-9e65-f4e725789c69.png).

* To logout we click on `déconnecter`

### If we log in as an admin :

* `Principale interface:`
![image](https://user-images.githubusercontent.com/75392302/215272314-6cd3da00-4b9b-416f-8e3b-b8810cd30545.png)

* `Interface Créer utilisateur:` 
By clicking on Créer utilisateur, we will be redirected to the adding user page as follows:![image](https://user-images.githubusercontent.com/75392302/215273817-f7370e07-fad6-4eed-b0c4-95113f9e0dad.png)

if we click on create the server will chek if a user with the same information exist in the database, if yes the creation will rejected if not the user will be added successfully and we will be redirected to the users list.

* `Interface Demandes list:` 
By clicking on Liste Demandes, we will be redirected to the requests list page as follows:![image](https://user-images.githubusercontent.com/75392302/215272379-7ca043aa-2aaa-4b8f-a588-5f788aade0eb.png)

As we can see we have the rigth to Validate or Reject or Deleete a request.
By defaut status of a request is "En Attente".

1. Validate request: 

By clicking on Valider the status of the request will change and be "Validée":![image](https://user-images.githubusercontent.com/75392302/215272602-c213c9a9-cb40-45cc-b28a-4c188a33381a.png)

and the server will send an email of confirmation to the student has done this request like following :![image](https://user-images.githubusercontent.com/75392302/215272439-73533f7e-66df-4885-b708-824bea85e1a6.png)

![1674915648619](https://user-images.githubusercontent.com/75392302/215274430-d115eb47-15ba-43bd-bf22-e89fee1570a8.jpg)
![1674915904397](https://user-images.githubusercontent.com/75392302/215274450-99db807e-7f42-48b0-abe9-ef354fb2d9f3.jpg)

2. Reject request: 

By clicking on Rejeter the status of the request will change and be "Rejetée":
![image](https://user-images.githubusercontent.com/75392302/215274910-57b6dce4-4008-47f7-ae87-145edf2a97e4.png)

and the server will send an email of rejection to the student has done this request like following:                                    

![1674915904397](https://user-images.githubusercontent.com/75392302/215274193-57eb744c-acea-4f42-9782-c59a978e24d9.jpg)

3. Delete request:  
By clicking on Supprimer the request will disappeared from the list and it will be deleted on the database.![image](https://user-images.githubusercontent.com/75392302/215272771-458cd6c2-9a0d-4a4f-9b8d-8bd87fde3adc.png)

* `Interface Users list:` 
By clicking on Liste Utilisateurs, we will be redirected to the users list page as follows:![image](https://user-images.githubusercontent.com/75392302/215272927-67dcd086-6879-4f7f-85b5-1620dfcbdc26.png)

As we can see we have the rigth to Modify or Delete or user.

1. Modiry request: 
By clicking on editer the status of the request will change and be "Validée":![image](https://user-images.githubusercontent.com/75392302/215272602-c213c9a9-cb40-45cc-b28a-4c188a33381a.png)

1. Modify user: 
By clicking on editer, we will be redirected to the user modification page as follows:![image](https://user-images.githubusercontent.com/75392302/215273069-7bd9c476-633f-44e8-a16f-c8e64d519972.png)

and if we click on effectuer modification the system will check if a user with the same username or email whit an other id in the database, if yes the modification will rejected if not the modification will be done successfully.

2. Cancel request:  
By clicking on cancel the request will disappeared from the list and it will be deleted on the database.![image](https://user-images.githubusercontent.com/75392302/215273325-80a88012-68f4-4397-8361-07e50de1f966.png)

* To logout we click on `déconnecter`

### Server/api:
This part concerns the routing for more details you can see the file server.js 

## `Summary`:
Currently my application allows me to :
##### Show list of :(read)
- Users,
- Demandes,

#### Add an element in those lists :(create)
#### Modify an element in requests list by validate or reject a request :(update)
#### Modify an element in users list  :(update)
#### Cancel a request :(dalete)
#### Delete a user :(delete)

So My web application in a CRUD app par excellence!!!

### I also add some features to my app :

#### 1. If a student is not added to database ( or he enter false username or password) he can not connect to app ![image](https://user-images.githubusercontent.com/75392302/215276205-9d921304-4f93-4012-b915-da91c5e1d78b.png)

#### 2. when the student want to reserve a resource that is not available at this time the reservation will not be accepted and a message will be shown.![image](https://user-images.githubusercontent.com/75392302/215278733-c0cba2bc-4a0a-4166-bd11-ed905a983cfb.png)

#### 3. when the student want to modify a reservation of a resource that is not available at this time the modification will not be accepted and a message will be shown. ![image](https://user-images.githubusercontent.com/75392302/215278779-bf8f0487-05ae-4f12-b12e-64aa27e1e849.png)

#### 4. when the admin accept/refuse a request for a resource an email will send automatically to the student to inform him if he can get access to the resource or not 

#### 5. in term of security if we want to access to a page without login but just by type the path of the page a not found message will be shown ![image](https://user-images.githubusercontent.com/75392302/215279159-0b8066b5-c852-44ea-9bcc-2cf4bc5529e4.png)

### Deploiement:
To deploy my app I used  render web site ![image](https://user-images.githubusercontent.com/75392302/215335784-e5c82dbd-6c88-4c44-b30b-1916218df786.png)

### conclusion:

This project is part of the integrated project of the 4th year of the engineering cycle. It help students to reserve a ressource just by a click. However, we can still improve this application by adding more functionalities for example we can add a part where a student can create a group to play a football game or basketball... and waiting for other students to join (like what we do in carpooling apps)...

`From a personal point of view`, this project allowed me to develop many skills in web development and familiarize myself a little more with node js I learned a lot, both at backend part and at the frontend part. This experience will be an asset for the pursuit of my studies and for my professional career.

### If you want to visit my web app here is the link: https://uemf-ressources-u694.onrender.com
##### To login as admin:      username=admin  password=147896325
##### To login as student    username = wafae.hamdaoui    password = 123456789
                                                                                                                            
                                                                  Thank you for your attention!



