import { Files, Search, GitBranch, User } from 'lucide-react';

interface ActivityBarProps {
  onToggleSidebar: () => void;
}

const ActivityBar = ({ onToggleSidebar }: ActivityBarProps) => {
  return (
    <div className="activity-bar">
      <div className="activity-item active" onClick={onToggleSidebar}>
        <Files size={20} />
      </div>
      <div className="activity-item">
        <Search size={20} />
      </div>
      <div className="activity-item">
        <GitBranch size={20} />
      </div>
      <div className="activity-item">
        <User size={20} />
      </div>
    </div>
  );
};

export default ActivityBar;
