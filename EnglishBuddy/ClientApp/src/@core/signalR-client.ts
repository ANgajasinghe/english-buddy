import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
  .withUrl('/CommentNotification')
  .configureLogging(signalR.LogLevel.Information)
  .build();
