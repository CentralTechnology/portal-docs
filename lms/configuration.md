# Configuration

The agent provides the ability to alter the configuration through the cli. This allows the agent to operation in instances where it doesn't follow the default setup, such as a client that is not in CentraStage.

## CLI

All the commands should be executed from a powershell terminal in the same directory as the agent executable.

#### Autotask Account

This should only be used when an agent requires manual authentication.
The command accepts an integer which should be the Autotask Account ID.

```powershell
.\LMS.exe update --account 12345
```

#### CentraStage Device

This should only be used when an agent requires manual authentication.
The command accepts a GUID which should be the CentraStage Device ID or the GUID that was entered into the Portal for manual authentication.

```powershell
.\LMS.exe update --device 2ff7b98c-a9d9-4a37-b234-0c4c4d0292e2
```

#### PDC Override
This should be only be used when the agent has been installed on a member server, not a primary domain controller.
This command accepts a boolean.

```powershell
.\LMS.exe update --pdc-override True
.\LMS.exe update --pdc-override False
```

#### Force User Monitoring
This should only be used when the startup checks fail and you know the agent can successfully monitor the server for users.
This command accepts a boolean.

```powershell
.\LMS.exe update --force-users True
.\LMS.exe update --force-users False
```

#### Force Veeam Monitoring
This should only be used when the startup checks fail and you know the agent can successfully monitor the server for Veeam license usage.
This command accepts a boolean.

```powershell
.\LMS.exe update --force-veeam True
.\LMS.exe update --force-veeam False
```

#### Help

you can access all the available options by running the help command.

```powershell
.\LMS.exe update --help 
```
output:
```powershell
License Monitoring System 0.0.0.0
Copyright (C) 2017 Central Technology Ltd
USAGE:
Update Autotask Account:
  lms.exe update --account 12345
Update CentraStage Device:
  lms.exe update --device c2f4ce33-d76a-419b-a378-44128110e9e1
Enable PDC override:
  lms.exe update --pdc-override True
Force user monitoring:
  lms.exe update --force-users True
Force veeam monitoring:
  lms.exe update --force-veeam True

  -p, --pdc-override    Allows the users monitor to run from a member server

  --force-users         Enables the user monitoring to run even if the startup checks fail

  --force-veeam         Enables the veeam monitoring to run even if the startup checks fail

  -a, --account         Autotask account id

  -d, --device          CentraStage device id

  --help                Display this help screen.

  --version             Display version information.
```

## Manual Device Authentication

!>Please make sure the relevant device has been configured in the Portal before proceeding. Instructions for this can be found [here](portal/lms?id=manual-device-authentication)

Enter the details from the Portal using this command.

```powershell
.\LMS.exe update --account <Autotask Account ID> --device <CentraStage Device GUID> 
```

