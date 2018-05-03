# Deployment 

## Automatic

#### LMS Users
CentraStage has a built in filter that automatically deploys the LMS agent to servers that match this criteria
> 
- Windows 2008 and above
- Primary Domain Controller

The LMS agent ** CAN ** be deployed to member servers as opposed to PDC's. In order to acheive this, you must either manually install the agent or manually deploy the
agent through the component in CentraStage. Then you can active the `PDC Override` option through the [configuration menu](lms/configuration).

#### LMS Veeam
CentraStage has a group that servers have to be manually added to. This ensures that the LMS agent is only installed on servers that have our license.

Here is a quick tutorial on how to add servers to the correct group.

1. Login into [CentraStage](https://centrastage.net/csm/)
2. Find the device you wish to deploy using the search bar at the top.
3. Make sure the device is selected and select ** Add device(s) to group **.
4. Make sure the "SplaVeeam" group is select and click "Add".

> The LMS agent will be deployed every morning at 03:00.

## Manual

> If a clients device is not in CentraStage, then please visit this [page](portal/lms?id=manual-device-authentication) for how to manually setup authentication.

This tutorial will demonstrate how to manually deploy the LMS agent through CentraStage.

1. Login into [CentraStage](https://centrastage.net/csm/)
2. Find the device you wish to deploy using the search bar at the top.
3. Make sure the device is selected and select ** Run a quick job **.
![alt text][server-selection]

4. Select the component ** Deploy License Monitoring System ** and click "Save".
![alt text][component-selection]

5. This will take you through to another page where you can monitor the progress of the deployment. Once it has been deployed there should be no more configuration required.

Problems? view [troubleshooting](lms/troubleshooting)

[server-selection]: /lms/_images/server-selection.jpg "Run quick job on the server"
[component-selection]: /lms/_images/component-selection.jpg "Select the component to run"
