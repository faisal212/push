self.addEventListener('push', function(event) {
  const data = event.data.json();
  console.log('Push received with data:', data);
  const title = data.title || 'Default Title';
  const message = data.message || 'Default Message';
  const customData = data.customData || {}; // Access your custom data here
  // Handle the push event, display the notification, etc.
  self.registration.showNotification(title, {});
});