# Automatic Deployment

This tutorial will show you how the LMS agent is deployed automatically through CentraStage.
> ** Note **
-  If you need to manually deploy the agent, please see [here](/lms/manualdeployment)
-  LMS is automatically deployed to all ** Primary Domain Controllers ** that are within CentraStage. When monitoring Veeam servers, the device will need to be added to the group. Details are below.

1. Login into [CentraStage](https://centrastage.net/csm/)
2. Find the device you wish to deploy using the search bar at the top.
3. Make sure the device is selected and select ** Run a quick job **.
4. Select the component ** Deploy License Monitoring System ** and click "Save".
5. This will take you through to another page where you can monitor the progress of the deployment. Once it has been deployed there should be no more configuration required.

> The agent checks in every half an hour from when the service is started. 

