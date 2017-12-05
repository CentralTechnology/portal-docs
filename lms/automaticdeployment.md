# Automatic Deployment

### LMS Users
CentraStage has a built in filter that automatically deploys the LMS agent to servers that match this criteria
> 
- Windows 2008 and above
- Primary Domain Controller

The LMS agent ** CAN ** be deployed to member servers as opposed to PDC's. This requires a manual installation and to active the option through the agents menu system.

### LMS Veeam
CentraStage has a group that servers have to be manually added to. This ensures that the LMS agent is only installed on servers that have our license.

Here is a quick tutorial on how to add servers to the correct group.

1. Login into [CentraStage](https://centrastage.net/csm/)
2. Find the device you wish to deploy using the search bar at the top.
3. Make sure the device is selected and select ** Add device(s) to group **.
4. Make sure the "SplaVeeam" group is select and click "Add".

> The LMS agent will be deployed every morning at 03:00.

If you don't want to wait until this time, then you can [manually](/lms/manualdeployment) deploy the LMS agent.
