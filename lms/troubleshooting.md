# Troubleshooting

### Installation
The default install location is as follows

| architecture | path |
| ------------ | ---- |
| x86          | C:\Program Files\License Monitoring System\ |
| x64          | C:\Program Files (x86)\License Monitoring System\ |

### Logs
Logs can provide vital information to the operation of the agent. The location of the logs can be found in these locations.

| architecture | path |
| ------------ | ---- |
| x86          | C:\Program Files\License Monitoring System\Logs\log.txt |
| x64          | C:\Program Files (x86)\License Monitoring System\Logs\log.txt |

### Debug
To enable debug mode
1. Navigate to the installation location.
2. Open the **log4net.config** file in your favourite text editor.
> **Note**: The configuration is an xml file, so generally notepad may not format it correctly. Notepad++ is recommended.
3. Find the following section of code
 ```
   <root>
    <appender-ref ref="ColoredConsoleAppender" />
    <appender-ref ref="RollingFileAppender" />
    <level value="Info" />
  </root>
 ```
and change it to this
 ```
   <root>
    <appender-ref ref="ColoredConsoleAppender" />
    <appender-ref ref="RollingFileAppender" />
    <level value="Debug" />
  </root>
 ```

> A **restart** of the service will be required for debug to take effect.
