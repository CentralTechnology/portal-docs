# License Monitoring System

## Manual Device Authentication

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

> Need help entering the credentials on the agent? see [here](lms/configuration?id=manual-device-authentication).


### Update a device

1. Navigate to the Custom Devices section which can be found under the ** Administration ** menu. [Administration > Custom Devices](https://portal.ct.co.uk/Administration/CustomDevices).
2. Under the Actions menu against the device you would like to make changes to, select **Edit**.
3. A modal form will appear with the device details. 
> **Note** The **Device Id** field is ***readonly***. If you would like to make a change to this value then delete and create a new device.

![alt text][update-custom-device]

### Disable a device

1. Navigate to the Custom Devices section which can be found under the ** Administration ** menu. [Administration > Custom Devices](https://portal.ct.co.uk/Administration/CustomDevices).
2. Under the Actions menu against the device you would like to make changes to, select **Activate/Deactivate**.
3. You will then be prompted to confirm your action, select **Yes**.

### Delete a device

1. Navigate to the Custom Devices section which can be found under the ** Administration ** menu. [Administration > Custom Devices](https://portal.ct.co.uk/Administration/CustomDevices).
2. Under the Actions menu against the device you would like to make changes to, select **Delete**.
3. You will then be prompted to confirm your action, select **Yes**.

[create-custom-device]: /portal/_images/create-custom-device.jpg "Create Custom Device Form"
[update-custom-device]: /portal/_images/update-custom-device.jpg "Update Custom Device Form"
