# Configure Agent Credentials

>- Before proceding, make sure you already have credentials. Visit this [page](lms/customdeviceauth) to learn how to configure new credentials.
- Make sure the agent is already installed. You can find instructions [here](lms/automaticdeployment) and [here](lms/manualdeployment).

1. Log onto the server that has the LMS agent installed.
2. Stop the **License Monitoring System** windows service.
3. Navigate to the installation directory
   
       | architecture | path 
       | ------------ | ---- 
       | x86         | C:\Program Files\License Monitoring System 
       | x64         | C:\Program Files (x86)\License Monitoring System 

4. Launch the **LMS.exe** file.
![alt text][agent-main-menu]

5. You can enter the credentials in the following location **Options > General**.
![alt text][agent-enter-credentials]

6. You will need to relaunch the program for the changes to take effect.

Problems? view [troubleshooting](lms/troubleshooting)

[agent-main-menu]: lms/agent-main-menu.jpg "LMS Agent main menu"
[agent-enter-credentials]: lms/agent-enter-credentials.jpg "LMS Agent credentials menu"
