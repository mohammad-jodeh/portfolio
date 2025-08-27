interface StatusBarProps {
  activeFile?: string;
  totalFiles: number;
}

const StatusBar = ({ activeFile, totalFiles }: StatusBarProps) => {
  return (
    <div className="status-bar">
      <div className="status-item">
        {activeFile ? `Editing: ${activeFile}` : 'Mohammad Abojodeh - Backend Developer Portfolio'}
      </div>
      <div className="status-item">
        Files Open: {totalFiles}
      </div>
      <div className="status-item">
        TypeScript React
      </div>
      <div className="status-item">
        UTF-8
      </div>
    </div>
  );
};

export default StatusBar;
