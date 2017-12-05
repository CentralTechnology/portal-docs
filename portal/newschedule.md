# New Schedule
This tutorial will demonstrate how to create a new scheduled task within the Portal.

1. Navigate to the tenants section which can be found under the **Administration** menu. [Administration > Tenants](https://portal.ct.co.uk/Administration/Tenants).
2. Under the Actions menu against the tenant, select **Tasks**.
   ![alt text][tenants-action-menu]

3. This will show you all the currently schedule tasks for the selected tenant. To add a new task, select **Add New** from above the table. This will open a modal form.
4. The modal form is a wizard which will guide you through creating a new Task. The first windows shows all the available contracts for a Tenant.
> All scheduled tasks must be against an active contract.

  ![alt text][contract-selection]

5. The next step will allow you to choose a schedule. All schedules are relative to the contract start date.

   ![alt text][schedule-selection]

 > Example:
  - Contract Start Date: **01/12/2015**
  - Schedule: **Quarterly**
  
  This task would be executed **every December, March, June, September**.

6. The last step is to configure the information that will be passed across to Autotask. You have the option to use one of the pre-defined templates (top right) or to simply fill this in yourself.

   ![alt text][autotask-information]

7. Select **Save** once you are happy and the task will be scheduled.

### Default Ticket Information
Not all the configured options available in Autotask are available in this Task/Ticket creation process. The reason for this is to reduce any issues caused by Tickets created with the incorrect information, so some of the values have been hardcoded. Here are the defaults.
- Priority: **Low**
- Queue: **Service Management**
- Source: **Scheduler**
- Status: **New**
- Ticket Type: **Service Request**
- Work Type: **Service Management** 

[tenants-action-menu]: portal/tenants-action-menu.jpg "Tenants action menu"
[contract-selection]: portal/create-task-contract-selection.jpg "Create new task - Contract selection"
[schedule-selection]: portal/create-task-schedule-selection.jpg "Create new task - Schedule selection"
[autotask-information]: portal/create-task-autotask-information-selection.jpg "Create new task - Autotask information"
