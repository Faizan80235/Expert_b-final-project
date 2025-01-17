import React from 'react';

export const ProfileForm = () => (
  <div className="container collapse" id="profileForm" data-bs-parent="#formGroup">
    <div className="profile-container p-4 rounded shadow">
      <h2>My Profile</h2>
      <div>
        <div className="card" style={{ width: '18rem', border: 'none' }}>
          <a href="https://www.fotor.com/features/ai-profile-picture-generator/" target="_blank">
            <img
              src="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg"
              className="card-img-top rounded-circle border border-3 img-fluid"
              alt="Profile Picture"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-text">
              <strong>Email:</strong> john.doe@example.com
              <br />
              <strong>Phone:</strong> +1234567890
              <br />
              <strong>Date of Birth:</strong> Jan 1, 1990
              <br />
              <strong>Bio:</strong> Passionate about technology and innovation. Loves coding and exploring new trends in software development.
            </p>
            <a href="#" className="btn btn-primary">Edit Profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
