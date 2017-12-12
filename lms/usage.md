# Usage

## CLI

!> In order to run the monitors manually, the `License Monitoring System` service **MUST** be stopped.

#### Monitor Users
This command will immediately run the Users monitor.

```powershell
.\LMS.exe run --monitor Users
```

!> We have made the process of stopping the service and running the users monitor easier. Check out the [Assistant Tool](lms/tools?id=assistant) for more information.

#### Monitor Veeam
This command will immediately run the Veeam monitor.

```powershell
.\LMS.exe run --monitor Veeam
```

#### Enable Debug
This argument is used in conjuction with one of the monitors described above. This can be very useful if the monitor is failing and the error message doesn't tell the full story. This will provide a complete output of what is happening during the monitor execution.

```powershell
.\LMS.exe run --monitor Users --verbose
```

#### Skip Startup
This argument is used in conjuction with one of the monitors described above. Sometimes you just need to get on with it, the startup process does some extra checks such as validating credentials and making sure the required services are available. As the name suggests, this skips all of that.

```powershell
.\LMS.exe run --monitor Users --skip-startup
```

#### Help

you can access all the available options by running the help command.

```powershell
.\LMS.exe run --help 
```
output:
```powershell
License Monitoring System 0.0.0.0
Copyright (C) 2017 Central Technology Ltd
USAGE:
Run "Users" monitor:
  lms.exe run --monitor Users
Run "Veeam" monitor:
  lms.exe run --monitor Veeam
Run monitor verbose:
  lms.exe run --monitor Users --verbose
Run monitor, but skip startup:
  lms.exe run --monitor Users --skip-startup

  -m, --monitor         (Default: None) Runs the requested monitor.

  -s, --skip-startup    (Default: false) Avoids running the startup process which checks for api credentials.

  -v, --verbose         (Default: false)

  --help                Display this help screen.

  --version             Display version information.
```

## Web

!> Unlike the CLI, the `License Monitoring System` service does not have to be stopped to run monitors from the web ui.

The agent comes with a minimal web interface that can be access from the following url `http://localhost:9000`.
The web interface allows you to run monitors on demand and see the history of any previously run monitors.

!> The history of monitors is stored in an in-memory database. This means the history does not persist between service restarts.

#### Run a monitor

1. Navigate to `http://localhost:9000/recurring` on the server where the agent is installed.
2. You should see a list of the monitors that are available to run.

  ![alt text][hangfire-recurring-jobs]

  > In general there is only ever one job unless Veeam is installed on a Primary Domain Controller and the agent is set to monitor both Veeam and the Users.

3. Select the monitor you wish to run and click **Trigger now**.
4. To view the progress of the monitor, navigate to this url `http://localhost:9000/jobs/processing`.

  ![alt text][hangfire-processing-jobs]

5. To view the progress/output of the job, select the `Id` hyperlink.

  ![alt text][hangfire-job-output]

Providing everything runs as expected, the job should disappear to the `Succeeded` page. If there are any issues then the error message will be displayed in the job output.

[hangfire-recurring-jobs]: /lms/_images/hangfire-recurring-jobs.jpg "Hangfire recurring jobs"
[hangfire-processing-jobs]: /lms/_images/hangfire-processing-jobs.jpg "Hangfire processing jobs"
[hangfire-job-output]: /lms/_images/hangfire-job-output.jpg "Hangfire job output"
