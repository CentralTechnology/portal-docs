# Custom Device Authentication

This tutorial will demonstrate how to create a the credentials for a **Custom Device**, and how to enter these credentials on the agent itself.

> 
- Before you begin, make sure the LMS agent has been deployed either [automatically](lms/automaticdeployment) or [manually](lms/manualdeployment).
- If you cannot see the relevant sections in the Portal then it will be related to your permissions. Please speak to your line manager about gaining access.


### Create a new Device

1. Navigate to the Custom Devices section which can be found under the ** Administration ** menu. [Administration > Custom Devices](https://portal.ct.co.uk/Administration/CustomDevices).
2. Select ** Add New ** which can be found above the table.
3. This will open a form modal. Here are the various fields you will need to fill in.
 - **Device Id**: This is what would be the CentraStage Id if it was installed. There is a link provided to randomly generate a new GUID.
 - **Hostname**: The hostname of the server. This can be changed after the device is created.
 - **Accounts**: This is a drop downlist of all the active Accounts stored in Autotask.
 - **Description**: Just a short description of why you are creating this custom device.
 
 **ALL fields are required.**
![alt text][create-custom-device]

4. Once you have completed the form, select save. The modal will close and the table will be refreshed with the new device. The device is created straight away so you can begin making api requests using the Device Id.

Please visit this [page](lms/agentcredentals) to learn how to configure the agent with the new credentials.

[create-custom-device]: /lms/create-custom-device.jpg "Create Custom Device Form"
### Update a device

1. Navigate to the Custom Devices section which can be found under the ** Administration ** menu. [Administration > Custom Devices](https://portal.ct.co.uk/Administration/CustomDevices).
2. Under the Actions menu against the device you would like to make changes to, select **Edit**.
3. A modal form will appear with the device details. 
> **Note** The **Device Id** field is ***readonly***. If you would like to make a change to this value then delete and create a new device.

![alt text][update-custom-device]
[update-custom-device]: /lms/update-custom-device.jpg "Update Custom Device Form"
### Disable a device

1. Navigate to the Custom Devices section which can be found under the ** Administration ** menu. [Administration > Custom Devices](https://portal.ct.co.uk/Administration/CustomDevices).
2. Under the Actions menu against the device you would like to make changes to, select **Activate/Deactivate**.
3. You will then be prompted to confirm your action, select **Yes**.

### Delete a device

1. Navigate to the Custom Devices section which can be found under the ** Administration ** menu. [Administration > Custom Devices](https://portal.ct.co.uk/Administration/CustomDevices).
2. Under the Actions menu against the device you would like to make changes to, select **Delete**.
3. You will then be prompted to confirm your action, select **Yes**.
