import { useState } from 'react';
import { portfolioFiles, type FileItem } from './data/portfolioData';
import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import StatusBar from './components/StatusBar';
import './styles/vscode.css';

interface Tab {
  id: string;
  name: string;
  content: string;
  language: string;
  type: 'file' | 'folder';
}

function App() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const openFile = (file: FileItem) => {
    if (file.type === 'folder') return;

    // Check if tab is already open
    const existingTab = openTabs.find(tab => tab.id === file.id);
    if (existingTab) {
      setActiveTab(file.id);
      return;
    }

    // Create new tab
    const newTab: Tab = {
      id: file.id,
      name: file.name,
      content: file.content || '',
      language: file.language || 'text',
      type: file.type
    };

    setOpenTabs(prev => [...prev, newTab]);
    setActiveTab(file.id);
  };

  const closeTab = (tabId: string) => {
    setOpenTabs(prev => prev.filter(tab => tab.id !== tabId));
    
    // If closing active tab, switch to another tab
    if (activeTab === tabId) {
      const remainingTabs = openTabs.filter(tab => tab.id !== tabId);
      setActiveTab(remainingTabs.length > 0 ? remainingTabs[remainingTabs.length - 1].id : null);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="vscode-container">
      <div className="vscode-main">
        <ActivityBar onToggleSidebar={toggleSidebar} />
        
        {sidebarVisible && (
          <Sidebar 
            files={portfolioFiles}
            onFileClick={openFile}
          />
        )}
        
        <MainContent 
          tabs={openTabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          onTabClose={closeTab}
        />
      </div>
      
      <StatusBar 
        activeFile={openTabs.find(tab => tab.id === activeTab)?.name}
        totalFiles={openTabs.length}
      />
    </div>
  );
}

export default App;
