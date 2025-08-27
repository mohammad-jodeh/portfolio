interface ProfileHeaderProps {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
}

const ProfileHeader = ({ name, title, location, email, phone }: ProfileHeaderProps) => {
  return (
    <div className="profile-header">
      <div className="profile-content">
        <div className="profile-avatar">
          <img src="/mohammad.jpg" alt="Mohammad Abojodeh" className="profile-photo" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{name}</h1>
          <h2 className="profile-title">{title}</h2>
          <div className="profile-details">
            <div className="profile-item">📍 {location}</div>
            <div className="profile-item">📧 {email}</div>
            <div className="profile-item">📱 {phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
