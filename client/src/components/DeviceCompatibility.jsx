// src/components/DeviceCompatibility.jsx
import React from 'react';
import './DeviceCompatibility.css'
function DeviceCompatibility() {
  const devices = [
    {
      name: "Android",
      icon: "android",
      description: "Works with Android 6.0 and higher. Download the app from Google Play Store."
    },
    {
      name: "iOS",
      icon: "apple",
      description: "Compatible with iOS 12 and above. Download from the App Store."
    },
    {
      name: "Amazon Fire",
      icon: "tablet",
      description: "Works with all Fire tablets. Download from Amazon Appstore."
    }
  ];

  return (
    <div className="device-compatibility">
      <h2 className="section-title">Device Compatibility</h2>
      <div className="devices-container">
        {devices.map((device, index) => (
          <div key={index} className="device-card">
            <div className="device-icon">
              <span className="material-icons">{device.icon}</span>
            </div>
            <h3 className="device-name">{device.name}</h3>
            <p className="device-description">{device.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeviceCompatibility;