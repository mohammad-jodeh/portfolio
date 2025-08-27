import { X, File } from 'lucide-react';
import ProfileHeader from './ProfileHeader';

interface Tab {
  id: string;
  name: string;
  content: string;
  language: string;
  type: 'file' | 'folder';
}

interface MainContentProps {
  tabs: Tab[];
  activeTab: string | null;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

const MainContent = ({ tabs, activeTab, onTabClick, onTabClose }: MainContentProps) => {
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const renderContent = (content: string, language: string) => {
    // Simple syntax highlighting for demo purposes
    if (language === 'markdown') {
      return (
        <div 
          className="editor-content"
          dangerouslySetInnerHTML={{ 
            __html: content
              .replace(/^# (.*$)/gm, '<h1>$1</h1>')
              .replace(/^## (.*$)/gm, '<h2>$1</h2>')
              .replace(/^### (.*$)/gm, '<h3>$1</h3>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/- (.*$)/gm, '<li>$1</li>')
              .replace(/\n/g, '<br />')
          }}
        />
      );
    }

    return (
      <div className="editor-content">
        <pre className="code-block">
          <code>{content}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="main-content">
      {tabs.length > 0 && (
        <div className="tab-bar">
          {tabs.map(tab => (
            <div 
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabClick(tab.id)}
            >
              <File size={16} className="tab-icon" />
              <span className="tab-name">{tab.name}</span>
              <div 
                className="tab-close"
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
              >
                <X size={12} />
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="editor">
        {activeTabData ? (
          renderContent(activeTabData.content, activeTabData.language)
        ) : (
          <div className="welcome-screen">
            <ProfileHeader 
              name="Mohammad Abojodeh"
              title="Backend Developer | Fresh Graduate"
              location="Amman, Jordan"
              email="moh.mb.dev@gmail.com"
              phone="+962 77 609 5592"
            />
            <div className="welcome-content">
              <div className="welcome-title">Welcome to My Portfolio</div>
              <div className="welcome-subtitle">Backend Development Journey</div>
              <div className="welcome-message">
                Click on any file in the sidebar to explore my projects, skills, and work experience.
                This VS Code-inspired interface showcases my journey as a backend developer with
                experience in Node.js, ASP.NET Core, PostgreSQL, and clean architecture principles.
                Fresh graduate passionate about backend development and eager to grow within a professional software team.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
