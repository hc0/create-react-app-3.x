import React from "react";
import * as noti from "notificationcenter";

export default function NotificationCenter(Target) {
  const WithSubscription = props => (
    <div>
      <Target {...props} notification={noti} />
    </div>
  );
  WithSubscription.displayName = `Notification(${Target.name})`;
  return WithSubscription;
}
